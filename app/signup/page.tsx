"use client";

import React, { useState } from "react";
import { LogoImg } from "../components/hoc/svgIcons";
import Image from "next/image";
import { initialValues, TInitialState, TStepsEnum, usersAvatars, SignUpSchema, TFields } from "./types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Formik, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "@/lib/mutations/signup";
import { ArrowUturnLeftIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import Loader from "../components/shared/loader";

const SignUp = () => {
   const router = useRouter();
   const [initialState, setInitialState] = useState<any>(initialValues);
   const [steps, setSteps] = useState<String>(TStepsEnum.STEP_INFO);
   const { fullName, email, username, password, confirmPassword, avatarUrl, terms } = initialState;

   const fields: TFields[] = [
      { name: "fullName", label: "Name", placeholder: "Enter name", val: fullName, type: "text", show: false },
      { name: "email", label: "Email Address", placeholder: "Enter email", val: email, type: "text", show: false },
      { name: "username", label: "Username", placeholder: "Enter username", val: username, type: "text", show: false },
      { name: "password", label: "Password", placeholder: "*********", val: password, type: "password", show: false },
      {
         name: "confirmPassword",
         label: "Confirm Password",
         placeholder: "*********",
         val: confirmPassword,
         type: "password",
         show: false,
      },
   ];

   const [fieldState, setFieldState] = useState<TFields[]>(fields);

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInitialState((prevState: TInitialState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const termsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = e.target;
      setInitialState((prevState: TInitialState) => ({
         ...prevState,
         terms: checked,
      }));
   };

   const handleProceed = () => {
      setSteps(TStepsEnum.STEP_AVATAR);
   };

   const [signUpMutation, { loading }] = useMutation(SIGNUP_MUTATION);

   const selectAvatarHandler = (url: string) => {
      setInitialState((prevState: TInitialState) => ({
         ...prevState,
         avatarUrl: url,
      }));
   };

   const goBackHandler = () => {
      setSteps(TStepsEnum.STEP_INFO);
   };

   const handleSubmit = () => {
      if (!avatarUrl) return toast.error("Kindly select your preferred avatar");
      if (!terms) return toast.error("Kindly accept terms and conditions");

      const request = {
         name: fullName,
         email,
         username,
         password,
         avatarUrl,
      };

      signUpMutation({
         variables: { ...request },
      })
         .then(() => {
            toast.success("Registration successful!");
            router.push("/");
         })
         .catch((err) => toast.error(err.message));
   };

   const showPasswordHandler = (name: string) => {
      const updatedFieldState = fieldState.map((f) => (f.name === name ? { ...f, show: !f.show } : f));
      setFieldState(updatedFieldState);
   };

   const showPasswordIcon = (type: string, name: string, show: boolean) => {
      if (type === "password") {
         if (show)
            return (
               <EyeIcon
                  className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => showPasswordHandler(name)}
               />
            );
         else
            return (
               <EyeSlashIcon
                  className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                  onClick={() => showPasswordHandler(name)}
               />
            );
      }
   };

   return (
      <div className="width-[100%] min-h-[100vh]  bg-[#fff] flex">
         <div className="w-[65%] bg-[#F0F3FD] h-cover p-[2rem] hidden sm:block">
            <Link href="/">
               <LogoImg />
            </Link>
            <div className="mt-[10rem]">
               <Image src="/login-bg.svg" alt="bg" width={300} height={400} className="w-[50%] m-auto" />
            </div>
         </div>
         <div className="w-[100%] md:w-[35%] py-[2rem] px-[1.5rem]">
            <div className="md:hidden">
               <Link href="/">
                  <LogoImg />
               </Link>
            </div>

            <div className="mt-[4rem] md:mt-[5rem] px-0 lg:px-[2.5rem]">
               <h1 className="text-[20px] md:text-[23px] font-[600] text-[#000000]">Welcome to Conversify</h1>
               <p className="mt-[.2rem] md:mt-[.6rem] mb-[1.4rem] text-[14px] md:text-[15px]">
                  Global inter-cultural social network
               </p>

               {steps === TStepsEnum.STEP_INFO && (
                  <Formik
                     initialValues={initialState}
                     enableReinitialize
                     validationSchema={SignUpSchema}
                     onSubmit={handleProceed}
                  >
                     {({ values, handleBlur, setValues }) => (
                        <Form>
                           {fieldState.map((field: TFields) => {
                              const { name, type, label, placeholder, show } = field;
                              return (
                                 <div className="mb-[1.3rem]" key={name}>
                                    <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px]">
                                       {label}
                                    </label>
                                    <div className="mt-[6px] relative">
                                       <input
                                          type={type !== "password" || show ? "text" : "password"}
                                          name={name}
                                          value={values[name]}
                                          className="w-[100%] border-[1px] border-[#DFE5EF] py-[.7rem] rounded-[7px] px-[12px] outline-[#5C87FF] text-[14px]"
                                          onChange={(e) => {
                                             changeHandler(e);
                                             setValues((prevState: TInitialState) => ({
                                                ...prevState,
                                                [name]: e.target.value,
                                             }));
                                          }}
                                          onBlur={handleBlur}
                                          placeholder={placeholder}
                                       />
                                       {showPasswordIcon(type, name, show)}
                                    </div>
                                    <ErrorMessage
                                       className="text-red-500 font-[500] text-[13px] mt-1"
                                       name={name}
                                       component="div"
                                    />
                                 </div>
                              );
                           })}
                           <button className="py-[.8rem] mt-[.8rem] rounded-[7px] w-[100%] bg-[#5D87FF] text-[#fff] font-[500]">
                              Proceed
                           </button>
                           <div className="mt-7 text-[15px]">
                              <p>
                                 Already have an Account?{" "}
                                 <span className="text-[15px] text-[#5D87FF]">
                                    <Link href="/">SignIn</Link>
                                 </span>
                              </p>
                           </div>
                        </Form>
                     )}
                  </Formik>
               )}
               {steps === TStepsEnum.STEP_AVATAR && (
                  <div>
                     <div
                        className="flex items-center gap-1 mb-5 text-[13px] cursor-pointer w-fit font-[500] text-[#5D87FF]"
                        onClick={goBackHandler}
                     >
                        <ArrowUturnLeftIcon className="w-[15px]" />
                        goBack
                     </div>
                     <h1 className="text-[16px] md:text-[18px] font-[500] text-[#2a3547]">Select avatar</h1>

                     <div className="grid grid-cols-3 gap-5 mt-5">
                        {usersAvatars.map((userAvatar) => {
                           return (
                              <div
                                 className={
                                    userAvatar === avatarUrl ? `border-[3px] border-[#65D3D8]` : "cursor-pointer"
                                 }
                                 key={userAvatar}
                              >
                                 <Image
                                    src={userAvatar}
                                    alt="user"
                                    width={200}
                                    height={200}
                                    onClick={() => selectAvatarHandler(userAvatar)}
                                 />
                              </div>
                           );
                        })}
                     </div>
                     <div className="flex  mt-6 gap-2">
                        <input
                           type="checkbox"
                           onChange={termsHandler}
                           className="w-[17px] h-[17px] outline-[#5D87FF]"
                        />
                        <p className="text-[13px] leading-1">
                           By checking the box, you acknowledge that you have obtained permission to share information
                           with us as the software provider.
                        </p>
                     </div>
                     <button
                        onClick={handleSubmit}
                        type="button"
                        disabled={loading}
                        className="py-[.8rem] mt-[3rem] rounded-[7px] w-[100%] bg-[#5D87FF] text-[#fff] font-[500] flex justify-center"
                     >
                        {loading ? <Loader /> : "Sign Up"}
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default SignUp;

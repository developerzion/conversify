"use client";

import React, { useState } from "react";
import { LogoImg } from "../components/hoc/svgIcons";
import Image from "next/image";
import { initialValues, TInitialState, TStepsEnum, usersAvatars, SignUpSchema, TFields } from "./types";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import { toast } from "react-toastify";

const SignUp = () => {
   const [initialState, setInitialState] = useState<any>(initialValues);
   const [steps, setSteps] = useState<String>(TStepsEnum.STEP_INFO);

   const { fullName, email, username, password, confirmPassword, avatarUrl, terms } = initialState;

   const fields: TFields[] = [
      { name: "fullName", label: "Name", placeholder: "Enter name", val: fullName, type: "text" },
      { name: "email", label: "Email Address", placeholder: "Enter email", val: email, type: "text" },
      { name: "username", label: "Username", placeholder: "Enter username", val: username, type: "text" },
      { name: "password", label: "Password", placeholder: "*********", val: password, type: "password" },
      {
         name: "confirmPassword",
         label: "Confirm Password",
         placeholder: "*********",
         val: confirmPassword,
         type: "password",
      },
   ];

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

   const selectAvatarHandler = (url: string) => {
      setInitialState((prevState: TInitialState) => ({
         ...prevState,
         avatarUrl: url,
      }));
   };

   const handleSubmit = () => {
      if (!avatarUrl) return toast.error("Kindly select your preferred avatar");
      if (!terms) return toast.error("Kindly accept terms and conditions");
      console.log(initialState);
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

            <div className="mt-[4rem] md:mt-[8rem] px-0 lg:px-[2.5rem]">
               <h1 className="text-[20px] md:text-[23px] font-[600] text-[#000000]">Welcome to Conversify</h1>
               <p className="mt-[.2rem] md:mt-[.6rem] mb-[1.4rem] text-[14px] md:text-[15px]">Global inter-cultural social network</p>

               {steps === TStepsEnum.STEP_INFO && (
                  <Formik
                     initialValues={initialState}
                     enableReinitialize
                     validationSchema={SignUpSchema}
                     onSubmit={handleProceed}
                  >
                     {({ values, handleBlur, setValues }) => (
                        <Form>
                           {fields.map((field: TFields) => {
                              const { name, type, label, placeholder } = field;
                              return (
                                 <div className="mb-[1.3rem]" key={name}>
                                    <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px]">
                                       {label}
                                    </label>
                                    <div className="mt-[6px]">
                                       <input
                                          type={type}
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
                                    <Link href="/signin">SignIn</Link>
                                 </span>
                              </p>
                           </div>
                        </Form>
                     )}
                  </Formik>
               )}
               {steps === TStepsEnum.STEP_AVATAR && (
                  <div>
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
                        className="py-[.8rem] mt-[3rem] rounded-[7px] w-[100%] bg-[#5D87FF] text-[#fff] font-[500]"
                     >
                        SignUp
                     </button>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default SignUp;

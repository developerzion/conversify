"use client";

import React from "react";
import { LogoImg } from "./components/hoc/svgIcons";
import Image from "next/image";
import { initialValues, TInitialState, SignInSchema, TFields } from "./signin/types";
import Link from "next/link";
import { Formik, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "@/lib/mutations/login";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Loader from "./components/shared/loader";
import { useAppDispatch } from "./store/utils/useAppDispatch";
import { loginUser } from "./store/features/userSlice";

const SignUp = () => {
   const dispatch = useAppDispatch();
   const router = useRouter();

   const fields: TFields[] = [
      { name: "email", label: "Email Address", placeholder: "email", type: "text" },
      { name: "password", label: "Password", placeholder: "*********", type: "password" },
   ];

   const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION);

   const handleSubmit = (values: TInitialState) => {
      loginMutation({
         variables: {
            email: values.email,
            password: values.password,
         },
      })
         .then(({ data: { loginAuth } }) => {
            dispatch(loginUser(loginAuth));
            router.push("/chat");
         })
         .catch((e) => toast.error(e.message));
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
               <p className="mt-[.2rem] md:mt-[.6rem] mb-[1.4rem] text-[14px] md:text-[15px]">
                  Global inter-cultural social network
               </p>
               <Formik
                  initialValues={initialValues}
                  enableReinitialize
                  validationSchema={SignInSchema}
                  onSubmit={handleSubmit}
               >
                  {({ handleBlur, handleChange }) => (
                     <Form>
                        {fields.map((field: TFields) => {
                           const { name, type, label, placeholder } = field;
                           return (
                              <div className="mb-[1.3rem]" key={name}>
                                 <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px]">{label}</label>
                                 <div className="mt-[6px]">
                                    <input
                                       type={type}
                                       name={name}
                                       className="w-[100%] border-[1px] border-[#DFE5EF] py-[.7rem] rounded-[7px] px-[12px] outline-[#5C87FF] text-[14px]"
                                       onChange={handleChange}
                                       onBlur={handleBlur}
                                       placeholder={placeholder}
                                    />
                                 </div>
                                 <ErrorMessage
                                    className="font-[500] text-red-500 text-[13px] mt-1"
                                    name={name}
                                    component="div"
                                 />
                              </div>
                           );
                        })}
                        <div className="flex items-center justify-between text-[13px] mt-1 mb-2">
                           <div className="flex items-center gap-1">
                              <input type="checkbox" className="w-[17px] h-[17px] outline-[#5D87FF]" />
                              Remember this device
                           </div>
                           <Link href="/" passHref>
                              <span className="text-[#5D87FF]">Forgot password</span>
                           </Link>
                        </div>
                        <button
                           disabled={loading}
                           className="py-[.8rem] mt-[.8rem] rounded-[7px] w-[100%] bg-[#5D87FF] text-[#fff] font-[500] flex justify-center"
                        >
                           {loading ? <Loader /> : "Sign In"}
                        </button>
                        <div className="mt-7 text-[15px]">
                           <p>
                              New to Conversify?{" "}
                              <span className="text-[15px] text-[#5D87FF]">
                                 <Link href="/signup">Create an Account</Link>
                              </span>
                           </p>
                        </div>
                     </Form>
                  )}
               </Formik>
            </div>
         </div>
      </div>
   );
};

export default SignUp;

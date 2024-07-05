"use client";

import React, { useState } from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import useUserState from "../store/hooks/useUserState";
import Hamburger from "../components/shared/hamburger";
import { Formik, Form, ErrorMessage } from "formik";
import { UpdateSchema, TInitialState, PasswordSchema, TPassword, TFields } from "../components/profile/types";
import Image from "next/image";
import { usersAvatars } from "../signup/types";
import { useMutation } from "@apollo/client";
import { UPDATE_PASSWORD, UPDATE_PROFILE } from "@/lib/mutations/user";
import { useAppDispatch } from "../store/utils/useAppDispatch";
import { updateProfile } from "../store/features/userSlice";
import { toast } from "react-toastify";
import Loader from "../components/shared/loader";

const Index = () => {
   const dispatch = useAppDispatch();
   const { user } = useUserState();

   const [initialState, setInitialState] = useState<TInitialState>({
      fullName: user.name,
      email: user.email,
      username: user.username,
   });

   const passwordInitialValue: { password: string; confirmPassword: string } = {
      password: "",
      confirmPassword: "",
   };

   const [currentAvatar, setCurrentAvatar] = useState<string>(user.avatarUrl);

   const { fullName, email, username } = initialState;

   const fields: TFields[] = [
      { name: "fullName", label: "Name", placeholder: "Enter name", val: fullName, type: "text", disabled: false },
      { name: "email", label: "Email Address", placeholder: "Enter email", val: email, type: "text", disabled: true },
      {
         name: "username",
         label: "Username",
         placeholder: "Enter username",
         val: username,
         type: "text",
         disabled: false,
      },
   ];

   const passwordFields: TFields[] = [
      { name: "password", label: "New Password", placeholder: "*********", type: "password", show: false },
      {
         name: "confirmPassword",
         label: "Confirm Password",
         placeholder: "*********",
         type: "password",
         show: false,
      },
   ];

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInitialState((prevState: TInitialState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const selectAvatarHandler = (url: string) => {
      setCurrentAvatar(url);
   };

   // ================= UPDATE PROFILE SECTION =============================

   const [updateUserProfile, { loading }] = useMutation(UPDATE_PROFILE);

   const updateHandler = (values: TInitialState) => {
      const request = {
         name: values.fullName,
         username: values.username,
         avatarUrl: currentAvatar,
      };

      updateUserProfile({
         variables: { ...request },
      })
         .then(({ data: { updateUserProfile } }) => {
            dispatch(updateProfile(updateUserProfile));
            toast.success("Profile updated successfully!");
         })
         .catch((err) => toast.error(err.message));
   };

   // ================= UPDATE PASSWORD SECTION =============================

   const [updateUserPassword, { loading: updateLoading }] = useMutation(UPDATE_PASSWORD);

   const changePassword = (values: TPassword, { resetForm }: any) => {
      updateUserPassword({
         variables: { password: values.password },
      })
         .then(() => {
            toast.success("Password updated successfully!");
            resetForm();
         })
         .catch((err) => toast.error(err.message));
   };

   return (
      <MainLayout>
         <div className="py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE] px-3">
            <Hamburger title="Account Settings" path="Profile section" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
               <div className="py-7 px-5 border rounded-xl">
                  <h1 className="text-[15px] font-[600]">Personal Details</h1>
                  <p className="text-[13px] font-[300]">To change your personal detail , edit and save from here</p>

                  <div className="mt-5">
                     <Formik
                        initialValues={initialState}
                        enableReinitialize
                        validationSchema={UpdateSchema}
                        onSubmit={updateHandler}
                     >
                        {({ handleBlur, setValues }) => (
                           <Form>
                              {fields.map((field) => {
                                 const { name, type, val, label, placeholder, disabled } = field;
                                 return (
                                    <div className="mb-[1.3rem]" key={name}>
                                       <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px]">
                                          {label}
                                       </label>
                                       <div className="mt-[6px] relative">
                                          <input
                                             type={type}
                                             name={name}
                                             value={val}
                                             disabled={disabled}
                                             onChange={(e) => {
                                                changeHandler(e);
                                                setValues((prevState: TInitialState) => ({
                                                   ...prevState,
                                                   [name]: e.target.value,
                                                }));
                                             }}
                                             onBlur={handleBlur}
                                             className="w-[100%] border-[1px] border-[#DFE5EF] py-[.7rem] rounded-[7px] px-[12px] outline-[#5C87FF] text-[14px]"
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

                              <div className="my-5">
                                 <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px] ">
                                    Change avatar
                                 </label>
                                 <div className="grid grid-cols-5 gap-5 mt-3">
                                    {usersAvatars.map((userAvatar) => {
                                       return (
                                          <div
                                             className={
                                                userAvatar === currentAvatar
                                                   ? `border-[3px] border-[#65D3D8]`
                                                   : "cursor-pointer"
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
                              </div>
                              <button
                                 type="submit"
                                 disabled={loading}
                                 className="py-[.5rem] mt-[2rem] rounded-[7px] w-[100%] bg-[#3CD8EB] text-[13px] md:text-[15px] text-[#fff] font-[500] flex justify-center"
                              >
                                 {loading ? <Loader /> : "Update Profile"}
                              </button>
                           </Form>
                        )}
                     </Formik>
                     <button className="py-[.5rem] mt-[.8rem] rounded-[7px] w-[100%] bg-[#FDEDE8] text-[13px] md:text-[15px] text-[#FA896B] font-[500] flex justify-center">
                        Delete Account
                     </button>
                  </div>
               </div>
               <div className="p-5 border rounded-xl h-fit">
                  <h1 className="text-[15px] font-[600]">Change Password</h1>
                  <p className="text-[13px] font-[300]">To change your password please confirm here</p>

                  <div className="mt-5">
                     <Formik
                        initialValues={passwordInitialValue}
                        enableReinitialize
                        validationSchema={PasswordSchema}
                        onSubmit={changePassword}
                     >
                        {({ values, handleBlur, setValues }: any) => (
                           <Form>
                              {passwordFields.map((field: TFields) => {
                                 const { name, type, label, placeholder } = field;
                                 return (
                                    <div className="mb-[1.3rem]" key={name}>
                                       <label className="font-[500] text-[#2a3547] text-[13px] md:text-[14px]">
                                          {label}
                                       </label>
                                       <div className="mt-[6px] relative">
                                          <input
                                             type={type}
                                             name={name}
                                             value={values[name]}
                                             onChange={(e) => {
                                                changeHandler(e);
                                                setValues((prevState: TPassword) => ({
                                                   ...prevState,
                                                   [name]: e.target.value,
                                                }));
                                             }}
                                             onBlur={handleBlur}
                                             className="w-[100%] border-[1px] border-[#DFE5EF] py-[.7rem] rounded-[7px] px-[12px] outline-[#5C87FF] text-[14px]"
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
                              <button
                                 disabled={updateLoading}
                                 type="submit"
                                 className="py-[.5rem] mt-[2rem] rounded-[7px] w-[100%] bg-[#3CD8EB] text-[13px] md:text-[15px] text-[#fff] font-[500] flex justify-center"
                              >
                                 {updateLoading ? <Loader /> : "Update Password"}
                              </button>
                           </Form>
                        )}
                     </Formik>
                  </div>
               </div>
            </div>
         </div>
      </MainLayout>
   );
};

export default Index;

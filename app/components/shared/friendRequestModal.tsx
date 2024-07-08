"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import useFriendRequestState from "@/app/store/hooks/friendRequestState";
import { useAppDispatch } from "@/app/store/utils/useAppDispatch";
import { closeModal } from "@/app/store/features/friendRequestSlice";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { SEND_FRIEND_REQUEST } from "@/lib/mutations/user";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import Loader from "./loader";

export default function SendFriendRequests() {
   const dispatch = useAppDispatch();

   const onCloseHandler = () => {
      dispatch(closeModal());
   };

   const { open } = useFriendRequestState();

   const initialValues: { email: string } = {
      email: "",
   };

   const FriendRequestSchema = Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Recipient email is required"),
   });

   const [sendFriendRequests, { loading }] = useMutation(SEND_FRIEND_REQUEST);

   const handleSubmit = (values: { email: string }) => {
      sendFriendRequests({
         variables: {
            email: values.email,
         },
      })
         .then(() => {
            toast.success("Request sent");
            onCloseHandler();
         })
         .catch((e) => toast.error(e.message));
   };

   return (
      <Dialog open={open} onClose={onCloseHandler} className="relative z-10">
         <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
         />

         <Formik
            initialValues={initialValues}
            enableReinitialize
            validationSchema={FriendRequestSchema}
            onSubmit={handleSubmit}
         >
            {({ handleBlur, handleChange }) => (
               <Form>
                  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                     <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                           transition
                           className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                           <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">
                                 <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <PaperAirplaneIcon className="w-[20px] rotate-[310deg]" />
                                 </div>
                                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                       Send Friend Request
                                    </DialogTitle>
                                    <div className="mt-2">
                                       <p className="text-[14px] text-gray-500 font-[300]">
                                          Please enter the email address of the recipient in the field
                                       </p>

                                       <div className="w-full mt-3">
                                          <div className="mt-[6px]">
                                             <input
                                                type="email"
                                                name="email"
                                                className="w-[100%] border-[1px] border-[#DFE5EF] py-[.7rem] rounded-[7px] px-[12px] outline-[#5C87FF] text-[14px]"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder="enter email"
                                             />
                                          </div>
                                          <ErrorMessage
                                             name="email"
                                             className="font-[500] text-red-500 text-[13px] mt-1"
                                             component="div"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button
                                 disabled={loading}
                                 type="submit"
                                 className="inline-flex w-full justify-center rounded-md bg-[#3CD8EB] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#3CD8EB] sm:ml-3 sm:w-auto"
                              >
                                 {loading ? <Loader /> : "Send Request"}
                              </button>
                              <button
                                 data-autofocus
                                 onClick={onCloseHandler}
                                 className="mt-3 inline-flex w-full justify-center rounded-md outline-none bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                              >
                                 Cancel
                              </button>
                           </div>
                        </DialogPanel>
                     </div>
                  </div>
               </Form>
            )}
         </Formik>
      </Dialog>
   );
}

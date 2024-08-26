"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useQuery, useMutation } from "@apollo/client";
import { MY_LANGUAGE } from "@/lib/queries/language";
import { CHANGE_LANGUAGE } from "@/lib/mutations/language";
import Loader from "../../shared/loader";
import { GetUserLanguageQuery } from "@/lib/types/gql/graphql";
import { toast } from "react-toastify";

type TLanguage = {
   logo: string;
   name: string;
   label: string;
};

const languages: TLanguage[] = [
   { logo: "/uk.png", name: "ENGLISH", label: "English (UK)" },
   { logo: "/india.png", name: "HINDI", label: "Hindi (India)" },
   { logo: "/chinese.png", name: "CHINESE", label: "中国人 (Chinese)" },
   { logo: "/french.png", name: "FRENCH", label: "française (French)" },
];

export default function Country() {
   const [changeUserLanguage, { loading: changeLoading }] = useMutation(CHANGE_LANGUAGE);
   const { loading, data } = useQuery(MY_LANGUAGE, {
      fetchPolicy: "network-only",
   });

   const row: GetUserLanguageQuery["getUserLanguage"] = data?.getUserLanguage;

   const [selectedCountry, setSelectedCountry] = useState<TLanguage>(languages[0]);
   const { logo } = selectedCountry;

   // Ref for the popover
   const popoverRef = useRef<HTMLButtonElement | null>(null);

   useEffect(() => {
      if (row?.language) {
         const defaultLanguage = languages.find((lang) => lang.name === row.language);
         if (defaultLanguage) {
            setSelectedCountry(defaultLanguage);
         }
      }
   }, [row?.language]);

   const onChangeCountry = (country: TLanguage) => {
      setSelectedCountry(country);

      changeUserLanguage({
         variables: { language: country.name },
         refetchQueries: ["getUserLanguage"],
      })
         .then(() => {
            toast.success(`${country.label} selected`);
         })
         .catch((err) => toast.error(err.message));
   };

   const loadingStates = changeLoading || loading;

   return (
      <Popover className="relative">
         {({ open, close }) => (
            <>
               <PopoverButton
                  ref={popoverRef}
                  className="inline-flex items-center gap-x-1 text-sm leading-6 text-gray-900 outline-none"
               >
                  {loadingStates ? (
                     <Loader />
                  ) : (
                     <Image src={logo} alt="" width={100} height={100} className="w-[23px] h-[23px] rounded-full" />
                  )}
               </PopoverButton>
               <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
               >
                  <div className="w-screen max-w-[13rem] flex-auto overflow-hidden rounded-lg  bg-white text-sm leading-6 shadow-md ring-1 ring-gray-900/5">
                     <div className="py-4">
                        {languages.map((item: TLanguage) => (
                           <button
                              key={item.name}
                              className="group relative flex gap-x-3 p-2 hover:bg-gray-50 items-center font-[300] cursor-pointer px-4 py-3 w-full "
                              onClick={() => {
                                 onChangeCountry(item);
                                 close(); // Close the popover after selection
                              }}
                           >
                              <Image
                                 src={item.logo}
                                 alt=""
                                 width={100}
                                 height={100}
                                 className="w-[18px] h-[18px] rounded-full"
                              />
                              <div>{item.label}</div>
                           </button>
                        ))}
                     </div>
                  </div>
               </PopoverPanel>
            </>
         )}
      </Popover>
   );
}

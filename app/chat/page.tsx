"use client";

import React, { ChangeEvent, useRef } from "react";
import MainLayout from "../components/hoc/layout/main-layout";
import Image from "next/image";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

const Index = () => {
  const sendMessageHandler = () => {
    console.log("send message");
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  return (
    <MainLayout>
      <div className="py-[1.5rem] mt-[.1rem] max-w-6xl m-auto bg-[#FEFEFE]">
        <div className="bg-[#ECF2FF] relative w-full h-[7rem] rounded-xl flex items-center p-6">
          <div>
            <h1 className="text-[#2A3547] font-[500] text-[21px]">Chat App</h1>
            <span className="text-[#2A3547]">Messenger</span>
          </div>
          <Image
            src="/chat.webp"
            alt="chat img"
            className="absolute right-0 mr-4 h-[100px] w-auto"
            width={80}
            height={80}
          />
        </div>

        <div className="flex mt-5 border w-full rounded-lg h-[40rem] p-0">
          <div className="w-[27%] px-5 border-r-[1px] py-5 h-full">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-1_t0yguk.jpg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-8" />
              </div>
              <div className="flex flex-col">
                <h2 className="text-[14px] font-[500]">Mathew Anderson</h2>
                <div className="flex items-center font-[200] gap-1 text-[12px]">
                  Online
                </div>
              </div>
            </div>

            <div className="relative mt-8">
              <input
                type="text"
                placeholder="Search contact"
                className="w-full px-4 border-[1px] border-[#DFE5EF] py-[.4rem] rounded-[7px] outline-[#5C87FF] text-[13px]"
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>

            <div className="flex flex-col gap-5 h-full w-full mt-4">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg"
                      alt=""
                      width={100}
                      height={100}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-[13px] font-[500]">James Johnson</h2>
                    <div className="flex items-center font-[200] gap-1 text-[11px]">
                      You: La ub jiromu fik su.
                    </div>
                  </div>
                </div>
                <span className="text-[12px] font-[300]">14 hours</span>
              </div>

              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Image
                      src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-6_mbgys2.webp"
                      alt=""
                      width={100}
                      height={100}
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="bg-[#FFAE20] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-[13px] font-[500]">Maria Hernandez</h2>
                    <div className="flex items-center font-[200] gap-1 text-[11px]">
                      You: La ub jiromu fik su.
                    </div>
                  </div>
                </div>
                <span className="text-[12px] font-[300]">12 mins</span>
              </div>
            </div>
          </div>

          <div className="w-[73%] relative">
            <div className="py-[1.5rem] pl-[1.5rem] pr-[.7rem] border-b-[1px] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src="https://res.cloudinary.com/dyfmkjtkr/image/upload/v1718236544/user-10_nd5hgv.jpg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <div className="bg-[#14DEB9] w-[8px] h-[8px] rounded-full absolute right-0 top-7" />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-[13px] font-[500]">James Johnson</h2>
                  <div className="flex items-center font-[200] gap-1 text-[11px]">
                    Online
                  </div>
                </div>
              </div>
              <EllipsisVerticalIcon className="w-[35px] p-[4px] rounded-full hover:bg-[#f9f9f9] cursor-pointer" />
            </div>

            <div className="absolute bottom-0 border-t-[1px] w-full rounded-br-lg px-[1rem] py-[1rem] flex">
              <input
                placeholder="Type a message"
                onKeyDown={sendMessageHandler}
                className="w-full border-none outline-none text-[14px] pr-5"
              />
              <div className="flex relative gap-5">
                <PaperAirplaneIcon className="w-[20px] h-[20px] cursor-pointer -rotate-45" />
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <PhotoIcon
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={handleIconClick}
                  />
                </div>
                <div>
                  <input
                    type="file"
                    accept="application/pdf"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <PaperClipIcon
                    className="w-[20px] h-[20px] cursor-pointer"
                    onClick={handleIconClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;

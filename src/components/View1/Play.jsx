import React from "react";
import { useState } from "react";

export default function Play(){
    return (
    <div className="play absolute tanform translate-x-[40px] w-[500px] mt-[-50px] ml-20 flex text-white space-x-4">
        <div className="play-icon1 px-2 text-2xl hover:cursor-pointer">
            <ion-icon name="play"></ion-icon>
        </div>
        <div className="playing space-x-2 text-2xl flex">
            <div className="hover:cursor-pointer">
                <ion-icon className='text-sm' name="volume-low"></ion-icon>
            </div>
            <div className="hover:cursor-pointer">
                <ion-icon name="volume-low"></ion-icon>
            </div>
        </div>
        <div className="counting text-[10px] flex justify-center h-[20px] w-[100px] tracking-tighter px-2 py-2 text-[#EAEAEA] ">
            5:07 / 15:28
        </div>
        <div className="watch-mode flex tansform translate-x-[68px] space-x-4 text-2xl ">
            <div className="path bg-white text-black font-bold flex justify-center items-center text-[12px] p-1 w-[30px] h-[20px] mt-1 hover:cursor-pointer ">CC</div>
            <div className="seeting relative flex hover:cursor-pointer">
            <ion-icon name="settings"></ion-icon>
            </div>
            <div className="rectangle border border-solid border-3 border-gray-300 flex justify-center items-center hover:cursor-pointer p-1 w-[30px] h-[20px] mt-1 "></div>
            <div className='hover:cursor-pointer'>
                <ion-icon name="tv"></ion-icon>
            </div>
            <div className='hover:cursor-pointer'>
                <ion-icon name="expand"></ion-icon>
            </div>
        </div>
    </div>)
}
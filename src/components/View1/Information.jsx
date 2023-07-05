import React from "react";
import { useState } from "react";

export default function Information(){
    return (
    <div className="h-95 w-[540px] py-4 px-1 ml-20 tansform translate-x-[20px] text-2xl text-white space-y-3">
            <div className="title-video text-white text-lg ">
                Blind Woodturner : turning passion into fine art 
            </div>
            <div className="like-and-views space-x-8 flex ">
                <div className="view text-sm text-gray-500 "> 576,969 views.Oct 8, 2021 </div>
                <div className="like flex text-lg space-x-2 text-white">
                    <button className="icon flex px-1 space-x-2  hover:cursor-pointer">
                    <ion-icon name="thumbs-up"></ion-icon> <div className="font-bold text-[13px] mt-0 tansform translate-y-[-7px]">1,7 K</div>
                    </button>
                    <button className="icon flex px-1 space-x-2  hover:cursor-pointer">
                    <ion-icon name="thumbs-down"></ion-icon> <div className="font-bold text-[13px] mt-0 tansform translate-y-[-7px]">632</div>
                    </button>
                    <button className="icon text-2xl flex px-1 space-x-2 hover:cursor-pointer">
                    <ion-icon name="arrow-redo-outline"></ion-icon> <div className="font-bold text-[13px] mt-0 tansform translate-y-[-7px]">SHARE</div>
                    </button>
                    <button className="icon flex px-1 space-x-2 hover:cursor-pointer">
                    <ion-icon name="list"></ion-icon> <div className="font-bold text-[13px] mt-0 tansform translate-y-[-5px]">SAVE</div>
                    </button>
                    <div className="more hover:cursor-pointer flex font-bold text-2xl justify-center items-center translate-x-[17px] right-0 translate-y-[-15px] ">...</div>
                </div>
            </div>
    </div>)
}
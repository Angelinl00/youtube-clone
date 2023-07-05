import React from "react";
import { useState,useEffect } from "react";

/* Component */

import ProgressBar from "./View1/ProgressBar";
import Play from "./View1/Play";
import Information from "./View1/Information";
import Subscried from "./View1/Subscried";
import Comment from "./View1/Comment";

export default function View(){ 
     return (
     <div className="part1  h-auto w-3/5 overflow-x-hidden ">
        <div className=" main ml-40">
        <div className="video relative flex px-5 pt-2 ml-20 ">
                <img className="h-[290px] w-[640px]" src="images/youtube.png" alt=".." />
                <div className="icon-information ml-80 mt-5 bg-white absolute text-black flex justify-center items-center h-4 w-4 tansform translate-x-[180px] rounded-full text-2xl hover: cursor-pointer ">
                    <ion-icon name="information"></ion-icon>
                </div>
            </div>
            <ProgressBar />
            <Play/>
            <div className="like-and-comment w-640px divide-y gap-y-2 mt-1">
                <Information />
                <Subscried />
                <Comment/>
            </div>
        </div>

    </div>)
}
import React from "react";
import { useState } from "react";

export default function  ProgressBar(){
    return (
    <div className="w-[500px] mt-[-70px] ml-20 flex absolute h-1 rounded-full bg-gray-500 tansform translate-x-[40px]">
        <div className="h-full w-2/5 bg-red-500"></div>
        <div className="h-full w-1/5 bg-gray-300"></div>
    </div>)
}
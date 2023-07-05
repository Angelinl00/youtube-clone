import React from "react";
import { useState } from "react";

/* */

export default function  Subscried(){
    return (
        <div className="h-95 w-[540px] py-4 px-1 ml-20 tansform translate-x-[20px] text-2xl text-white space-y-3">
                <div className="text-sm flex justify-between items-center">
                    <div className="porfil flex ">
                        <div className="image rounded-full h-[50px] w-[50px] border border-gray-500">
                            <img  className="rounded-full" src="images/avatar.png" alt="ss" />
                        </div>
                        <div className="user text-sm flex flex-col justify-center items-center">
                            <div className="Useraname font-bold text-white"> Marcus Levin</div>
                            <span className="text-gray-500">1,2M subscriters</span>
                        </div>
                    </div>
                    <div className="subscried-button">
                        <button className="font-bold h-[30px] flex justify-center items-center text-sm px-4 py-2 bg-red-700 text-white">SUBSCRIBES</button>
                    </div>
                </div>
                 <div className="text-white ml-14">
                    <div className="short-description text-sm py-3 ">
                        Chris Fisher, also knows as Blind Woodturner,learned his craft by listening to hundreds of hours of Youtube videos experimenting in his workshop.Now he's a Youtube creator
                        himselfs, sells his products worldwide, and does demonstrations all around the country.
                    </div>
                        <button className="text-gray-500 text-lg translate-y-[-10px] ">SHOW MORE</button> 
                </div>
        </div>)
}
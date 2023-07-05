import React from "react" ;
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props){
    const {img,time,title,name,views} = props
   
    return (
        <div className="card flex h-[100px]">
             <div className="card-image flex relative hover:cursor-pointer">
                    <img className="h-[90px] w-[198px] " src={img} alt=".p" />
                    <div className="timer absolute px-2 py-1 text-[10px] bg-black text-white mt-10 tansform translate-x-[125px] tansform translate-y-[20px] ">{time}</div>
                </div>
                <div className="card-description px-3 py-5 w-[290px] flex flex-col justify-center tansform translate-y-[-10px] ">
                    <div className="title text-white">{title}</div>
                    <div className="name text-gray-400 text-[10px]">{name}</div>
                    <div className="view text-gray-400 text-[10px] ">{views}</div>
                </div>
        </div>
    )
}
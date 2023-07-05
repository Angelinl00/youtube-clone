import React from "react" ;
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Card({video , img , views , time , title , name}){

    const [videoLink , setVideoLink] = useState("/video/"+ video.video.videoId);

    useEffect(() => {
        console.log(video);
    })
   
    return (
        <div className="card flex h-[100px] flex-shrink-0">
             <Link className="card-image flex relative hover:cursor-pointer" to={videoLink} >
                    <img className="h-[90px] w-[198px] " src={img} alt=".p" />
                    <div className="timer absolute px-2 py-1 text-[10px] bg-black text-white mt-10 tansform translate-x-[125px] tansform translate-y-[20px] ">{time}</div>
            </Link>
                <div className="card-description px-3 py-5 w-[290px] flex flex-col justify-center tansform translate-y-[-10px] "  >
                    <div className="title text-white">{title}</div>
                    <div className="name text-gray-400 text-[10px]">{name}</div>
                    <div className="view text-gray-400 text-[10px] ">{views}</div>
                </div>
        </div>
    )
}
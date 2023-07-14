import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

/* */

export default function  Subscried({channelInfos , videoInfos}){

    const [channelInfo , setChannelInfo] = useState();

    useEffect(() => {
        (async function getApi() {
        
        const options = {
            method: 'GET',
            url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
            params: {
            id: channelInfos,
            sort: 'n'
            },
            headers: {
                'X-RapidAPI-Key': 'b788b8067fmsh868a9ff4872e0f5p150819jsn88695d30fce0',
            'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const content = response.data;
            setChannelInfo(content);
            
        } catch (error) {
            console.error(error);
        }
        
        })()

    } , [])

    return (
        <div className="h-95 w-[540px] py-4 px-1 ml-20 tansform translate-x-[20px] text-2xl text-white space-y-3">
                <div className="text-sm flex justify-between items-center">
                    <div className="porfil flex ">
                        <div className="image rounded-full h-[50px] w-[50px] border border-gray-500">
                            {channelInfo ? (
                                <img  className="rounded-full" src={channelInfo.avatar.thumbnails[0].url} alt="" />
                            ) : <span></span> }
                        </div>
                        {channelInfo ? (
                            <div className="user text-sm flex flex-col justify-center items-center">
                            <div className="Useraname font-bold text-white"> {channelInfo.title} </div>
                            <span className="text-gray-500">1,2M subscriters</span>
                        </div>
                        ) : <div></div> }
                    </div>
                    <div className="subscried-button">
                        <button className="font-bold h-[30px] flex justify-center items-center text-sm px-4 py-2 bg-red-700 text-white">SUBSCRIBES</button>
                    </div>
                </div>
                 <div className="text-white ml-14">
                    <div className="short-description text-sm py-3 ">
                    {videoInfos.shortDescription.substring(0 , 150) + "..."}
                    </div>
                        <button className="text-gray-500 text-lg translate-y-[-10px] ">SHOW MORE</button> 
                </div>
        </div>)
}

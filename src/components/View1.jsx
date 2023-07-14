import React from "react";
import { useState,useEffect } from "react";

/* Component */

import ProgressBar from "./View1/ProgressBar";
import Play from "./View1/Play";
import Information from "./View1/Information";
import Subscried from "./View1/Subscried";
import Comment from "./View1/Comment";
import { useLocation } from 'react-router-dom';
import axios from "axios";

export default function View({videoId}){ 

    
    const [videoInfos , setVideosInfos] = useState();

    const [video , setVideo] = useState();

/*     useEffect(() => {
        console.log(videoId);
    } , []); */

    useEffect(() => {

        (async function getVideo() {
            const options = {
                method: 'GET',
                url: 'https://youtube-search-and-download.p.rapidapi.com/video',
                params: {id: videoId},
                headers: {
                  'X-RapidAPI-Key': '21ed3ab3aemshc27c40ef472539cp108df9jsn8996aef9822d',
                  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  setVideosInfos(response.data.videoDetails);
                  setVideo(response.data.streamingData.adaptiveFormats[0].url)
              } catch (error) {
                  console.error(error);
              }
        })()

    } , [])

    /* useEffect(() => {
        console.log(videoInfos);
        console.log(videoInfos.thumbnail.thumbnails[0].url)
    } , [videoInfos]) */

     return (
     <div className="part1  h-auto flex flex-shrink-0 overflow-y-scroll w-3/5 overflow-x-hidden ">
        {videoInfos ? (
            <div className=" main ml-40">
            <div className="video relative flex px-5 pt-2 ml-20 ">
                    <iframe className="h-[290px] w-[550px]" src={video} ></iframe>
                    <div className="icon-information ml-80 mt-5 bg-white absolute text-black flex justify-center items-center h-4 w-4 tansform translate-x-[180px] rounded-full text-2xl hover: cursor-pointer ">
                        <ion-icon name="information"></ion-icon>
                    </div>
                </div>
                <ProgressBar />
                <Play/>
                <div className="like-and-comment w-640px divide-y gap-y-2 mt-1">
                    <Information videoInfos={videoInfos} />
                    <Subscried channelInfos={videoInfos.channelId} videoInfos={videoInfos} />
                    <Comment videoInfos={videoInfos} />
                </div>
            </div>
        ) : <div></div>}

    </div>)
}
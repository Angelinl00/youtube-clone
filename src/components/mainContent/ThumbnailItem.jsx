import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function ThumbnailItem({video}){

  const [channelIdlink , setChannelIdLink] = useState("/channel/"+video.video.channelId);

  const [videoIdLink , setVideoIdLink ] = useState("/video/"+video.video.videoId);

  return (
  <div class="text-white w-[276px] h-[247px] flex flex-col pb-[18px] mr-4 flex-shrink-0 relative mb-[40px]">
    <div class="w-full h-[155px] flex relative">
      {/* eslint-disable-next-line */}
      <Link to={videoIdLink} className="h-full w-full">
        <img src={video.video.thumbnails[0].url} class="h-full w-full"/>
      </Link>
      <span class="w-auto h-auto px-[4px] py-[3px] flex absolute bottom-1 bg-black right-1 text-sm">{video.video.lengthText}</span>
    </div>

    <div class="flex flex-row relative">
      <span class="w-auto h-auto flex flex-start pt-[12px] pr-[12px] pb-[26px] relative">
        <img src="./images/unnamed.png" alt="" class="h-[36px] w-[36px] rounded-full" />
      </span>
      <span class="flex flex-col w-auto h-auto relative pt-[8px]">
        <span class=" flex flex-col h-[28px] w-[204px] text-white relative">
          <p class="text-[11px]">{video.video.title}</p>
        </span>
        <span class=" flex flex-col h-[28px] w-[204px] relative mt-[6px]">
          <Link className="text-[11px] text-zinc-500" to={channelIdlink}>{video.video.channelName}</Link>
          <p class="text-[11px] text-zinc-500">{video.video.viewCountText} . {video.video.publishedTimeText}</p>
        </span>
      </span>
    </div>
  </div>
  )
}

export default ThumbnailItem;
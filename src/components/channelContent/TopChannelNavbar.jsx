import React, { useEffect, useState } from 'react';
import axios from "axios";

function TopChannelNavbar({channel}) {

  // eslint-disable-next-line
  const [channelId , setChannelId] = useState(channel);

  const [channelInfo , setChannelInfo] = useState({});

  useEffect(() => {
    (async function getApi() {
      
      const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
        params: {
          id: channelId,
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
        // console.log(content);
        
      } catch (error) {
        console.error(error);
      }
      
    })()

  } , [])

  return (
    <div className='h-[100px] w-full px-[65px] pt-[16px] pb-[4px] flex flex-col items-start bg-zinc-900 '>
      <div className='h-full w-full relative '>

        <span className='absolute flex flex-col items-center justify-center h-full w-[124px] px-[4px] right-0'>
          <button className='text-[14px] px-[16px] py-[10px] bg-[#c00] font-bold '>SUBSCRIBES</button>
        </span>

        <div id="avatar" className=' h-full w-[247px] relative flex flex-row justify-start'>
        {/* eslint-disable-next-line */}

        {channelInfo.avatar ? (<img src={channelInfo.avatar.thumbnails[0].url} className='h-[80px] w-[80px] flex flex-col justify-center items-center relative rounded-full mr-[24px] ' />) : (<span></span>)}
          
          <span className='h-[full] w-auto py-[18px] text-white flex flex-col items-start '>
            {channelInfo.avatar ? (<p className='text-[14px]'>{channelInfo.title}</p>) : (<span></span>)}
            {channelInfo.avatar ? (<p className='text-[14px] text-[#aaa]'>{channelInfo.subscriberCountText}</p>) : (<span></span>)}
            
          </span>
        </div>

      </div>
    </div>
  )
}

export default TopChannelNavbar;

import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';

function SmalVideo({smalVideo}) {

  // eslint-disable-next-line
  const [videos , setVideos] = useState();

  const [playlists , setPlaylists] = useState();

  const location = useLocation();

  const [channelId , setChannelId] = useState(location.pathname.split('/')[2]);

  useEffect(() => {
    (async function getVideos(){

      const options = {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
        params: {
          id: channelId,
          next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
          sort: 'n'
        },
        headers: {
          'X-RapidAPI-Key': 'b788b8067fmsh868a9ff4872e0f5p150819jsn88695d30fce0',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };
      
      try {

        const response = await axios.request(options);
        console.log(response.data);
        setVideos(response.data);
        setPlaylists(response.data.contents);

      } catch (error) {
        console.error(error);
      }
    })()
  } , []);

  useEffect(() => {
    /* console.log(playlists)
    console.log(smalVideo) */
  } , [videos , playlists])

  return (
    <div className='h-auto w-full pl-[65px] py-[24px] flex '>
      <div className='h-auto w-auto relative flex flex-row '>
        <div className='h-auto w-auto relative'>
          <img src={smalVideo.thumbnails[0].url} alt="" className='relative w-[424px] h-[238px] mr-[24px] ' />
        </div>

        <div className='relative w-[424px] h-[238px]  flex flex-col items-start justify-start'>
          <p className='text-[14px] mb-[20px] '>{smalVideo.title}</p>
          <p className='text-[13px] text-[#aaa] mb-[19px] '>{smalVideo.viewCountText} . {smalVideo.publishedTimeText}</p>
          <p className='text-start text-[14px] '>Chris Fisher, also known as the Blind Woodturner, learned his craft by listening to hundreds of hours of YouTube videos and experimenting in his workshop. Now he’s a YouTube creator himself, sells his products worldwide, and does demonstrations all around the country.</p>
        </div>
      </div>
    </div>
  )
}

export default SmalVideo;

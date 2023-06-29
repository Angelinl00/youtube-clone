import React from 'react';
import {useState} from "react";
import NavigationMenuItem from './NavigationMenuItem';

function BottomChannelNavbar() {

  const [navigationMenu , setNavigationMenu] = useState([
    {id : 1 , title : "HOME"} ,
    {id : 2 , title : "VIDEOS"} ,
    {id : 3 , title : "PLAYLISTS"} ,
    {id : 4 , title : "COMMUNITY"} ,
    {id : 5 , title : "CHANNELS"} ,
    {id : 6 , title : "ABOUT"}
  ])

  return (
    <div className=' h-[48px] w-full px-[65px] items-start flex flex-row justify-start bg-zinc-900 '>
      <div class="w-auto h-full flex flex-row items-start justify-start" id="navigationMenu">
        {navigationMenu.map((item) => {
          return <NavigationMenuItem title={item.title} key={item.id} />
        })}
      </div>
      <div className='w-auto h-full pl-[24px] flex flex-row items-start justify-start relative'>
        <span className='w-auto h-auto flex px-[8px] pt-[18px] mr-[202px] '>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
        </span>

        <span className='h-[48px] w-[48px] flex flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </span>
      </div>
    </div>
  )
}

export default BottomChannelNavbar;
import React from "react";
import SidebarMenuItem from "./sideBar/SidebarMenuItem";
import {useState} from "react";
import SidebarSubscriptions from "./sideBar/SidebarSubscriptions";
import SidebarMenu3 from "./sideBar/SidebarMenu3";

function SideBar() {

  // eslint-disable-next-line
  const [sidebarTopMenuItems , setSidebarTopMenuItems] = useState([
    {id : 1 , title : "Home"},
    {id : 2 , title : "Explore"},
    {id : 3 , title : "Subscriptions"},
  ]);

  // eslint-disable-next-line
  const [sidebarTopMenu2Items , setSidebarTopMenu2Items] = useState([
    {id : 1 , title : "Library"},
    {id : 2 , title : "History"},
    {id : 3 , title : "Your Videos"},
    {id : 4 , title : "Watch Later"},
    {id : 5 , title : "Likeed Videos"},
    {id : 6 , title : "Show More"},
  ]);

  const [subscriptions , setSubscriptions] = useState([
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"}
  ]);

  const [menu3 , setMenu3] = useState([
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"} ,
    {id : 1 , src : "" , name : "chaine"}
  ])

  // eslint-disable-next-line
  function appel() {
    // console.log(sidebarTopMenuItems);
    console.log("test")
  }

  return (
  <div class="flex flex-col relative pr-[16px] w-[240px] pb-[42px] h-full flex-shrink-0 overflow-scroll">
    {/*  sideBar/top */}

    <div class="py-[12px] w-full h-auto border-b border-zinc-700">
      <ul class="flex flex-col w-full h-full py-[12px]">
        {sidebarTopMenuItems.map((item) => {
          return <SidebarMenuItem title={item.title} />
        })}
      </ul>
    </div>
    {/*  sideBar/top2 */}

    <div class="py-[12px] w-full h-auto border-b border-zinc-700">
      <ul class="flex flex-col w-full h-full py-[12px]">
        {sidebarTopMenu2Items.map((item) => {
          return <SidebarMenuItem title={item.title} />
        })}
      </ul>
    </div>

    {/*  sideBar/Subscriptions */}
    <div class="py-[12px] w-full h-auto border-b border-zinc-700">
      <ul class="block w-full h-full">
        <span class="w-auto h-auto px-[24px] py-[24px] text-zinc-400 font-bold">SUBSCRIPTIONS</span>
        {
          subscriptions.map((item) => {
            return <SidebarSubscriptions />
          })
        }
      </ul>
    </div>
    {/*  sideBar/more for youtube */}

    <div class="py-[12px] w-full h-auto border-b border-zinc-700">
      <ul class="block w-full h-full">
        <span class="w-auto h-auto px-[24px] py-[24px] text-zinc-400 font-bold">MORE FROM YOUTUBE</span>
        {
          menu3.map((item) => {
            return <SidebarMenu3 />
          })
        }
      </ul>
    </div>

  </div>)

}

export default SideBar;
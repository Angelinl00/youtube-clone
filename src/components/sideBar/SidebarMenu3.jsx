import React from "react";

function SidebarMenu3() {
  return (
    <li class="w-full h-auto flex flex-col justify-center pl-[24px] pr-[8px] py-[8px] rounded-md hover:bg-zinc-800">
      <span class="w-full h-[24px] flex flex-row text-white items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill mr-[24px] h-full" viewBox="0 0 16 16">
          <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
        </svg>
        <p>titre item</p>
      </span>
    </li>
  )
}

export default SidebarMenu3;
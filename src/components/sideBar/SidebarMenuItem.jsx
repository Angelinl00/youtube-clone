import React from "react";

function SidebarMenuItem({title , icone}) {

  return (
    <li class="w-full h-auto flex flex-col justify-center pl-[24px] pr-[8px] py-[8px] rounded-md hover:bg-zinc-800">
      <span class="w-full h-[24px] flex flex-row text-white items-center">
        {icone}
        <p>{title}</p>
      </span>
    </li>
  )
};

export default SidebarMenuItem;
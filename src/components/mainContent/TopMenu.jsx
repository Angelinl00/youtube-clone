import React from "react";
import { useState } from "react";

import TopMenuFirstItem from "./TopMenuFirstItem";
import TopMenuItem from "./TopMenuItem";

function TopMenu() {

  const [tableItems , setTableItems] = useState([
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> },
    { element : <TopMenuItem /> }
  ]);

  // eslint-disable-next-line
  function getMenuItems(){
    for(var i=0 ; i<5 ; i++) {
      var tableItemsCopy = tableItems.slice();
      tableItemsCopy.push({
        element : <TopMenuItem />
      });
    }

    setTableItems(tableItemsCopy);
    console.log('ajouté')

  }

  return (
  <div class="w-[86%] h-auto flex flex-row overflow-x-scroll border-y border-1 border-zinc-700 relative flex-shrink-0 flex-wrap-no ">
    <TopMenuFirstItem />
    {
      tableItems.map((item) => {
        return item.element
      })
    }
  </div>)
};

export default TopMenu;
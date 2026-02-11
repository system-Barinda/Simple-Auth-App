import React from "react";


const menu = [
'home',
'service',
'about',
'register'
];

function Navbar(){ 
let b = menu.map(a => {
return (
<div className="bg-slate-200 h-10 w-30 rounded shadow text-stone-900 text-center cursor-pointer" key={a}>{a}</div>
    )

 });

   
return(
 <div className="bg-gray-300 h-20 w-[100%] flex justify-center items-center gap-10">
  {b}
</div>
)
}
export default Navbar;
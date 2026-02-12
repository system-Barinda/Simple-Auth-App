import barinda from "../assets/react.svg"
function Header(){
    return(
        <header className="h-22.75 w-137.5 bg-[#21222A] text-[#61DAFB]   flex">

            <img src={barinda} alt="react image" className="w-[28.93px] h-[28.93px] mt-7.75 ml-6.5" />

            <p className="text-[22.25px] ml-[11.61px] mt-7.75">ReactFacts</p>
        </header>
    )
}

function MainBody(){
    return(
     <div className="w-[681px] h-[459px] mt-[91px] bg-[#282D35]">
         <p className="w-[424px] h-[41px] mt-[148px] ml-[27px] text-[39.06px] text-[#FFFFFF]">Fun facts about React</p>
         <ol className="bodyText w-[390px] h-[190px] mt-[65px] ml-[74px] text-[#FFFFFF] flex-col space-y-3">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 200K stars on GitHub</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
          

         </ol>
     </div>
    );
}
export default function ReactFunFacts(){
    return(
        <>
        <Header />
        <MainBody />
        </>
    )
}

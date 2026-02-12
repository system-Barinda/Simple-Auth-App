import barinda from "../assets/react.svg"
function Header(){
    return(
        <header className="h-22.75 w-137.5 bg-[#21222A] text-[#61DAFB]  mx-auto flex">

            <img src={barinda} alt="react image" className="w-[28.93px] h-[28.93px] mt-7.75 ml-6.5" />

            <p className="text-[22.25px] ml-[11.61px] mt-7.75">ReactFacts</p>
        </header>
    )
}

function MainBody(){
    return(
     <div className="w-137.5  h-114.75  bg-[#282D35] mx-auto">
         <p className="w-106 h-10.25  ml-6.75 text-[39.06px] text-[#FFFFFF]">Fun facts about React</p>
         <ol className="bodyText w-97.5 h-47.5 mt-16.25 ml-18.5 text-[#FFFFFF] flex-col space-y-3">
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
        <div className="bg-black w-full h-full text-center ">
        <Header />
        <MainBody />
        </div>
    )
}

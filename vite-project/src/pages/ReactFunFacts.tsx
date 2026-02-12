import barinda from "../assets/react.svg"
function Header(){
    return(
        <header className="h-22.75 w-137.5 bg-[#21222A] text-[#61DAFB]   flex">

            <img src={barinda} alt="react image" className="w-[28.93px] h-[28.93px] mt-7.75 ml-6.5" />

            <p className="text-[22.25px] ml-[11.61px] mt-7.75">ReactFacts</p>
        </header>
    )
}
export default function ReactFunFacts(){
    return(
        <Header />
    )
}

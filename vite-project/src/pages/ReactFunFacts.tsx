import image from "../assets/react.svg"
function Header(){
    return(
        <header className="h-[91px] w-[550px] bg-[#21222A] text-[#61DAFB]   flex">

            <img src={image} alt="react image" className="w-[28.93px] h-[28.93px] mt-[31px] ml-[26px]" />

            <p className="text-[22.25px] ml-[11.61px] mt-[31px]">ReactFacts</p>
        </header>
    )
}
export default function ReactFunFacts(){
    return(
        <Header />
    )
}

import image from "../assets/react.svg"
function Header(){
    return(
        <header className="h-[91px] w-[550px] bg-amber-300">
            <img src={image} alt="react image" />
            <p>ReactFacts</p>
        </header>
    )
}
export default function ReactFunFacts(){
    return(
        <Header />
    )
}

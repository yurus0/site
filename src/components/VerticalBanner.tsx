import { EnvelopeIcon } from "@heroicons/react/24/solid";
import GithubIcon from "./GithubIcon";
import VerticalLoader from "./VerticalLoader";

const VerticalBanner =({theme, loaderVisible}:{theme:string; loaderVisible:boolean;})=>{
    return(
        <div className="fixed z-index flex flex-col w-20 text-center items-center justify-between">
            <div>
                <div className={`pt-10 font-bold text-xl ${theme==="dark"?"text-white":"text-black"}`}>in</div>
                <div className={`pt-10 font-bold text-xl ${theme==="dark"?"text-white":"text-black"}`}>
                    <EnvelopeIcon className={`h-5 w-6  ${theme==="dark"?"text-white":"text-black"}`}/></div>
                <div className="pt-10 font-bold text-xl">
                    <GithubIcon height={18} width={18} theme={theme}/></div>
            </div>
            <div className=""><VerticalLoader isVisible={loaderVisible}/></div>
        </div>
    )
}

export default VerticalBanner;
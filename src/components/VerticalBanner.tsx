import { EnvelopeIcon } from "@heroicons/react/24/solid";
import GithubIcon from "./GithubIcon";
import VerticalLoader from "./VerticalLoader";

const VerticalBanner =({theme, loaderVisible, section}:{theme:string; loaderVisible:boolean; section?:string;})=>{
    return(
        <div className="fixed z-index flex flex-col w-20 text-center items-center justify-between">
            <div>
                <div className={`pt-10 font-bold text-xl ${theme==="dark"?"text-white":"text-black"}`}>in</div>
                <div className={`pt-10 font-bold text-xl ${theme==="dark"?"text-white":"text-black"}`}>
                    <EnvelopeIcon className={`h-5 w-6  ${theme==="dark"?"text-white":"text-black"}`}/></div>
                <div className="pt-10 font-bold text-xl">
                    <GithubIcon height={18} width={18} theme={theme}/></div>
            </div>
            {!loaderVisible &&
            <div className="pt-96 flex flex-col text-sm font-light">
                <div className={`pl-20 -rotate-90 ${section==='exp'?"opacity-100":"opacity-50"} ${theme==="dark"?"text-white":"text-black"}`}>Experience</div>
                <div className={`pr-20  -rotate-90 ${section==='proj'?"opacity-100":"opacity-50"} ${theme==="dark"?"text-white":"text-black"}`}>Projects</div>
                <div className={`pr-56  -rotate-90 ${section==='cred'?"opacity-100":"opacity-50"} ${theme==="dark"?"text-white":"text-black"}`}>Credits</div>
            </div>}
            <div className=""><VerticalLoader isVisible={loaderVisible}/></div>
        </div>
    )
}

export default VerticalBanner;
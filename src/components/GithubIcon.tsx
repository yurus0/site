import Image from "next/image";

const GithubIcon = (
    { height, width, theme }:{
        height:number;
        width:number;
        theme:string;
    }) => {

    return (
        <div>
            <Image
                src={`${theme==="dark"?"GithubIcon-white.svg":"GithubIcon-black.svg"}`}
                height={height}
                width={width} alt={"git"}
                priority/>
        </div>
    );
}
export default GithubIcon;
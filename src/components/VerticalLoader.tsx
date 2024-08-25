
const VerticalLoader = (
    {isVisible}:{isVisible:boolean;}) => {
    return (
        <div className="">
        {isVisible && (
        <div className='fixed bottom-0 left-0 pl-10'>
            <div className='text-xs font-medium py-4'>WORK</div>
        <div className="relative w-[1px] h-16 bg-[#ffffff]/20 overflow-hidden rounded-lg">
        <div className="absolute top-0 left-0 w-full h-14 bg-white animate-slideDown rounded-lg"></div>
        </div>
        </div>
        )}
        </div>
    );
};
export default VerticalLoader;

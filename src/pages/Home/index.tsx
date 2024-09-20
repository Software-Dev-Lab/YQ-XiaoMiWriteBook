const Home = () => {
    return (
        <div className="p-5">
            <header className="flex justify-end w-full">
                <iconpark-icon name="shezhi" width="36" height="36"></iconpark-icon>
            </header>
            <main className="mt-5">
                <ul className="flex">
                    <li className="text-[35px] mr-5">笔记</li>
                    <li className="text-gray-400 text-[35px]">代办</li>
                </ul>

                <div className="flex items-center mt-5">
                    <div className="w-[65px] h-[40px] bg-white rounded-[10px] mr-3 text-center leading-[40px]">全部</div>
                    <div className="w-[65px] h-[40px] bg-gray-200 rounded-[10px] text-center leading-[40px] mr-3">九月</div>
                    <div className="w-[65px] h-[40px] bg-white rounded-[10px] mr-3 flex items-center justify-center">
                        <iconpark-icon width="35" height="30" name="wenjian"></iconpark-icon>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home
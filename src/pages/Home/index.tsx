const Home = () => {
    return (
        <div className="p-5">
            <header className="flex justify-end w-full">
                <iconpark-icon name="shezhi" width="36" height="36"></iconpark-icon>
            </header>
            <main className="mt-5">
                <ul className="flex">
                    <li className="text-[35px] mr-5">笔记</li>
                    <li className="text-gray-500 text-[35px]">代办</li>
                </ul>
            </main>
        </div>
    )
}

export default Home
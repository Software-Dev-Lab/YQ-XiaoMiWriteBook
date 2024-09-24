import { useState, useRef, TouchEvent } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [showSearch, setShowSearch] = useState(false)
    const startTouchY = useRef(0) // 用于记录触摸开始的Y坐标

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        startTouchY.current = event.touches[0].clientY // 记录触摸起始位置
    }

    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        const currentTouchY = event.touches[0].clientY // 当前触摸Y坐标
        const difference = currentTouchY - startTouchY.current // 计算移动的距离

        if (difference > 50) { // 如果下拉超过一定距离（50像素），则显示搜索框
            setShowSearch(true)
        } else if (difference < -50) { // 如果上拉超过一定距离（50像素），则隐藏搜索框
            setShowSearch(false)
        }
    }

    const navigate = useNavigate()

    return (
        <div
            className="p-5 flex flex-col h-screen relative"
        >
            <div className="create-button flex items-center justify-center absolute bottom-10 right-10 rounded-full w-[60px] h-[60px] bg-gray-200 text-[35px] text-white leading-[60px] bg-yellow-400 font-bold" onClick={() => navigate('/create')}>+</div>
            <header className="flex justify-end w-full">
                <iconpark-icon name="shezhi" width="30" height="30"></iconpark-icon>
            </header>
            <nav
                className="mt-2"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <ul className="flex">
                    <li className="text-[35px] mr-5">笔记</li>
                    <li className="text-gray-400 text-[35px]">代办</li>
                </ul>

                <div className={`mt-3 transition-all duration-300 ease-in-out ${showSearch ? 'opacity-100' : 'opacity-0 pointer-events-none h-0 mt-0'}`}>
                    <input
                        type="text"
                        placeholder="搜索随笔..."
                        className="border border-gray-300 rounded-full bg-gray-200 p-2 px-4 w-full outline-none"
                    />
                </div>

                <div className="flex items-center mt-5">
                    <div className="w-[65px] h-[40px] bg-white rounded-[10px] mr-3 text-center leading-[40px]">全部</div>
                    <div className="w-[65px] h-[40px] bg-gray-200 rounded-[10px] text-center leading-[40px] mr-3">九月</div>
                    <div className="w-[45px] h-[40px] bg-white rounded-[10px] mr-3 flex items-center justify-center">
                        <iconpark-icon width="35" height="30" name="wenjian"></iconpark-icon>
                    </div>
                </div>
            </nav>
            <main className="flex-grow flex items-center justify-center mt-5">
                <div className="empty flex flex-col justify-center">
                    <iconpark-icon width="50" height="50" name="bijiban"></iconpark-icon>
                    <p className="text-[12px] text-gray-400 mt-1">没有笔记</p>
                </div>
            </main>
        </div>
    );
}

export default Home

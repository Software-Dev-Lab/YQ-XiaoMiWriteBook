/*
 * @Author: ZRMYDYCG
 * @Date: 2024-10
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description: 
 */
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate()

    return (
        <div className="p-5 h-screen relative">
            <header className="flex justify-between items-center">
                <iconpark-icon name="zuojiantou" size="45" color="#333" onClick={() => navigate(-1)}></iconpark-icon>
                <div className="flex items-center gap-x-2">
                    <iconpark-icon name="shangchuan" size="45" color="#333"></iconpark-icon>
                    <iconpark-icon name="huanfu" size="45" color="#333"></iconpark-icon>
                    <iconpark-icon name="gengduo" size="45" color="#333"></iconpark-icon>
                </div>
            </header>
        </div>
    )
}

export default Create
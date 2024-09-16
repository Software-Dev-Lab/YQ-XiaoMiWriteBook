import {useState, useEffect} from "react"
import type { IDetailDataType } from '../../api/modules/detail'
import { fetchDetailAPI } from '../../api/modules/detail'
import {useNavigate, useSearchParams} from "react-router-dom"
import { NavBar } from 'antd-mobile'

const Detail = () => {
    const [detail, setDetail] = useState<IDetailDataType | null>(null)
    const [params] = useSearchParams()
    const id = params.get('id') || ''
    useEffect(() => {
        const getDetail = async () => {
           try {
               const res = await fetchDetailAPI(id)
               setDetail(res.data.data)
           } catch (error) {
               console.log(error)
           }
        }

        getDetail()
    })

    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    if (!detail) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <NavBar onBack={back}>{detail?.title}</NavBar>
            <div dangerouslySetInnerHTML={{__html: detail?.content}}></div>
        </div>
    )
}

export default Detail
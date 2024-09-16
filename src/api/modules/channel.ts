import requestInstance from '../../api'
import { IResponse, IChannelResponse, IListResponse } from '../type'


// 请求频道列表
export const fetchChannelAPI = () => {
    return requestInstance.request<IResponse<IChannelResponse>>({
        url: '/channels',
        method: 'GET'
    })
}

interface  IFetchListAPI {
    channel_id: string
    timestamp: string
}

// 请求文章列表
export const fetchListAPI = (params: IFetchListAPI) => {
    return requestInstance.request<IResponse<IListResponse>>({
        url: '/articles',
        params
    })
}
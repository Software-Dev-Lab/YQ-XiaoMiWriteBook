import requestInstance from '../../api'
import { IResponse, IChannelResponse } from '../type'

export const fetchChannelAPI = () => {
    return requestInstance.request<IResponse<IChannelResponse>>({
        url: '/channels',
        method: 'GET'
    })
}
/**
 * @desc 响应体基本结构
 * */
export interface IResponse<T> {
    message: string
    data: T
}

export interface IChannelItem {
    id: number
    name: string
}

export interface IChannelResponse {
    channels: IChannelItem[]
}


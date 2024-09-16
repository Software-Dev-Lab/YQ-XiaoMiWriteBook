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

export interface IListItem {
    art_id: string
    title: string
    out_id: string
    comm_count: number
    pubdate: string
    aut_name: string
    is_top: number
    cover: {
        type: number
        images: string[]
    }
}

export interface IListResponse {
    results: IListItem[]
    pre_timestamp: string
}

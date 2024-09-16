
import type { IListResponse } from '../../../../../src/api/type'
import {  fetchListAPI } from '../../../../../src/api/modules/channel.ts'
import { Image, List, InfiniteScroll } from 'antd-mobile'
import { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom";

type IHomeListProps = {
    channelId: string
}

const HomeList = (props: IHomeListProps ) => {
    const {  channelId }  = props
    const [listRes, setListRes] =  useState<IListResponse>({
        results: [],
        pre_timestamp: '' + new Date().getTime(),
    })

    useEffect(() => {
        const getList = async () => {
            try {
                const res = await fetchListAPI({
                    channel_id: channelId,
                    timestamp: '' + new Date().getTime(),
                })

                setListRes(res.data.data)
            } catch {
                throw new Error('fetch list error')
            }
        }
        getList()
    }, [channelId])

    // 标记当前是否还有新数据
    const [hasMore, setHasMore] = useState(true)
    const loadMore = async () => {
        try {
            const res = await fetchListAPI({
                channel_id: channelId,
                timestamp: listRes.pre_timestamp,
            })

            setListRes((prev) => ({
                results: [...prev.results,...res.data.data.results],
                pre_timestamp: res.data.data.pre_timestamp,
            }))

            if (res.data.data.results.length === 0) {
                setHasMore(false)
            }
        } catch {
            throw new Error('fetch list error')
        }
    }

    const navigate = useNavigate()
    const goToDetail = (id: string) => {
        navigate(`/detail/?id=${id}`)
    }

    return (
        <>
            <List>
                {listRes.results.map((item) => (
                    <List.Item
                        key={item.art_id}
                        onClick={() =>goToDetail(item.art_id)}
                        prefix={
                            <Image
                                src={item.cover.images?.[0]}
                                style={{ borderRadius: 20 }}
                                fit="cover"
                                width={40}
                                height={40}
                            />
                        }
                        description={item.pubdate}
                    >
                        {item.title}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}></InfiniteScroll>
        </>
    )
}

export default HomeList
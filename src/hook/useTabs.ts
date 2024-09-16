import { useState, useEffect} from "react"
import type { IChannelItem } from '../../src/api/type'
import { fetchChannelAPI } from '../../src/api/modules/channel'

function useTabs() {
    const [channels, setChannels] = useState<IChannelItem[]>([])

    useEffect(() => {
        const getChannels = async () => {
            try {
                const res = await fetchChannelAPI()
                setChannels(res.data.data.channels)
            } catch (error) {
                throw new Error('Failed to fetch channels.')
            }
        }
        getChannels()
    }, [])

    return {
        channels
    }
}

export default useTabs
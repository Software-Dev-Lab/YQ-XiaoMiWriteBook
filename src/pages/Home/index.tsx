import './style.css'
import { Tabs } from 'antd-mobile'
import useTabs from '../../hook/useTabs.ts'
import HomeList from './components/home-list/index.tsx'

const Home = () => {
    const { channels } = useTabs()
    return (
        <div className='tabContainer'>
            {/*  Tab区域  */}
            <Tabs defaultActiveKey={'0'}>
                { channels.map(item => (
                    <Tabs.Tab title={item.name} key={item.id}>
                        {/*  List组件  */}
                        <div className="listContainer">
                            <HomeList channelId={item.id + ''} />
                        </div>
                    </Tabs.Tab>
                )) }
            </Tabs>
        </div>
    )
}

export default Home
/*
 * @Author: ZRMYDYCG
 * @Date: 2024-11
 * @LastEditors: ZRMYDYCG
 * @LastEditTime: 2024-11
 * @Description: 
 */
import { AppOutline, UnorderedListOutline } from 'antd-mobile-icons'
import { TabBar as AntdTabBar } from 'antd-mobile'



const TabBar = () => {
    const tabs = [
        {
          key: '/home',
          title: '笔记',
          icon: <AppOutline />,
        },
        {
          key: '/todo',
          title: '待办',
          icon: <UnorderedListOutline />,
        },
      ]
      
    return (
      <AntdTabBar>
        {tabs.map(item => (
          <AntdTabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </AntdTabBar>

    )
}

export default TabBar
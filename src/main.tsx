import "./index.css" // Tailwind CSS
import '@icon-park/react/styles/index.css' // IconPark CSS
import './assets/common.css' // 统一公共样式及变量

import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom' // 导入 RouterProvider
import { router } from './router' // 导入 router 实例

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />) // ！表示是做了一个非空断言, 就是告诉编译器这个变量肯定有值, 否则会报错

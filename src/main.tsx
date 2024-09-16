import ReactDOM from 'react-dom/client'

// 导入 RouterProvider
import { RouterProvider } from 'react-router-dom'
// 导入 router 实例
import { router } from './router'

// ！表示是做了一个非空断言, 就是告诉编译器这个变量肯定有值, 否则会报错
ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)

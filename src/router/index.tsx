import { createBrowserRouter } from "react-router-dom"
import Layout from '../layout/index'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />
    },
])

export { router }
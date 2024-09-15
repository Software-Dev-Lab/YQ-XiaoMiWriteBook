import ReactDOM from 'react-dom/client'
import App from './App.tsx'


// ！表示是做了一个非空断言, 就是告诉编译器这个变量肯定有值, 否则会报错
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)

# React + TypeScript + Vite

一个使用 React + TypeScript + Vite 的H5项目模板, 便于以后直接使用

# React如何结合TypeScript进行项目开发

### useState与TypeScript

#### useSate自动推导（场景: 明确的初始值）

通常React会根据传入useState的默认值来自动推导类型,不需要显式标注类型

```tsx
import { useState } from "react"

function App() {
    const [value, toggle] = useState(false)

    toggle(false)

    return<>this is app{value}</>
}

export default App
```

说明:
1.value: 类型为boolean
2.toggle: 方法传递的参数类型为boolean

#### useState传递泛型参数

useState 本身是有个泛型函数, 可以传入具体的自定义类型

```tsx
import { useState } from "react"
type User = {
    name: string
    age: number
}

type Admin = {
    password: string
    email: string
}

function App() {
    const [user, setUser] = useState<User>({
        name: "John Doe",
        age: 18,
    })

    const [form, setForm] = useState<Admin>(() => {
        return {
            password: "admin",
            email: "xxxxx@xxxx.xxx",
        }
    })


    const Login = () => {
        setForm({
            password: "admin",
            email: "xxxxx@xxxx.xxx",
        })
    }

    return<>this is app{user.name}-{user.age}{" "}</>
}

export default App

```

说明:
1.限制useState函数参数的初始值必须满足类型为: User | ( ) => User
2.限制setUser函数的参数必须满足类型为: User | ( ) => User | undefined
3.user状态数据具备User类型相关的类型提示


#### useState初始值为null

当我们不知道状态的初始值是什么，将useState的初始值为null是一个常见的做法，可以通过具体类型联合null来做显式注解

```tsx
type User = {
    name: string
    age: number
}

const [user, setUser] = useState<User | null>(null)

// 为了安全, 可选链做类型守卫, 只有 user 不为 null 的时候才进行点运算
return <>{user?.name}</>
```

说明:
1.限制useState函数参数的初始值可以是User | null
2.限制setUser函数的参数类型可以是User | null


### Props与TypeScript

#### 基础使用

为组件prop添加类型，本质是给函数的参数做类型注解，可以使用type对象类型或者interface接口来做注解

```tsx
interface IProps {
  className: string
}

function Button(props: IProps) {
  const { className } = props
  return <button>This is a {className}</button>
}

function App() {
  return(
      <>
        <Button className="'primary button'"></Button>
      </>
  )
}

export default App
```


#### 为children添加类型

> 内置类型就是框架封装好的类型集合, 避免自己写这些类型会很麻烦

children是一个比较特殊的prop，支持多种不同类型数据的传入，需要通过一个内置的ReactNode类型来做注解

```tsx
import React from "react"

interface IProps {
    className: string
    children: React.ReactNode
}

function Button(props: IProps) {
  const { className } = props
  return <button>This is a {className}</button>
}

function App() {
  return(
      <>
        <Button className="'primary button'">click me</Button>
      </>
  )
}

export default App
```

说明:注解之后，children可以是多种类型，包括: React.ReactElement、string、number、React.ReactFragment、React.ReactPortal、boolean、null、undefined


#### 为事件prop添加类型

组件经常执行类型为函数的prop实现子传父，这类prop重点在于函数参数类型的注解

```tsx
interface IEmits {
    onGetMsg?: (msg: string) => void
}

function Son(props: IEmits ) {
    const { onGetMsg } = props
    const clickHandler = () => {
        onGetMsg?.('this is a message!')
    }
    return <button onClick={clickHandler}>sendMsg</button>
}

function App() {
    const getMsgHandler = (msg: string) => {
        console.log(msg)
    }
  return(
      <>
        {/* 内联绑定, 类型提示不失效 */}
        <Son onGetMsg={(msg) => console.log(msg)} />
        {/* 外联绑定, 类型提示失效 */}
        <Son onGetMsg={getMsgHandler} />
      </>
  )
}

export default App
```

### useRef与TypeScript

#### 基础使用

```tsx
import { useRef, useEffect } from 'react'

function App() {
  const domRef = useRef(null)

  useEffect(() => {
      domRef.current = domRef.current
  })
  return(
  <>
      <input ref={domRef} />
  </>)
}

export default App
```

#### 引用稳定的存储器

把useRef当成引用稳定的存储器使用的场景可以通过泛型传入联合类型来做，比如定时器的场景:

```tsx
import { useRef, useEffect } from 'react'

function App() {
    const domRef = useRef(null)

    const timrtId = useRef<number | undefined>

    useEffect(() => {
        domRef.current = domRef.current

        timrtId.current = setInterval(() => {
            console.log('Hello World')
        }, 1000)

        return () => {
            clearInterval(timrtId.current)
        }
    })
    return(
        <>
            <input ref={domRef} />
        </>
    )
}

export default App
```

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Greeting from './components/Greeting.jsx'
import ReactRules from './components/ReactRules.jsx'
import UserCard from './components/UserCard.jsx'
import Counter from './components/Counter.jsx'
import NameInput from './components/NameInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* components */}
    <Greeting />
    <ReactRules />
    
    {/* props */}
    <UserCard name="Akshay Rao" age="25" email="akshay@gmail.com" phone="9852145212" />
    <UserCard name="Ajay Rao" age="23" email="ajay@gmail.com" phone="8521415212" />

    {/* hooks: useState */}
    <Counter />
    <NameInput />
  </StrictMode>,
)
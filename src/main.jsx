import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout.jsx'
import NotFound from './routes/NotFound.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<App/>}/>
          <Route path = '*' element = {<NotFound/>}/>
          <Route path ='contact' element = {<Contact/>}/>
          <Route path ='resume' element = {<Resume/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

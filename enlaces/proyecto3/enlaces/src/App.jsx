import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Footer from './components/Footer/Fotter'
import Login from './components/login/Login'
import Register from './components/Register/Register';
import PostSearch from './components/PostSearch/PostSearch'
import NotFound from './NotFound/NotFound';
import PostCreate from './components/postCreate/PostCreate';







function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<PostSearch/>} />
        <Route path='/register' element={<Register/>} />
        
        <Route path='/login' element={<Login/>} />
        <Route path='/newpost' element={<PostCreate/>} />
        <Route path='*' element={<NotFound/>} />
       

      </Routes>
      <Footer/>
    </div>
  )
}

export default App

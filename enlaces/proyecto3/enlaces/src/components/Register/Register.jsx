import { useState } from "react";
import { register } from "../../services/register";
import {Navigate, useNavigate} from 'react-router-dom';
import { useToken } from "../../context/Authcontext";
import { NavLink } from 'react-router-dom';

import './register.css';

const Register = () => {
    const navigate = useNavigate();
    const {token} = useToken();
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false)
    

    if (token) return <Navigate to='/'></Navigate>;
    
    const handleSubmit = async (e) =>{
      e.preventDefault();
      setLoading(true);
      
      const isRegister = await register(name,email,password);
      if(isRegister) navigate('/login');
      
        
        setLoading(false);
      }
      
      return (
        <main className="register">
      <form onSubmit={handleSubmit}>
      
      <label htmlFor="name">usuario</label>
      <input 
      type="text" 
      id='name' 
      value={name} 
      onChange={(e)=> setName(e.target.value)} 
      minLength='5' 
      autoFocus
      required
      />

        <label htmlFor='email'>correo</label>
        <input 
        type='email' 
        id='email' 
        value={email} 
        onChange={(e)=> setEmail(e.target.value)} 
        required
        />

        <label htmlFor="password">contraseña</label>
        <input 
        type="password" 
        id='pass' 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)} 
        minLength='6' 
        required
        />



        <button className="reg" disabled={loading}>registrarse</button>

      </form>

      <div className="button">
             <p>¿Ya tienes una cuenta? <NavLink to='/login'>ENTRAR</NavLink></p>
              
             </div>
    </main>
    )
};

export default Register;
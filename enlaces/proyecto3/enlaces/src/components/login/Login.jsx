import { useState } from "react";
import { login } from "../../services/login";
import { useToken } from "../../context/Authcontext";
import { Navigate,useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import './login.css'

const Login = ( ) => {
    const navigate = useNavigate();
    const {token,setTokenInLocal} = useToken();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    if(token) return <Navigate to='/' />;
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const token = await login(email,password);
        if (token) setTokenInLocal(token);

        setLoading(false);
    
    };
        return (
          <div className="logearse">

            <main className='login'>
             <form onSubmit={handleSubmit}>
               <label htmlFor="email">EMAIL</label>
                 <input 
                  type='email'
                  id="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required />

               <label htmlFor="pass">PASSWORD</label>
                 <input 
                  type='password'
                  id="pass"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  minLength='6'
                  required 
                  />
               <button className="enter" disabled={loading}>Entrar</button>
             </form>

             

             <div className="button">
             <p>¿No tienes una cuenta? <NavLink to='/register'>REGISTRATE</NavLink></p>
              
             </div>

           </main>
                  </div>
            
        );
};

export default Login;
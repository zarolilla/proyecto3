import { NavLink } from 'react-router-dom';
import { useToken } from '../../context/Authcontext';
import './Header.css';

import logo from '../../assets/logos/logo.png'


const Header =() => {
    const {token,setTokenInLocal,user} = useToken();

    console.log(user);
    

    return (
        <header className={token &&'headerlogo'}>
            
            {!token&&(<h1 className='biglogo'><NavLink to='/'  ><img className='biglogo' src={logo} alt="logo" /> </NavLink> </h1>
             )}
                
             {token&&(<h1 className='logos'><NavLink to='/'  ><img className='logo' src={logo} alt="logo" /> </NavLink> </h1>
             )}
             {token&&(
                <div className='user'>

                {user && <p className=''>{user.name}</p> }
                <div className='avatar'>{user && user.avatar}</div>
                </div>
             )
             }   
            <nav> 
                
               
                {token && ( 
                    <div className='buttons'>
                        <NavLink to ='/newpost'>Nuevo Post</NavLink>
                    </div>
                )}
                {token && ( 
                    <div className='buttons' onClick={()=> setTokenInLocal(null) }>
                        <p>Cerrar Sesion</p>
                    </div>
                )}
                
            </nav>
        </header>

    );
}

export default Header;
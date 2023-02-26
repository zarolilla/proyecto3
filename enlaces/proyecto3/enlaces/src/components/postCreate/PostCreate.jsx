import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../context/Authcontext/';
import { createPost } from '../../services/createPost';


import './PostCreate.css';

const PostCreate = () => {
    const { token } = useToken();
    const navigate = useNavigate();
    
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if (!token){
            navigate('/login');
        }
    }
    )


    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        const createdPost = await createPost(title,description,url, token);

        
        if (createdPost) navigate('/');

        setLoading(false);
    };

    return (
        <main className='newpost'>
            <form onSubmit={handleSubmit}>
                <h2>Nuevo Post</h2>
                
                
                <input
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    minLength='5'
                    autoFocus
                    required
                    placeholder='Titulo'
                />
                <input
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    minLength='5'
                    autoFocus
                    required
                    placeholder='url'
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    minLength='10'
                    autoFocus
                    required
                    placeholder='Descripciòn'
                />

                <button className='enviar' disabled={loading}>Publicar</button>
            </form>
        </main>
    );
};

export default PostCreate;

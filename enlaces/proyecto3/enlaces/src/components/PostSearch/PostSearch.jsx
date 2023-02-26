import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';
import './PostSearch.css';
import { getPosts } from '../../services/posts';
import { likePosts } from '../../services/likePosts';
import {useToken} from '../../context/Authcontext';
import { NavLink } from 'react-router-dom';



const PostSearch =() => {
    const {token} = useToken();
    const [posts,setPosts] = useState();
    const [title,setTitle] = useState('');
    const [loading,setLoading] = useState(false);
    

    

    useEffect(()=> {
        const fetchdata = async () => {
            setLoading(true);

            const posts = await getPosts(token);
            
            if(posts) setPosts(posts);

            setLoading(false);
        };
        fetchdata();
    },[]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const posts = await getPosts(token,title);
        setPosts(posts);
        setTitle('');
        setLoading(false);
    } ;

     
    

   return (
    <main className='post-search'>
        {token && (
            <form onSubmit={handleSubmit}>
                <input className='search' type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
                <button disabled={loading}>buscar</button>
            </form>
        )}

        {token ? (
            <ul className='post-list'>
                {posts?.map((post) => (
                    <Post key={post.id} post={post} posts={posts} setPosts={setPosts} />
                ))}
            </ul>
        ) : (
            <>
                <div className='bienvenida'>
                    <p className='bienvenida'>Bienvenido a LINKEAS!!!</p>
                    <NavLink className='empezar' to='/login'>entrar</NavLink>
                </div>
                
            </>
        )}
    </main>
);
}

export default PostSearch;
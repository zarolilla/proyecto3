import { useState } from 'react';
import { useToken } from '../../context/Authcontext';
import { NavLink } from 'react-router-dom';
import {deletePost} from '../../services/deletePost';
import {likePosts} from '../../services/likePosts';




import './Post.css';

const Post = ({post, posts,setPosts}) => {
    const {token,user} = useToken();
    const [loading,setLoading] = useState(false);
    
    
    const handleLike = async (e,postId,likeByMe) =>{
        setLoading(true);
        e.target.classList.toggle('like')
        const like = await likePosts(postId,likeByMe,token);
        
        if(like) {
            const modifiedPost = posts.map((post)=>{
                if (post.id === postId){
                    const hasLikeClass = e.target.classList.contains('like');
                    
                    if (hasLikeClass){
                        post.likes++;
                    }else {
                        post.likes--;
                    }
                    posts.likeByMe = !post.likeByMe;
                }
                return post;
            })
            setPosts(modifiedPost);
            
        }

       setLoading(false);
    }

  const handleDeletePost = async (postId) => {
      setLoading(true);

      if (confirm('¿quieres borrar esta 1post')){

          const deletedPost = await deletePost(postId,token)
          
          if (deletedPost){
              setPosts(posts.filter((post)=>post.id !== postId ))
        }
  }
  
  
}
 


    return (

        <li className='post'>
            <header>
                <div>{post.avatar}</div>
                <p>@{post.name} </p>
            </header>
            <div >
                <h2>{post.title} </h2>
                <p className='description'>{post.description}</p>
                <p className='enlace'>Enlace</p>
                <a href={post.link}>{post.link}</a>
            </div>
                <time dateTime={post.createdAt}>
                    {new Date(post.createdAt).toLocaleDateString('es-ES',{
                        day: '2-digit',
                        month:'2-digit',
                        year: '2-digit',
                    })}
                </time>
            <footer>
                <div>
                    <div
                        className={`heart ${post.likedByMe && 'like'}`}
                        onClick={(e) => {
                            if (!loading && token) {
                            handleLike(e, post.id, post.likedByMe);
                            }
                        }}
                    >like</div>
                    <p>{post.likes}</p>
                </div>
                {user.id === post.idUser && (
                <button
                 onClick={(e) => 'handleEditePost'(post.id)}
                disabled={loading}>Editar</button>
                )}
                {user.id === post.idUser && (
                <button
                 onClick={(e) => handleDeletePost(post.id)}
                disabled={loading}>Eliminar</button>
                )}
            </footer>
        </li>
    );

};

export default Post;
import { useToken } from "../context/Authcontext";

export const likePosts = async (postId,likeByMe,token) =>{
    

    try {
        let method = likeByMe ? 'delete' : 'post' ;
        const res = await fetch(
            `http://localhost:4000/posts/${postId}/likes`,
            {
               method,
               header: {
                   authorization: token,
               },
            }
        );
        const body = await res.json();

        if(body.status === 'error'){
            alert(body.message);
            return false;
        } else {
            return true
            }
    } catch (error){
        console.error(error)
    }
    };
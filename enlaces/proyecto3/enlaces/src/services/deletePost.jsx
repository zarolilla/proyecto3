

export const deletePost = async (postId,token)=>{
  

  if (confirm('deseas eliminar este post')) {
      try {
          const res = await fetch(
              `http://localhost:4000/posts/${postId}`,
              {
                  method:'delete',
                  headers: {
                      authorization: token,
                  },
              }
          );

       const body = await res.json();

       if (body.status === 'error'){
           alert(body.message);
           return false
       }else {
           return true
       }


      } catch (error) {
        console.error(error)  
      }
  }

  
setLoading(false);



}
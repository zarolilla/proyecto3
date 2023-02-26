export const createPost = async (title,description,url,token)=> {
    try {
        
      const formData = new FormData();

      formData.append('title',title);
      formData.append('link',url);
      formData.append('description',description);

      const res = await fetch('http://localhost:4000/posts',{
          method:'post',
          headers:
          {
           authorization: token,
          },
          body:formData,
      })

      const body = await res.json();

      if (body.status === 'error') {
          alert(body.message);
         return false;
      } else {
          return true;
      }

    } catch (error) {
        console.error(error);
    } 
    
}
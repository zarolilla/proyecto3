export const getPosts = async (token,title) => {
    try {
        let url = 'http://localhost:4000/posts';

        if (title) url += `?title=${title}`;

        const res = await fetch(url,{
            headers:{
                authorization:token,
            },
        });

        const body = await res.json();

        if(body.status === 'error'){
            alert(body.message);
            return false;

        }else{
            return body.data;
            
        }
    } catch (error) {
        console.error(error); 
        return false;
    }
    
};
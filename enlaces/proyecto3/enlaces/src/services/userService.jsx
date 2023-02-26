export const useService = async (token) => {
    try {
        const res = await fetch('http://localhost:4000/users',{
                
                headers: {
                    Authorization:token,
            },
           
        });

            const body = await res.json();

            if(body.status === 'error'){
                alert(body.message);
                return false;
            } else {
                return body.data.user;
            
            }
        } catch (error) {
            console.error(error)
        }
};

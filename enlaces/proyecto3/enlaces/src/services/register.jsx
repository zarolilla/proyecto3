export const register = async (name,email,password) =>{
    try { 
            const res =await fetch('http://localhost:4000/users',{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const body = await res.json();
        if(body.status === 'error') {
            alert(body.message);
            return false;
        }else {
            return true;
        }
        
        } catch (error) {
        console.error(error);
        }
    }

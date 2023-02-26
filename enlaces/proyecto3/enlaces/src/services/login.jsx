export const login = async (email,password) => {
    try {
            const res =await fetch('http://localhost:4000/login',{
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                
                email,
                password,
            }),
        });

            const body = await res.json();

            if(body.status === 'error'){
                alert(body.message);
                return false
            } else {
                return (body.data.token);
            }
        } catch (error) {
            console.error(error)
        }
};

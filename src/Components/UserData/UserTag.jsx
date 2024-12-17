import axios from "axios";
import { useEffect, useState } from "react";
function UserTag(props) {

    
    const [name, setName] =useState("")
    
    const [userFound, setUserFound] =useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token != null) {
            console.log(token);
            axios
                .get(import.meta.env.VITE_BACKEND_URL + "/api/users/", {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    console.log(res.data);
                    if (res.data && res.data.user) {
                        setName(
                            (res.data.user.firstname || "Unknown") + " " + (res.data.user.lastname || "")
                        );
                        setUserFound(true);
                    } else {
                        console.error("User data is missing in the API response");
                        setName("");
                        setUserFound(false);
                    }
                })
                .catch((err) => {
                    console.error("Error fetching user data:", err);
                    setName("");
                    setUserFound(false);
                });
        } else {
            setName("");
        }
    }, [userFound]);
    

    return (
        <div className="absolute right-0 flex  items-center cursor-pointer mr-2">
            <img 
                className="rounded-full w-[75px] h-[75px]"
                src={props.imageLink} 
                
            />
            <span className="text-white ml-[5px] text-xl">{props.name}</span>


            <button onClick={()=>{

                localStorage.removeItem("token")
                setUserFound(false)
               

            }}>LogOut
            </button>
        </div>

        
    );
}

export default UserTag;
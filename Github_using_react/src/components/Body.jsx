import {useState,useEffect} from "react";
function Body(){
    
    const [Profile,setProfile] = useState([]);

    
    async function Gitusers(){
            const response = await fetch("https://api.github.com/users?since=${ran}&per_page=10");
            const data = await response.json();
            // console.log(data);

            setProfile(data);
        }

        useEffect(()=>{
            Gitusers();
        },[]);

        return(
            <div>
                <div id="container">
                    {
                        Profile.map((value)=>{
                            return(
                                <div key = {value.id} className="cards">
                                    <img src={value.avatar_url} alt={value.login} />
                                    <h3>{value.login}</h3>
                                    <a href={value.html_url} target="_blank" id="an">
                                        View Profile
                                    </a>
                                </div> 
                            )
                    })
                    }
                </div>


            </div>

        )



}


export default Body;
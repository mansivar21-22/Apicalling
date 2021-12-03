import react,{useState, useEffect} from 'react'
import axios from 'axios'
function Usestate() {
    const[posts,setPosts]=useState({})
    useEffect(()=>{
        axios.get()
        .then(response=>{
            console.log(response.data);
            setPosts()
        })
        .catch(error =>{

        })
    })
    return(
        <div> <ul>
            {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul></div>
    )
}
export default Usestate
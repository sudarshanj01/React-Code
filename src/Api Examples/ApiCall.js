//Api call using fetch method
import React,{useEffect} from "react"
function ApiCall(){


    const[posts,setPosts]=React.useState([])

    useEffect(() => {
        console.log('hiiiiiiii')
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response=>response.json())
            .then(res=>{
                setPosts(res)
            })

    },[])

    return(
        <div>
            <h2>API Data</h2>
            <ul>
                {posts.map((post)=>(
                    <li>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ApiCall
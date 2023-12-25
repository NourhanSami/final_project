// import { useState , useEffect } from "react";

// const Search =() =>{

//     const[search, setSearch] = useState("");

//     const [posts, setPost] = useState(null);
//     useEffect(() =>{
//         fetch("../data/items.json")
//         .then(response => {
//             alert(response.ok);
//             if (!response.ok) {
//                 throw Error("cann't find product");
                
//             }
//             return response.json();
//         }).then(data => {
//             alert(data);
//             setPost(data);
//         }).catch(e =>{
//             alert(e.message);
//         });

//     }, []);

//     return(
//         <div className="box my-3">
//             <br />
//             <input style={{padding: "20px 50px"}} placeholder="Enter" onChange={event => setSearch(event.target.value)}/><br />
//             {
//                 posts && 
//                 posts.filter(post =>{
//                     if (search === '') 
//                     {
//                         return post;
                        
//                     }else if (post.title.toLowerCase().includes(search.toLowerCase())) {
//                         return post;
                        
//                     }

//                 }).map((post, index) => (
//                     <div className="box" key={index}>
//                         <p>{post.title}</p>
//                         <p>{post.body}</p>
//                         </div>
//                 ))
//             }
//         </div>
//     );
// }

// export default Search;
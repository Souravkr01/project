import { useState } from "react";
import './index.css'
import Nav from './Nav'


function CreatePost(props){
    const [post,setPost] = useState("");
    const [allPost, setAllPost] = useState([]);
    
    const submit = (e) =>{
        e.preventDefault();
        setAllPost(prevPost => {
            const postCopy = [...prevPost]
            postCopy.push({
                name: post,
                id: Date.now().toString()
            })
            return postCopy;
        })
        setPost('');
    }
    // postChange=()=>{
    //     this.setPost({

    //     })
    // }
    
     
      
      const poststyle = {
        padding:"100px",
        borderRadius:"20px 20px 0px 20px",
        marginTop:"20px",
        marginLeft:"100px",
        boxShadow:"15px 0px 15px -10px rgba(0,0,0,0.75)"
      }

      
      const divstyle={
        alignItems: 'center',
    flex: '1',
    justifyContent:'center',
    marginLeft:'auto',
    marginRight:'auto'
      }
    return(
        <div style={divstyle}>
            
            
            <form onSubmit={submit}>
                <div>                
                    <input value={post} onChange={(e)=>setPost(e.target.value)} type="text" style={poststyle}/>
                </div>
                <br></br>
                
                <div>
                <button type="submit"  className="mystyle" style={{marginLeft:"270px"}}>Post</button>
                    {/* <label style={{marginLeft:"100px", color:"#1A8CD8"}}>Post by{props.name}________</label> */}
                </div><br/>
                
                {/* <div>
                    <button  className="mystyle" type='submit' onClick={(e)=>this.commentPost(e)} >Commnet the Post</button>
                </div> */}
            </form>
            <div>
                {allPost.length ? <div>{allPost.map((post) => <h3 key={post.id}>{post.name}</h3>)}</div> : <div>No Post added yet!</div>}
            </div>
        </div>
    )
}
export default CreatePost;
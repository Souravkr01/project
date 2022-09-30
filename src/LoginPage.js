import React from "react";

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: {}
        } 
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        window.location.href = '/post'
    }

    render(){
        const mainStyle = {
            fontSize:"20px", margin:"30px", 
            background:'linear-gradient(to top left, #ccffff 0%, #ffffff 100%)', 
            height:"520px",
            flex:'1',
            alignItems:"center",
            justifyContent:"center",
            color: '#2C3C53'
          }
        
          
    return(
        <div style={mainStyle}>
            <h1  style={{marginLeft:"510px", marginTop:"40px"}}>Lets Join Our Community</h1>
            <form onSubmit={this.handleSubmit} >
                <label >
                    Enter your name:
                    <input type="text" name={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" href="/post" />
            </form>
        </div>
    )
    }
}

export default LoginPage;
import React from 'react'

class User extends React.Component{
    constructor(props){
        super(props);
    

    this.state = {
        count: 0,
        count2: 2,
    }

    }

    render(){

        const {name, location, insta} = this.props;
        const {count, count2} = this.state;
        return(
            <div className = 'user-container'>
                <button onClick={() =>{
                    this.setState({
                        count : this.state.count+1,
                        count2: this.state.count2+1,
                    })
                }}><h5>Counter</h5>

                </button>
                <h3>Name: {name}</h3>
                <h3>Location : {location}</h3>
                <h3>insta: {insta}</h3>
                <h2>Count:{count} </h2>
                <h2>Count2:{count2} </h2>
                
            </div>
        )
    }
}

export default User;
import React from "react";// var React =require("react")

class MyContent extends React.Component{
    constructor(){
        super();
    }
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <p>
                Data from parent<br/>
                name:{this.props.myData.name},<br/>
                age:{this.props.myData.age},<br/>
                education:{this.props.myData.education}
                </p>
        )
    }
}

export default MyContent;
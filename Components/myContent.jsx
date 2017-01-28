import React from "react";// var React =require("react")

class MyContent extends React.Component{
    constructor(){
        super();
    }
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <p onClick={(evnt)=>{this.props.myFunc.myContentClickListner(this,evnt,this.props.myFunc.i)}}>
                Data from parent<br/>
                name:{this.props.myData.name},<br/>
                age:{this.props.myData.age},<br/>
                education:{this.props.myData.education}
            </p>
        )
    }
}

/*MyContent.prototype={
 myData:React.PropTypes.object
 //myData:React.PropTypes.number
 //myData:React.PropTypes.bool
 //myData:React.PropTypes.string.isRequired
 //myData:React.PropTypes.func
 //myData:React.PropTypes.array
 };


 MyContent.defaultProps={
 myData:{
 name:"ydytdty",
 age:"25 Yrs",
 education:"B. Tech."
 }
 //myData:React.propTypes.number
 //myData:React.propTypes.bool
 //myData:React.propTypes.string.isRequired
 //myData:React.propTypes.func
 //myData:React.propTypes.array
 };*/

export default MyContent;
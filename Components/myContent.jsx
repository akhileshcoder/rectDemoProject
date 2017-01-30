import React from "react";// var React =require("react")

class MyContent extends React.Component{
    constructor(){
        super();
    }
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <div style={{border:"1px solid",width:"300px",padding:"5px",margin:"15px"}}>
                <h4>Data from parent</h4>
                {
                    Object.keys(this.props.myData).map(e=>{
                        return <div key={e+":"+this.props.myData[e]}><b>{e}:</b>{this.props.myData[e]},</div>
                    })
                }
            </div>
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
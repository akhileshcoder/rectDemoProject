import React from "react";// var React =require("react")

class CustFilter extends React.Component{
    render(){
        let myStyle={position:"fixed",bottom:"0",width:"calc(100% - 45px)",padding:"5px", borderTop:"1px solid",marginTop:"15px"};
        return (
            <div>
                <div style={myStyle}>
                    Hi M footer
                </div>
            </div>
        )
    }
}

export default CustFilter;
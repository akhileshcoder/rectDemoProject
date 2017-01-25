import React from "react";// var React =require("react")

class Header extends React.Component{
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <div>
                <div style={myStyle}>
                    <span>I m logo</span>
                    <span className="pull-right">I m magic button</span>
                    <button className="pull-right">login</button>
                </div>
            </div>
        )
    }
}

export default Header;
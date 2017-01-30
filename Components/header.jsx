import React from "react";// var React =require("react")

class Header extends React.Component{
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <div>
                <div style={myStyle}>
                    <span>I m logo</span>
                    <button className="pull-right">Change Data</button>
                    <span className="pull-right">I m magic button</span>

                </div>
            </div>
        )
    }
}

export default Header;
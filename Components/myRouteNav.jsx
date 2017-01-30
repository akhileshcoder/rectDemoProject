import React from "react";// var React =require("react")

class MyRouteNav extends React.Component{
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    <li role="presentation" className="active"><a href="#">Page1</a></li>
                    <li role="presentation"><a href="#">Page2</a></li>
                    <li role="presentation"><a href="#">Page3</a></li>
                </ul>
            </div>
        )
    }
}

export default MyRouteNav;
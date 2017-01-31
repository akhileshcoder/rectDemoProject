import React from "react";// var React =require("react")

class MyRouteNav extends React.Component{
    render(){
        let myStyle={padding:"5px", borderBottom:"1px solid",marginBottom:"15px"};
        return (
            <div>
                <ul className="nav nav-tabs">
                    {
                        this.props.pageData.page.map((e,i)=>{
                            return <li key={e} role="presentation"
                                       className={i==0?"active":""}
                                       style={{marginLeft:i==0?"20px":""}}>
                                <a href="#">{e}</a>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default MyRouteNav;
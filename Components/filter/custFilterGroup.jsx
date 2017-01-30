import React from "react";// var React =require("react")
import CustFilter from "./custFilter.jsx";

class CustFilterGroup extends React.Component{
    render(){
        let myStyle={position:"fixed",bottom:"0",width:"calc(100% - 45px)",padding:"5px", borderTop:"1px solid",marginTop:"15px"};
        return (
            <div>
                {
                    Object.keys(this.props.filter_data).map((e,i)=>{
                        return <CustFilter key={e+":"+i}
                                           myprop={{name:e,key:this.props.filter_data[e]}}
                                           myFunc={{myDropDownListner:this.props.filter_handler,i}}
                        />
                    })
                }
                <button className="btn btn-default"
                        style={{margin:"10px"}}
                        onClick={()=>{this.props.filter_reseter()}}>Reset All</button>
            </div>
        )
    }
}

export default CustFilterGroup;
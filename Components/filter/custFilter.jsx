import React from "react";// var React =require("react")

class CustFilter extends React.Component{
    render(){
        let myStyle={position:"fixed",bottom:"0",width:"calc(100% - 45px)",padding:"5px", borderTop:"1px solid",marginTop:"15px"};
        return (
            <div>
                <div className="dropdown pull-left" style={{padding:"10px"}}>
                    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        {this.props.myprop.name}
                        <span className="caret" style={{marginLeft:"5px"}}></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {this.props.myprop.key.map((e,i)=>{
                            return <li
                                key={e+":"+i +"dropdownMenu"+this.props.myprop.name}
                                onClick={(evnt)=>{this.props.myFunc.myDropDownListner(evnt.target.innerText,this.props.myprop.name)}}
                            ><a href="#">{e}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default CustFilter;
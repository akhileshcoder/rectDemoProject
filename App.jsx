import React from "react";// var React =require("react")
import Header from "./Components/header.jsx";
import Footer from "./Components/footer.jsx";
import MyContent from "./Components/myContent.jsx";
import MyRouteNav from "./Components/myRouteNav.jsx";
import CustFilter from "./Components/custFilter.jsx";

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            myData:[
                {
                    name:"Alice",
                    age:25,
                    education:"B. Tech.",
                    location:"Delhi"
                },
                {
                    name:"Bob",
                    age:26,
                    education:"M.A.",
                    location:"Bangalore"
                },
                {
                    name:"Riya",
                    age:29,
                    education:"M. Sc.",
                    location:"pune"
                },
                {
                    name:"Abhishek",
                    age:25,
                    education:"B. Tech.",
                    location:"Delhi"
                },
                {
                    name:"Akhilesh",
                    age:26,
                    education:"M.A.",
                    location:"Bangalore"
                },
                {
                    name:"Neha",
                    age:29,
                    education:"M. Sc.",
                    location:"pune"
                }
            ],
            myFiltr:{}
        };
        this.state.myDataCopy=JSON.parse(JSON.stringify(this.state.myData));
        this.myDropDownListner= this.myDropDownListner.bind(this);
        this.resetAllData= this.resetAllData.bind(this);
        this.resetAllData();
    }
    resetAllData(){
        this.state.myFiltr={};
        this.state.myData.forEach(e=>{
            Object.keys(e).forEach(itm=>{
                if(this.state.myFiltr[itm]){
                    this.state.myFiltr[itm].push(e[itm])
                }else {
                    this.state.myFiltr[itm]=[e[itm]];
                }
            })
        });
        this.setState({
            myData:JSON.parse(JSON.stringify(this.state.myDataCopy))
        })
    }
    myDropDownListner(){
        //console.log("this.arguments: ",arguments,arguments[1].target.innerText);
        let data=this.state.myData;
        data[arguments[2]][arguments[1].target.innerText] +="_1";
        this.setState({
            myData:data
        })
    }


    render(){
        return (
            <div>
                <Header />
                {
                    Object.keys(this.state.myFiltr).map((e,i)=>{
                        return <CustFilter key={e+":"+i}
                                           myprop={{key:this.state.myFiltr[e],name:e}}
                                           myFunc={{myDropDownListner:this.myDropDownListner,i}}
                        />
                    })
                }
                <button className="btn btn-default"
                        style={{margin:"10px"}}
                        onClick={()=>{this.resetAllData}}>Reset All</button>
                <div className="clearfix"></div>
                {
                    this.state.myData.map((e,i)=>{
                        return <MyContent key={e.name} myData={e} />
                    })
                }
            </div>
        )
    }
}

export default App;
import React from "react";// var React =require("react")
import Header from "./Components/header.jsx";
import Footer from "./Components/footer.jsx";
import MyContent from "./Components/myContent.jsx";
import MyRouteNav from "./Components/myRouteNav.jsx";
import CustFilterGroup from "./Components/filter/custFilterGroup.jsx";
import myJsn from "./myStateData.js";

class App extends React.Component{
    constructor(){
        super();
        this.state =myJsn;
        this.state.myDataCopy=JSON.parse(JSON.stringify(this.state.myData));
        this.myDropDownListner= this.myDropDownListner.bind(this);
        this.resetAllFilter= this.resetAllFilter.bind(this);
        this.updateFiltr= this.updateFiltr.bind(this);
        this.state.myFiltr=this.resetAllFilter();
    }
    updateFiltr(typ,val){
        console.log("typ,val: ",typ,val);
        let data;
        if(typ){
            data = this.state.myData.filter(e=>{
                return e[typ]==val;
            });
        }else{
            data=JSON.parse(JSON.stringify(this.state.myDataCopy));
        }
        this.setState({
           myData:data
        });
        setTimeout(()=> {
            let currFltr=this.resetAllFilter();
            console.log("currFltr:",currFltr,this.state);
            this.setState({
                myFiltr:currFltr
            });
        },0)

    }
    resetAllFilter(){
        let myFiltr={};
        this.state.myData.forEach(e=>{
            Object.keys(e).forEach(itm=>{
                if(myFiltr[itm] && myFiltr[itm].indexOf(e[itm])==-1){
                    myFiltr[itm].push(e[itm])
                }else {
                    myFiltr[itm]=[e[itm]];
                }
            });
        });
        return myFiltr;
    }
    myDropDownListner(vl,typ){
        this.updateFiltr(typ,vl)
    }


    render(){
        return (
            <div>
                <Header />
                <CustFilterGroup
                    filter_data={this.state.myFiltr}
                    filter_handler={this.myDropDownListner}
                    filter_reseter={this.updateFiltr} />

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
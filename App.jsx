import React from "react";// var React =require("react")
import Header from "./Components/header.jsx";
import Footer from "./Components/footer.jsx";
import MyContent from "./Components/myContent.jsx";

class App extends React.Component{
    constructor(){
        super();
        this.state ={
            myData:[
                {
                    name:"Alice",
                    age:"25 Yrs",
                    education:"B. Tech."
                },
                {
                    name:"Bob",
                    age:"26 Yrs",
                    education:"M.A."
                },{
                    name:"Riya",
                    age:"29 Yrs",
                    education:"chjjj"
                }
            ]
        };
        this.myContentClickListner= this.myContentClickListner.bind(this);
    }

    myContentClickListner(){
        console.log("this.arguments: ",arguments,arguments[1].target);
        let data=this.state.myData;
        data[arguments[2]].name +="_1";
        this.setState({
            myData:data
        })
    }


    render(){
        return (
            <div>
                <Header />
                {
                    this.state.myData.map((e,i)=>{
                        return <MyContent key={e.name} myData={e} myFunc={{myContentClickListner:this.myContentClickListner,i}}/>
                    })
                }
                <Footer />
            </div>
        )
    }
}

export default App;
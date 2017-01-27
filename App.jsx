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

        setTimeout(() =>{
            let data = [{p:8,p1:8},{p:7,p1:8}];
            this.setState({
                myData:[
                    {
                        name:"Alice1",
                        age:"25 Yrs",
                        education:"B. Tech."
                    },
                    {
                        name:"Bob1",
                        age:"26 Yrs",
                        education:"M.A."
                    },{
                        name:"Riya1",
                        age:"29 Yrs",
                        education:"chjjj"
                    }
                ]
            })
        },3000);
    }
    render(){
        return (
            <div>
                <Header />
                {
                    this.state.myData.map((e,i)=>{
                        return <MyContent key={e.name} myData={e}/>
                    })
                }
                <Footer />
            </div>
        )
    }
}

export default App;
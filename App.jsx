import React from "react";// var React =require("react")
import Header from "./Components/header.jsx";

class App extends React.Component{
    render(){
        return (
            <div>
                <Header />
                <div>
                    Hello World
                </div>
            </div>
        )
    }
}

export default App;
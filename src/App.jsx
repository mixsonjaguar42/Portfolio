import React from "react";
import './index.css'
import { Nav } from "./Components/Nav";
import { Header } from "./Components/Header";
import { Page } from "./Content/Page";

class App extends React.Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <div>
            <Nav/>
            <Header/>
            <Page/>
            </div>
        )
    }
}


export default App
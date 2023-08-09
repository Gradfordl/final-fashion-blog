import { useState } from "react"
import Nav from "./Nav"
export default function Header ({links}) {
    return(
        <div>
            <h1>Sartre's list</h1>
            <h2>Better-Dressed People</h2>
            <Nav links={links}/>
        </div>
        
    )
}
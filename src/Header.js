import React from "react";
import './Header.css'

const Header =function(props){
    // const headerStyle = {textAlign: 'center', padding:20, background:'#000', color:'#fff', textTransform:'uppercase' } 
    return(
        // <div style={{textAlign: 'center', padding:20, background:'#000', color:'#fff', textTransform:'uppercase' }}>
        //     Phone Directory
        // </div>

        // can also be written as 
        // <div style={headerStyle}>
        <div className="header">
            {props.heading}
        </div>
    )
}

export default Header;
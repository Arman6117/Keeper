import React from "react";


const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer(){
   return (<footer >
        <p className="z-0">Copyright {year} </p>
    </footer>)
}

export default Footer

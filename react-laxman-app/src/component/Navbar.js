import React from 'react'

const Navbar = ({filteritem ,menulist}) => {
    return (
        <>
            <nav className="navbar">
               <div className="btn-group">
               {
                  
                   menulist.map((curEle)=>{
                    console.log(curEle)
                       return(
                           <>
                           <button className="btn-group__item" onClick={()=>{filteritem(curEle)}}> {curEle}</button>
                           </>
                       )
                   })
               }
               
             
               </div>
        </nav>
        </>
    )
}

export default Navbar;

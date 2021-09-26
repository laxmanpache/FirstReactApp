import {React,useState} from 'react'
import "../CSS/Style.css";
import Menu  from './menuAPI';
import Menucard from './Menucard';
import Navbar from './Navbar';

const uniqueCate =[ ...new Set( Menu.map((curEle)=>{
     return curEle.category;
})
) ,"All"]
console.log(uniqueCate);

const Resturant = () => {
    // console.log(uniqueCate);
    const [menuData , setmenuData] = useState(Menu);
    const[menulist ,setmenulist]=useState(uniqueCate);
    //  console.log(menulist)
     const filteritem =(category)=>{
         if(category==="All"){
            setmenuData(Menu);
            return;
         }
          const updateList =Menu.filter((curEle)=>{
              return curEle.category===category
          });
          setmenuData(updateList);
     }
    return (
        <>
        <Navbar filteritem={filteritem} menulist={menulist}/>
        <Menucard menuData={menuData}/>
        
        </>
     
    )
}

export default Resturant;

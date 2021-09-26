import React from 'react'
// import Menu from './menuAPI';

const Menucard = ({menuData}) => {
    console.log(menuData);
    return (
       <>
         <section className="main-card--cointainer">
        {  
            menuData.map((curEle)=>{
              const  {id,name,img,description,category} =curEle;
                return(
                    <>
                                <div className="card-container" key={curEle.id}>
                                        <div className="card" >
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{id}</span>
                                            <span className="card-author subtle">  {category}</span>
                                            <h2 className="card-title"> {name}</h2>
                                           
                                            <span className="card-description subtle">{description}
                                           
                                            </span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        <img src={img} alt="" />
                                        <span className="card-tag subtle" > Order Now</span>
                                    </div>
                                </div>

                    </>
                )
            })
        }
        </section>
               </>
    )
}

export default Menucard;

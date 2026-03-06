import About from './About';
import QuoteCard from './QuoteCard';
import ShayariCard from "./ShayariCard";
import { useEffect, useState } from 'react';

const Body = () => {
    const [AboutAPI, SetAboutAPI]= useState(null);
    useEffect(()=>{fetchData();},[]);
    const fetchData = async() =>{
        const data = await fetch("https://yankoshbadal.github.io/JSON_APIs/khayaal_api.json");
        const json = await data.json();
        SetAboutAPI(json);
    };
    const colors = ["#FCECD3", "#ECF4EC", "#F4E2E5", "#E1F0FB"];

    
    return (

          <div className='Body'> 
            <About value={AboutAPI?.about}/>

            <QuoteCard Quote={AboutAPI?.qoute}/>

            {AboutAPI?.poem?.map((p, index) => (
            <ShayariCard
                poem={p}
                key={p.id}
                bgColor={colors[index % colors.length]}  
                />
            ))}
        </div>
        )

}

export default Body;
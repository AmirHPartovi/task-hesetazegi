import React, { useEffect, useState } from 'react'


import Card from './Card'

import { dataType } from '../../models/models'

import axios from 'axios'
import api from '../../api/data'

import { useMediaPredicate } from "react-media-hook";
import Spinner from './Spinner'


type Props = {}

const CardContainer =(props: Props) => {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try {
          const {data: response} = await axios(api);
          setData(response?.content?.items);
        } catch (error) {
          console.error('error' , error);
        }
        setLoading(false);
      }
  
      fetchData();
    }, []);


    const biggerThan648 = useMediaPredicate("(min-width: 648px)");
    return(
      
        <div style={{
            display:'flex',
            flexDirection:biggerThan648?'row':'column',
            justifyContent:'center',
            alignItems:'center',
            
            
        }}>
          {loading?<Spinner/>:
            <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap',
                width:biggerThan648?'1400px':'300px',
                
                
            }}>
            {data.map((item:dataType)=>(
                <div >
                  <Card key={item.id} title={item.title} description={item.description}/>
                </div>
            ))}
            </div>}
        </div>
    )

  
}
export default CardContainer
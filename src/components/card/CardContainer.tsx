import React, { useEffect, useState } from 'react'

import Data from '../../api/data'
import Card from './Card'
import { dataType } from '../../models/models'
import axios from 'axios'
import api from '../../api/data'

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
    return(
        <div style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            maxWidth:'1400px',
            
        }}>
            <div style={{
                display:'flex-box',
                flexDirection:'row',
                flexWrap:'wrap',
                maxWidth:'1800px',
                
            }}>
            {data.map((item:dataType)=>(
                <Card title={item.title} description={item.description}/>
            ))}
            </div>
        </div>
    )

  
}
export default CardContainer
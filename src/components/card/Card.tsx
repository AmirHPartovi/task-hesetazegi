import React, { useState } from 'react'
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/ArrowDownIcon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon.svg";


import { useMediaPredicate } from "react-media-hook";

type Props = {
    title:string,
    description:string
}

const Card = ({title,description}: Props) => {
    const[isOpen,setIsOpen]=useState(false)
    const handleOnClick = () =>{
        setIsOpen(!isOpen)
    }

    const biggerThan648 = useMediaPredicate("(min-width: 648px)");

  return (
    <>
    <div
    onClick={handleOnClick} 
    style={{
        width:biggerThan648?'648px':'320px',
        boxShadow:'0px 4px 16px rgba(137, 137, 137, 0.1)',
        borderRadius:'8px',
        margin:'24px',
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'16px 24px',
            color:'#3A3A3A'
            
            
        }}>
            <div style={{
                fontSize:'1rem',
            }}>
                {title}
            </div>
            <div>
                    {isOpen?<ArrowDownIcon/>:<ArrowLeftIcon/>}
            </div>
        </div>
        <div
        style={{
            display:isOpen?'block':'none',
        }}>
            <div 
            style={{
                borderColor:'#EFEFEF',
                backgroundColor:'#EFEFEF',
                width:biggerThan648?'600px':'300px',
                height:'1px',
                margin:biggerThan648?'0px 24px':'0px 10px'
                
            }}>
            </div>
            <div
            style={{
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '1rem',
                lineHeight: '32px',
                color:'#656565',
                padding:'16px 24px',

            }}>
                {description}
            </div>
        </div>
    </div>
    </>
  )
}

export default Card
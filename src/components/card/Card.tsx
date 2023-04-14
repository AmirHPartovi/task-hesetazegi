import React, { useState } from 'react'
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/ArrowDownIcon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon.svg";

type Props = {
    title:string,
    description:string
}

const Card = ({title,description}: Props) => {
    const[isOpen,setIsOpen]=useState(true)
    const handleOnClick = () =>{
        setIsOpen(!isOpen)
    }
  return (
    <>
    <div
    onClick={handleOnClick} 
    style={{
        maxWidth:'648px',
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
            <div>
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
                width:'600px',
                height:'1px',
                margin:'0px 24px'
                
            }}>
            </div>
            <div
            style={{
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '16px',
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
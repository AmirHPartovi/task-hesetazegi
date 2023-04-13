import React from 'react'
import { ReactComponent as ArrowIcon } from "../../assets/icons/ArrowIcon.svg";

type Props = {}

const Card = (props: Props) => {

    const handleOnClick = () =>{

    }
  return (
    <div
    onClick={handleOnClick} 
    style={{
        width:'648px',
        boxShadow:'0px 4px 16px rgba(137, 137, 137, 0.1)',
        borderRadius:'8px',
        margin:'24px'
    }}>
        <div style={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'16px 24px',
            color:'#3A3A3A'
            
            
        }}>
            <div>
                     1. دلیل خلق حس تازگی چیست؟
            </div>
            <div>
                    <ArrowIcon/>
            </div>
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
        حس تازگی می‌خواهد نگاه‌های دور شده از اهمیت و جایگاه آشپزی را دوباره به سمت آشپزی برگرداند؛ تا ارتباط آن با حوزه سلامت برای همه مردم صاحب اهمیت شود. همچنین می‌خواهد تمدن کهن آشپزی جهان را به‌صورت کاربردی و مطابق با نیازهای هر شخص، وارد خانه‌ها کند.
        </div>
    </div>
  )
}

export default Card
import React from 'react';

export type PropsType = {
    callBack:()=>void
    name:string
}
 export const Button = (props:PropsType)=>{
 const callBackHadler = () => {
  props.callBack()
}

     return(
         <button onClick={callBackHadler} >{props.name}</button>
     )
 }
 export default Button;
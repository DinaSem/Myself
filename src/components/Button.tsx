import React from 'react';

export type PropsType = {
    callBack:()=>void

}
 export const Button = (props:PropsType)=>{
const callBackHadler = () => {
  props.callBack()
}

     return(
         <button onClick={callBackHadler} >New</button>
     )
 }
 export default Button;
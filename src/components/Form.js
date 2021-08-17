import React, {useState} from 'react';
import Todos from './Todos';
// import success from "./success";

export default function Form() {
// const[isSubmitted, setIsSubmitted] = useState(false)

function submitForm(){
  // setIsSubmitted(true);
}
  return (
    <>
      <Todos/>
      {/* {!isSubmitted ? (<Todos submitForm={submitForm}/>):(<success/>)} */}
    </>
  )
}

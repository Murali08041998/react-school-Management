import React from 'react'
import { useNavigate } from 'react-router-dom';
function Loginform() {
    let navigate=useNavigate();
    let handlesubmitadd=()=>{
        navigate('/addform')}
    let handlesubmitview=()=>{
        navigate('/viewform')
    }    
  return (
    <div>
        <div  className='text-center' margin-down='12px'>

        <h1><button onClick={()=>handlesubmitadd()}>Add form</button></h1>
        </div><br/>
        <div className='text-center' margin-down='12px'>
        <h1><button onClick={()=>handlesubmitview()}>View form</button></h1>
        </div>
    </div>
  )
}

export default Loginform;
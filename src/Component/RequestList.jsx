import React from 'react'

const RequestList = (props) => {
  //console.log(props.list)
  return (
    
    <div style={{padding:"20px 20px ",color:"navajowhite"}}>
       <div>
         <h1 >
             Receipt
          </h1>
       </div>

       <div style={{height:"300px",overflow:"hidden scroll"}}> 

       {props.list.map((user)=>{
        //console.log(user.name) 
        return <div style={{color:"rgba(204, 158, 154, 1)"}} key={user.id} >
          {user.name}<br/>
          {user.email}<br/>
          {user.tel}<hr/>
        </div>
       })}
       </div>
      </div> 
  )
}

export default RequestList
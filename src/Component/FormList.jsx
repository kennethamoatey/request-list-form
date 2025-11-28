import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';
import {v4 as uuid} from 'uuid'

const FormList = (props) => {
 
 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
 const [tel,setTel]=useState('');

  const handleSubmit=(event)=>{
event.preventDefault();

if(name.length>0 && email.length>0){
  
  let newUser={
  name:name,
  email:email,
  tel:tel,
  id:uuid()
}
  props.data(newUser)

setName("");
setEmail('');
setTel('');
}


  }

  const handleName=(event)=>{
    setName(event.target.value)
  }
  const handleEmail=(event)=>{
    setEmail(event.target.value)
  }
  const handleTel=(event)=>{
    setTel(event.target.value)
  }

  return (
    
    
      
    <Form onSubmit={handleSubmit} style={{color:"navajowhite",padding:"20px 20px"}} >
      <h1>Form</h1>
      <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label >Fullname</Form.Label>
        <Form.Control type="text" placeholder="Enter Fullname"value={name} onChange={handleName} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email Here" value={email} onChange={handleEmail} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        
        <Form.Label >Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Enter Your Phone number" value={tel} onChange={handleTel} />
       
       </Form.Group>
      
      <Button variant="primary" type="submit"  >
        Submit
      </Button>
    </Form>
 
   
  )
}

export default FormList;

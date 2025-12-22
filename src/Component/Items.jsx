import React ,{useState} from 'react';
import {Button,Modal,Form} from 'react-bootstrap'



const Items = (props) => {

    const [showModal,setShowModal]=useState(false);
    
    const handleShow=()=>{
        setShowModal(!showModal)
    }

    const [name,setName]=useState(props.detail.name)
    const [email,setEmail]=useState(props.detail.email)
    const [tel,setTel]=useState(props.detail.tel)

    const saveEdit=()=>{
        let mergedEdit={
            name:name,
            email:email,
            tel:tel
        }
        let newEdit={...props.detail,...mergedEdit}

        props.edited(props.detail.id,newEdit)

        handleShow()
    }

    

    const nameHandle=(event)=>{
        setName(event.target.value)
    };
    const emailHandle=(event)=>{
        setEmail(event.target.value)
    };
    const telHandle=(event)=>{
        setTel(event.target.value)
    }
    
    
  return (
    <div>{props.detail.name}<br/>
          {props.detail.email}<br/>
          {props.detail.tel}<br/>

          <Button variant="outline-primary" style={{marginRight:'15px',width:'70px'}} 
          onClick={handleShow}>Edit</Button>
          <Button variant="outline-danger"onClick={()=>{props.deleted(props.detail.id)}}>Delete</Button>
          <hr/>

            <Modal show={showModal} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Form  style={{padding:"20px 20px"}}  >
                          
                          <Form.Group className="mb-3" controlId="formBasicFullname">
                            <Form.Label >Fullname</Form.Label>
                            <Form.Control type="text" placeholder="Enter Fullname" value={name} onChange={nameHandle}/>
                            
                          </Form.Group>
                    
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Here" value={email} onChange={emailHandle}  />
                            
                          </Form.Group>
                    
                          <Form.Group className="mb-3" controlId="formBasicPhone">
                            
                            <Form.Label >Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter Your Phone number" value={tel} onChange={telHandle} />
                           
                            </Form.Group>
                        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow} >
            Close
          </Button>
          <Button variant="primary" onClick={saveEdit} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        
        
    </div>
  )
}

export default Items
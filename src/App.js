import React,{useState} from 'react';
import './App.css';
import FormList from './Component/FormList';
import RequestList from './Component/RequestList';
import {Container,Row,Col} from 'react-bootstrap';

const App = () => {

 const [user,setUser]=useState([]);

 const addUser=(newUser)=>{
  setUser([...user,newUser])

 }

 const editUser=(userId,newEdit)=>{
let edited= user.map((user)=>{
  if(user.id===userId){
    return newEdit
  }else{
    return user
  }
})
setUser(edited)
 }

 const deleteUser=(userId)=>{
let erase= user.filter(use => use.id !== userId

)
setUser(erase)
console.log(erase)
}
  

 

 //console.log(user)
 
  return (
    <Container className="" style={{backgroundColor:"rgb(221, 221, 235)",maxWidth:"100vw",height:"100vh",display:"flex",
      flexDirection:"column",justifyContent:"center",alignItems:"center",
      backgroundImage:"url('/autoImage/office.jpeg')",backgroundPosition:"center",backgroundSize:"cover",
      backgroundAttachment:"fixed" }}  > 

      
      <Row style={{border:"1px solid white",borderRadius:"10px",backgroundColor:"rgba(0,0,0,0.6)"
       ,boxShadow:"15px 15px  15px  grey" }} >
          <h1 style={{textAlign:"center",color:"navajowhite"}}>RequestList</h1>

        <Col>
        <FormList data={addUser} />
      
        </Col>

        <Col>
        
        <RequestList  list={user} edit={editUser} delete={deleteUser} />
        </Col>

      </Row>
      
      </Container>
      
  )
}

export default App
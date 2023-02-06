import React,{useState,useEffect} from 'react'
import {Form, Button } from 'react-bootstrap';
import axios from 'axios';
//import './App.css';
import { useNavigate, useParams } from 'react-router-dom';
//import { StudentContext } from '../App';
function Addform() {
   let navigate=useNavigate(); 
   let params=useParams() 
   let [fullname,setFullname]=useState("");
   let [Rollnumber,setRollnumber]=useState("");
   let [Studentclass,setStudentclass]=useState("");
   let [Totalsubject,setTotalsubject]=useState("");
   let [Age,setAge]=useState("");
   let handleSubmit=async()=>{
   let data={fullname,Rollnumber,Studentclass,Totalsubject,Age}
   if(params.id){
    try{
      let res=await axios.put(`https://63d0bf6dd5f0fa7fbdbd132d.mockapi.io/students/${params.id}`,data)
      if(res.status===200){
        navigate('/viewform')
      }
    }catch(error){
      console.log(error)
    }
   }
   else{
    try{
      let res=await axios.post('https://63d0bf6dd5f0fa7fbdbd132d.mockapi.io/students',data)
      if(res.status===201){
        navigate('/viewform')
      }
    } catch(error){
      console.log(error)
    }
   }  
} 
let getData=async()=>{
  try{
    let res=await axios.get(`https://63d0bf6dd5f0fa7fbdbd132d.mockapi.io/students/${params.id}`)
    if(res.status===200){
      setFullname(res.data.fullname)
      setRollnumber(res.data.Rollnumber)
      setStudentclass(res.data.Studentclass)
      setTotalsubject(res.data.Totalsubject)
      setAge(res.data.Age)
    }
    else{
      navigate('/viewform')
    }
  } catch(error){
    navigate('/viewform')
  }
}
useEffect(()=>{
  if(params.id){
    getData()
  }
},[])
  return (
     <Form>
      <Form.Group className="mb-3" >
        <Form.Label>FullName</Form.Label>
        <Form.Control type="text" placeholder="Enter FullName"  onChange={(e)=>setFullname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>RollNumber</Form.Label>
        <Form.Control type="number" placeholder="Enter Rollnumber"  onChange={(e)=>setRollnumber(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Student Class</Form.Label>
        <Form.Control type="number" placeholder="Enter StudentClass"  onChange={(e)=>setStudentclass(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Total Subject</Form.Label>
        <Form.Control type="number" placeholder="Enter Total Subject"  onChange={(e)=>setTotalsubject(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter Age"  onChange={(e)=>setAge(e.target.value)}/>
      </Form.Group>
     
      <Button variant="primary" onClick={()=>handleSubmit()}>
        Submit
      </Button>
    </Form>  )
}

export default Addform;
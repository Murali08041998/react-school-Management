import React,{useState,useEffect} from 'react'
import { Table,Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
// import { StudentContext } from '../App';
import axios from 'axios';
function Viewform() {
  let [data,setData]=useState([])
  let navigate = useNavigate()
  // let context = useContext(StudentContext)
  let getData=async()=>{
    try{
      let res=await axios.get('https://63d0bf6dd5f0fa7fbdbd132d.mockapi.io/students')
      if(res.status===200){
        console.log(res.data)
        setData(res.data)
      }
    } catch(error){
      console.log(error)
    }
  }
  let handleDelete = async(id)=>{
    try {
        let res = await axios.delete(`https://63d0bf6dd5f0fa7fbdbd132d.mockapi.io/students/${id}`)
        if(res.status===200)
        {
            getData()
        }
    } catch (error) {
        console.log(error)   
    }
}
useEffect(()=>{
  getData()
},[])
  return ( 
    <Table striped bordered hover>
       <thead>
        <tr>
          <th>#</th>
          <th>FullName</th>
          <th>Roll Number</th>
          <th>Student Class</th>
          <th>Total Subject</th>
          <th>Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            data.map((e)=>{
                return <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.fullname}</td>
                    <td>{e.Rollnumber}</td>
                    <td>{e.studentclass}</td>
                    <td>{e.Totalsubject}</td>
                    <td>{e.Age}</td>
                    <td>
                        <Button variant='primary' 
                        onClick={()=>navigate(`/addform/${e.id}`)}> 
                        <i className="fas fa-fw fa-pen"></i> Edit
                        </Button>
                        &nbsp;&nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(e.id)}> <i className="fas fa-fw fa-trash"></i> Delete</Button>
                    </td>
                </tr>
            })
        }
      </tbody>
    </Table>
  )
}

export default Viewform;
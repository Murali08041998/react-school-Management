import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams, useNavigate } from 'react-router-dom'
//import { StudentContext } from '../App';


function Edituser() {
    let params = useParams()
    let navigate = useNavigate()
    let [fullname, setFullname] = useState([params.id]?.fullname)
    let [Rollnumber, setRollnumber] = useState([params.id]?.Rollnumber)
    let [Studentclass, setStudentclass] = useState([params.id]?.Studentclass)
    let [Totalsubject, setTotalsubject] = useState([params.id]?.Totalsubject)
    let [Age, setAge] = useState([params.id]?.Age)
    let HandleSubmit = () =>
         {
        let newArray = []
        newArray.splice(params.id, 1, {
            fullname, Rollnumber, Studentclass, Totalsubject, Age
        })
    
        navigate('/viewform')
    }
    return (

        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter FullName" value={fullname} onChange={(e) => setFullname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Roll Number</Form.Label>
                <Form.Control type="number" placeholder="Enter Roll Number" value={Rollnumber} onChange={(e) => setRollnumber(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Student Class</Form.Label>
                <Form.Control type="texzt" placeholder="Enter Student Class" value={Studentclass} onChange={(e) => setStudentclass(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Total Subject</Form.Label>
                <Form.Control type="number" placeholder="Enter Total Subject" value={Totalsubject} onChange={(e) => setTotalsubject(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Age</Form.Label>
                <Form.Control type="number" placeholder="Enter Age" value={Age} onChange={(e) => setAge(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={() => HandleSubmit()}>
                Submit
            </Button>
        </Form>
    )
}

export default Edituser;
import React ,{useState} from "react";
import { Form, Button } from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import "./postUser.css"

const PostUser = () => {
    const [formData ,setFormData] = useState({
        name:"",
        email:"",
        phone:""
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response =await fetch("http://13.49.145.211:5000/api/user",{
                method :"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(formData)
            })
            const data = await response.json(response)
            console.log(data);
            navigate("/");

        }catch(error){
            console.log(error.message);
        }
        
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    return (
        <>
            <div className="center-form">
                <h1>Post New User</h1>
                <Form onSubmit = {handleSubmit}>
                    <Form.Group controlId ="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group controlId ="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group controlId ="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control 
                            type="text"
                            name="phone"
                            placeholder="Enter phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="dark" type="submit" className="w-100">
                        Post
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default PostUser;
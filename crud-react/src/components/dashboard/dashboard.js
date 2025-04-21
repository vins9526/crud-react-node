import { useState , useEffect }     from "react";
import { Button, Container, Row ,Col ,Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const [user , setUser] = useState([]);
    const navigate = useNavigate();

    const fetchUsers = async()=>{
        try{
            console.log("API URL:", process.env.REACT_APP_API_URL);
            const response =await fetch(`${process.env.REACT_APP_API_URL}/api/user`);
            const data = await response.json();
            console.log("Fetched users:", data); // Debugging
            setUser(data);
        }catch(error){
            console.error("Error while fetching users", error.message);
            
        }
    }

    useEffect(()=>{
        fetchUsers();

    },[]);

    const handleUpdate = (userId) =>{
        navigate(`/user/${userId}`)
    }

    const handleDelete = async (userId) =>{
        try{
            const response =await fetch(`${process.env.REACT_APP_API_URL}/api/user/${userId}`,{
                method :"DELETE"
            });
            console.log("Delete respose :",response);
            if (response.ok){
                fetchUsers(); 
            }
            
        }catch(error){
            console.error("Error while deleting users", error.message);
        }
    }

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col>
                        <h1 className="text-center">Dashboard Component</h1>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {user.map((user)=>(
                                    <tr key ={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Button
                                            variant="dark" 
                                            onClick={()=>handleUpdate(user._id)}>
                                                Update
                                            </Button>
                                            <Button 
                                                variant="danger"
                                                onClick={()=>handleDelete(user._id)}
                                                >
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        
        </>
    );
}

export default Dashboard;
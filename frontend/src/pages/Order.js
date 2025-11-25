import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Modal, Form } from "react-bootstrap";

const Order = () => {
    const [foods, setFoods] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedFoodId, setSelectedFoodId] = useState(null);
    const [orderDetails, setOrderDetails] = useState({
        name: "",
        address: "",
        email: ""
    });

    useEffect(() => {
        axios.get("http://localhost:5000/api/foods")
            .then(response => setFoods(response.data))
            .catch(error => console.error("Error fetching food data:", error));
    }, []);

    const handleShowModal = (foodId) => {
        setSelectedFoodId(foodId);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setOrderDetails({ name: "", address: "", email: "" });
    };

    const handleChange = (e) => {
        setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
    };

    // **PASTE THE UPDATED handleOrder FUNCTION HERE**
    const handleOrder = async () => {
        if (!orderDetails.name || !orderDetails.address || !orderDetails.email) {
            alert("Please fill all fields.");
            return;
        }
    
        const orderData = {
            foodId: selectedFoodId,  
            buyerName: orderDetails.name,
            buyerEmail: orderDetails.email,
            buyerAddress: orderDetails.address
        };
    
        console.log("📤 Order Data Sent to Backend:", orderData); // Debugging
    
        try {
            const response = await axios.post("http://localhost:5000/api/orders", orderData, {
                headers: { "Content-Type": "application/json" }
            });
    
            console.log("✅ Order Response:", response.data);
            alert("Order placed successfully!");
            handleCloseModal();
        } catch (error) {
            console.error("❌ Error placing order:", error.response?.data || error);
            alert("Failed to place order. Please try again.");
        }
    };    

    return (
        <div className="container mt-4">
            <h2>Available Foods</h2>
            {foods.length === 0 ? (
                <p>No food available for order.</p>
            ) : (
                foods.map((food) => (
                    <Card key={food._id} className="mb-3">
                        <Card.Body>
                            <Card.Title><strong>{food.foodName}</strong></Card.Title>
                            <Card.Text>
                                Donated by: {food.donorName} <br />
                                Address: {food.address} <br />
                                Contact: {food.phoneNumber}
                            </Card.Text>
                            {food.available ? (
                                <Button variant="success" onClick={() => handleShowModal(food._id)}>Order Now</Button>
                            ) : (
                                <Button variant="secondary" disabled>Not Available</Button>
                            )}
                        </Card.Body>
                    </Card>
                ))
            )}

            {/* Order Form Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Your Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" value={orderDetails.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" name="address" value={orderDetails.address} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={orderDetails.email} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary" onClick={handleOrder}>Place Order</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Order;

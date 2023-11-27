import React, { useEffect, useState, useRef } from "react";
import "./chatUI.css";
import { useNavigate, useParams } from 'react-router-dom';
import NavIcon from "../side-bar/NavIcon";
import NormalNavBar from "../normal-nav/NormalNavBar";
import PatientNavIcon from "../patient-sidebar/PatientNavIcon";

export default function ChatUI() {
    const [users, setUsers] = useState([]);
    // const [senderClass, setSenderClass] = useState('');
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        doctorId: userId,
        patientId: sessionStorage.getItem("patient_id"),
        content: "",
        sender: "P",
    });

    const fetchUserData = () => {
        fetch("http://localhost:8080/get_messages?doctorId=" + userId + "&patientId=" + sessionStorage.getItem("patient_id"))
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUsers(data);
            });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/send_message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            setResponse(data);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
        window.location.reload();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const messagesRef = useRef(null);

    useEffect(() => {
        // Scroll to the bottom when component mounts or when new messages are added
        if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [users]);

    return (
        <div>
            <NormalNavBar/>
            <PatientNavIcon/>
            <div className="chat-card">
                <div ref={messagesRef}>
                    {users.length > 0 && (
                        <ul>
                            {users.map((user) => {
                                // Conditionally set the sender class
                                const currentSenderClass = user.sender === "P" ? "bubble right" : "bubble left";

                                return (
                                    <li style={{ listStyleType: 'none' }} className={currentSenderClass} key={user.id}>
                                        {user.content}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>

            <form className="send" onSubmit={handleSubmit}>
                <textarea id="message" name="content" value={formData.content} 
                onChange={handleChange} placeholder="Write something.."></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

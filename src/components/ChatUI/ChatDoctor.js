import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import NavIcon from "../side-bar/NavIcon";
import '../ChatUI/chatUI.css';
import NormalNavBar from "../normal-nav/NormalNavBar";

export default function ChatUI() {
    const [users, setUsers] = useState([]);
    // const [senderClass, setSenderClass] = useState('');
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState(null);
    const { userId } = useParams();
    const [formData, setFormData] = useState({
        doctorId: sessionStorage.getItem("doctor_id"),
        patientId: userId,
        content: "",
        sender: "D",
    });

    const fetchUserData = () => {
        fetch("http://localhost:8080/get_messages?patientId="+userId+"&doctorId="+ sessionStorage.getItem("doctor_id"))
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
            <NavIcon/>
        <div class="chat-card">
            <div ref={messagesRef}>
                {users.length > 0 && (
                    <ul>
                        {users.map((user) => {
                            // Conditionally set the sender class
                            const currentSenderClass = user.sender === "D" ? "bubble right" : "bubble left";

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
        <form class="send" onSubmit={handleSubmit}>
                <textarea id="message" name="content" value={formData.content} onChange={handleChange} placeholder="Write something.."></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

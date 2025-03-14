
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './CSS/Signup.css'; // Import your CSS file

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="signup-container">
            <div className="header-rectangle">
            <img className="logo" alt="Kotelawala defence" src="kdu.png" />
                <h1>Leave Management System</h1>
            </div>
                <div className="d-flex justify-content-center align-items-center vh-100">
                    <div className="frame">
                        <h2>Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name">
                                    <strong>Name</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    autoComplete="off"
                                    name="name"
                                    className="form-control rounded-5"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email">
                                    <strong>Email</strong>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter Email"
                                    autoComplete="off"
                                    name="email"
                                    className="form-control rounded-5"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password">
                                    <strong>Password</strong>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    autoComplete="off"
                                    name="password"
                                    className="form-control rounded-5"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-success w-100 rounded-5 bg-dark">
                                Submit
                            </button>
                            <p>Already have an Account</p>
                            <Link to="/login" className="btn btn-default border w-100 bg-light rounded-5 text-decoration-none">
                                Login
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Signup;

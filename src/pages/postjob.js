import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Postjob({ user }) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    if (!user) {
        return (
            <div style={{ padding: "20px" }}>
                <h2>You must be logged in to post a job</h2>
                <button onClick={() => navigate("/login")} style={{ padding: "10px", cursor: "pointer" }}>Go to Login</button>
            </div>
        );
    }

    const handlePost = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/jobs", {
                title,
                description
            });
            setTitle("");
            setDescription("");
            alert("Job posted successfully!");
        } catch (err) {
            console.error(err);
            alert("Error posting job");
        }
    };

    return (
        <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
            <h2 style={{ textAlign: "center" }}>Post a Job</h2>
            <form onSubmit={handlePost} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <input style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc" }} type="text" placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} required />
                <textarea style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", minHeight: "100px" }} placeholder="Job Description" value={description} onChange={e => setDescription(e.target.value)} required />
                <button type="submit" style={{ padding: "12px", borderRadius: "6px", border: "none", backgroundColor: "#007BFF", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>Post Job</button>
            </form>
        </div>
    );
}

export default Postjob;

import axios from 'axios';
import React, { useState } from 'react'
import Navbar from './Unav'
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';

function Dashboard() {

    const [file, setFile] = useState(null)
    const [upload, setUpload] = useState(false)

    const handleFileChange = event => {
        console.log(event.target.files);
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData()
        data.append("file", file)

        await axios.post("http://localhost:4000/api/upload",
            data
        ).then((res) => {
            if (res.data.upload) {
                setUpload(true)
            }
        }).catch((err) => {
            toast.error(data.message, {
                id: 'uploadErr'
            });
        })
    }

    return (
        <>
            <Navbar />

            <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

                {!upload ?
                    <Card style={{ alignSelf: 'center', padding: "20px", display: "flex", flexDirection: "column", boxShadow: 'initial' }}>
                        <Card.Body >
                            <Card.Title style={{ textAlign: "center", gap: "20px" }}>Upload File</Card.Title>

                            <Card.Text style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                                    <input type="file" multipart="" onChange={handleFileChange} />
                                    <button onClick={handleSubmit} style={{ borderRadius: "10px" }}>
                                        Upload!
                                    </button>

                                </div>

                            </Card.Text>
                        </Card.Body>
                    </Card>


                    :
                    <Card style={{ alignSelf: 'center', padding: "20px", display: "flex", flexDirection: "column", boxShadow: 'initial' }}>
                        <Card.Body style={{ textAlign: "center", gap: "20px" }}>
                            <Card.Title style={{ textAlign: "center", gap: "20px" }}> File Uploaded Successfully</Card.Title>
                            <Card.Text style={{ display: "flex", flexDirection: "column" }}>
                                {/* File Uploaded Successfully */}
                            </Card.Text>
                            <Card.Link href="/chart" ><button style={{borderRadius: "10px", backgroundColor: "green"}}>View Status</button></Card.Link>
                        </Card.Body>
                    </Card>
                }
            </div>
        </>
    )
}

export default Dashboard
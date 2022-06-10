import {useState} from "react";
const Login = () =>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTMwMmIxM2FkZjIxNzA0MzE1MDg0OCIsImlhdCI6MTY1NDg1MDczNywiZXhwIjoxNjU3NDQyNzM3fQ.Q2dxz6pXV308HG7Br94KzbxEHYpaCqZy2MQBv6gHS0M');

        let raw = JSON.stringify({"email":username,"password":password});

        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: headers,
            redirect: 'follow'
        };

        fetch("https://cfg22-backend.herokuapp.com/api/v1/auth/login", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (JSON.parse(result).success === true) {
                    localStorage.setItem('token', JSON.parse(result).token);
                    alert(JSON.parse(result).token);
                }
                else {
                    alert("invalid username or password");
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className="form">
                    <div className="first">
                        <input type="text" name="Username" className="box" placeholder="Username" onChange={(e)=>{setUserName(e.target.value)}}></input>

                    </div>
                    <div className="second">
                        <input type="password" name="password" className="box" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    </div>
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;

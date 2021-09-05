import React,{useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import './Signup.css'

const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const SignUp = () => {
		fetch("/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				password: password,
				email: email
			})
		}).then(res => res.json()).then(data => {
			console.log(data);
		// if data.error -> show error
		if(data.error){
			console.log(data.error);
		} else {
			history.push("/signin");
		}
		}).catch(err=>{
			console.log(err);
		})
	}


    return (
        <div>
            <div className="signup__card">
				{/* <img
					className="signup__image"
					to="/"
					src="https://i.ibb.co/YdR0QvM/Png-Item-1056823.png"
					alt=""
				/> */}
                <input class="input is-primary" type="text" value={name} placeholder="Primary input" onChange={(e) => setName(e.target.value)} />
                <input class="input is-primary" type="text" value={password} placeholder="Primary input" 
					onChange={(e) => setPassword(e.target.value)} />
		
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" onClick={SignUp}>Signup</button>
				<Link to="/signin">
					<h4>Already have an account?</h4>
				</Link>
            </div>
        </div>
    )
}

export default Signup

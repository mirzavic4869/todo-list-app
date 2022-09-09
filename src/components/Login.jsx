import { React, useEffect, useRef, useState } from "react";

const Login = () => {
	const useRef = useRef();
	const errRef = useRef();

	const [user, setUser] = useState("");
	const [pwd, setPwd] = useState("");
	const [errMsg, setErrMsg] = useState("");
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		useRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [user, pwd]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setUser("");
		setPwd("");
		setSuccess(true);
	};
	return (
		<>
			{success ? (
				<section>
					<h1>You are logged in!</h1>
					<br />
					<p>
						<a href="#">Go to Home</a>
					</p>
				</section>
			) : (
				<section>
					<p
						ref={errRef}
						className={errMsg ? "errMsg" : "offscreen"}
						aria-live="assertive"
					>
						{errMsg}
					</p>
					<h1>Sign In</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							ref={useRef}
							autoComplete="off"
							onChange={(e) => setUser(e.value.target)}
							value={user}
							required
						/>

						<label htmlFor="username">Password</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPwd(e.value.target)}
							value={pwd}
							required
						/>
						<button>Sign In</button>
					</form>
					<p>
						Need an Account?
						<br />
						<span className="line">
							<a href="#">Sign Up</a>
						</span>
					</p>
				</section>
			)}
		</>
	);
};

export default Login;

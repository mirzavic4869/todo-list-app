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
	return (
		<section>
			<p
				ref={errRef}
				className={errMsg ? "errMsg" : "offscreen"}
				aria-live="assertive"
			>
				{errMsg}
			</p>
			<h1>Sign In</h1>
			<form>
				<label htmlFor="username">
					Username
					<input
						type="text"
						id="username"
						ref={useRef}
						autoComplete="off"
						onChange={(e) => setUser(e.value.target)}
						value={user}
						required
					/>
				</label>
				<label htmlFor="username">
					Password
					<input
						type="password"
						id="password"
						onChange={(e) => setPwd(e.value.target)}
						value={pwd}
						required
					/>
				</label>
			</form>
		</section>
	);
};

export default Login;

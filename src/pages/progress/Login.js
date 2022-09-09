import React from 'react';

function Login() {
	const login = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			Login
			<form onSubmit={login}>
				<label htmlFor="username">Username</label>
				<input type="text" name="username"></input>
				<br />
				<label htmlFor="email">Email</label>
				<input type="text" name="email"></input>
				<br />
				<label htmlFor="password">Password</label>
				<input type="text" name="password"></input>
				<br />
				<button type="submit">Log In</button>
			</form>
		</div>
	);
}

export default Login;

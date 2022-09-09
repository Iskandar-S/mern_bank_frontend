import { useNavigate } from 'react-router-dom';
import { signup } from '../../services/progress/auth-api';

function Signup() {
	const nav = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newAccount = {
			userName: e.target.username.value,
			email: e.target.email.value,
			password: e.target.password.value,
			confirmPassword: e.target.confirmPassword.value,
		};
		signup(newAccount);
	};

	return (
		<div>
			Signup
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input type="text" name="username"></input>
				<br />
				<label htmlFor="email">Email</label>
				<input type="text" name="email"></input>
				<br />
				<label htmlFor="password">Password</label>
				<input type="text" name="password"></input>
				<br />
				<label htmlFor="confirmPassword">Confirm Password</label>
				<input type="text" name="confirmPassword"></input>
				<br />
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default Signup;

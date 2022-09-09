import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

export async function signup(newUser) {
	try {
		const url = `${baseUrl}/signup`;
		const response = await axios.post(url, newUser);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function login(user) {
	try {
		const url = `${baseUrl}/login`;
		const response = await axios.post(url, user);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

export async function logout() {
	try {
		const url = `${baseUrl}/logout`;
		const response = await axios.post(url);
		return response.data;
	} catch (e) {
		console.error(e);
	}
}

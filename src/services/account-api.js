import axios from 'axios';
const baseUrl = `http://localhost:3001/api/accounts`;

export async function getAccounts() {
	try {
		const url = baseUrl;
		const response = await axios.get(url);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function showAccount(id) {
	try {
		const url = `${baseUrl}/${id}`;
		const response = await axios.get(url);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function createAccount(newAccount) {
	try {
		const url = baseUrl;
		const response = await axios.post(url, newAccount);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function updateAccount(id, updatedAccount) {
	try {
		const url = `${baseUrl}/${id}`;
		const response = await axios.put(url, updatedAccount);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function deleteAccount(id) {
	try {
		const url = `${baseUrl}/${id}`;
		axios.delete(url);
		// return response.data;
	} catch (err) {
		console.error(err);
	}
}

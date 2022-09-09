import axios from 'axios';
const baseUrl = `http://localhost:3001/api/transactions`;

export async function getTransactions() {
	try {
		const url = baseUrl;
		const response = await axios.get(url);
		return response.data;
	} catch (err) {
		console.error(err);
	}
}

export async function updateTransaction(id, updatedTransaction) {
	try {
		const url = `${baseUrl}/${id}`;
		await axios.put(url, updatedTransaction);
	} catch (err) {
		console.error(err);
	}
}

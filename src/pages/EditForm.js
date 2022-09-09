import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { showAccount, updateAccount } from '../services/account-api';

function UpdateForm() {
	const { id } = useParams();
	const nav = useNavigate();
	const [account, setAccount] = useState(null);

	useEffect(() => {
		showAccount(id).then((res) => setAccount(res));
	}, [id]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const updatedAccount = {
			type: e.target.type.value,
			description: e.target.description.value,
			category: e.target.category.value,
		};
		updateAccount(id, updatedAccount);
		nav(`/${id}`);
	};

	return (
		account && (
			<div className="container mt-5">
				<h4>Edit Account</h4>
				<form onSubmit={handleSubmit}>
					<div className="mt-4 mb-1">
						<label htmlFor="type" className="form-label">
							Type
						</label>
						<select
							htmlFor="category"
							className="form-select"
							name="type"
							aria-label="type"
							defaultValue={account.type}>
							<option value="debit">Debit</option>
							<option value="credit">Credit</option>
						</select>
					</div>
					<div className="mb-1">
						<label htmlFor="description" className="form-label">
							Description
						</label>
						<input
							type="text"
							name="description"
							className="form-control"
							defaultValue={account.description}
						/>
					</div>
					<div class="mb-1">
						<label htmlFor="category" className="form-label">
							Category
						</label>
						<select
							htmlFor="category"
							className="form-select"
							name="category"
							aria-label="category"
							defaultValue={account.category}>
							<option value="personal">Personal</option>
							<option value="business">Business</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary mt-4 w-100">
						Update
					</button>
				</form>
			</div>
		)
	);
}

export default UpdateForm;

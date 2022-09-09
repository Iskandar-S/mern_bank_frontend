import { useNavigate } from 'react-router-dom';
import { createAccount } from '../services/account-api';

function CreateForm() {
	const nav = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newAccount = {
			type: e.target.type.value,
			description: e.target.description.value,
			balance: e.target.balance.value,
			category: e.target.category.value,
		};
		createAccount(newAccount);
		nav(`/main`);
	};

	return (
		<div className="container mt-5">
			<h4>Open Account</h4>
			<form onSubmit={handleSubmit}>
				<div className="mt-4 mb-1">
					<label htmlFor="type" className="form-label">
						Type
					</label>
					<select
						htmlFor="category"
						className="form-select"
						name="type"
						aria-label="type">
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
					/>
				</div>
				<div className="mb-1">
					<label htmlFor="balance" className="form-label">
						Balance
					</label>
					<input
						type="number"
						name="balance"
						className="form-control"
					/>
				</div>
				<div className="mb-1">
					<label htmlFor="category" className="form-label">
						Category
					</label>
					<select
						htmlFor="category"
						className="form-select"
						name="category"
						aria-label="category">
						<option value="personal">Personal</option>
						<option value="business">Business</option>
					</select>
				</div>
				<button type="submit" className="btn btn-primary mt-4 w-100">
					Open
				</button>
			</form>
		</div>
	);
}

export default CreateForm;

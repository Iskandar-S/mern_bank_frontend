import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
	deleteAccount,
	showAccount,
} from '../../services/account-api';
import { getTransactions } from '../../services/transaction-api';
const dayjs = require('dayjs');

function Account() {
	const { id } = useParams();
	const nav = useNavigate();
	const [account, setAccount] = useState(null);
	const [transactions, setTransactions] = useState(null);

	useEffect(() => {
		showAccount(id).then((res) => setAccount(res));
		getTransactions().then((result) => setTransactions(result));
	}, [id, account]);

	const closeAccount = () => {
		deleteAccount(id);
		nav('/main');
	};

	return (
		account && (
			<div>
				<h3 className='mt-3'>
					{account.description} {account.type}
				</h3>
				<h3>
					Balance: <strong>${account.balance}</strong>
				</h3>
				<h3>{account.category}</h3>
				<p>Account number: {account.accountNumber}</p>
				<p>Routing number: {account.routingNumber}</p>
				<button
					type="button"
					className="btn btn-success m-2"
					onClick={() => {
						nav(`/${id}/edit`);
					}}>
					Edit Account
				</button>
				<button
					type="button"
					className="btn btn-danger m-2"
					onClick={closeAccount}>
					Close Account
				</button>
				<table className="table table-striped mt-3">
					<thead>
						<tr>
							<th scope="col">Posting date</th>
							<th scope="col">Description</th>
							<th scope="col">Type</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody>
						{transactions &&
							transactions
								.filter(
									(transaction) =>
										transaction.accountNumber ===
										account.accountNumber,
								)
								.map((transaction) => {
									return (
										<tr key={transaction._id}>
											<td>
												{transaction.cleared
													? dayjs(new Date(transaction.date)).format(
															'MM/DD/YYYY',
													  )
													: 'Processing'}
											</td>
											<td>{transaction.description}</td>
											<td>{transaction.type}</td>
											<td>
												{transaction.category.includes('Income')
													? `$${transaction.amount}`
													: `-$${transaction.amount}`}
											</td>
										</tr>
									);
								})}
					</tbody>
				</table>
			</div>
		)
	);
}

export default Account;

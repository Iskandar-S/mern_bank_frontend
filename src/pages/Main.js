import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccounts } from '../services/account-api';

function Main() {
	const [accounts, setAccounts] = useState(null);

	useEffect(() => {
		getAccounts().then((res) => setAccounts(res));
	}, []);

	return (
		<div>
			<div className="accordion" id="accordion">
				{accounts &&
					accounts.map((account, index) => {
						return (
							<div className="accordion-item" key={index}>
								<h2
									className="accordion-header"
									id={`heading${index}`}>
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target={`#collapse${index}`}
										aria-expanded="false"
										aria-controls={`collapse${index}`}>
										<strong>{account.description}</strong>
									</button>
								</h2>
								<Link key={account._id} to={`/${account._id}`}>
									<div
										id={`collapse${index}`}
										className="accordion-collapse collapse"
										aria-labelledby={`heading${index}`}>
										<div className="accordion-body">
											<h3>{account.card.number}</h3>
											<h3>
												{account.card.expirationDate.month < 10
													? String(
															account.card.expirationDate.month,
													  ).padStart(2, '0')
													: account.card.expirationDate.month}
												/{account.card.expirationDate.year}
											</h3>
											<p>Balance: ${account.balance}</p>
											<p>{account.type}</p>
										</div>
									</div>
								</Link>
							</div>
						);
					})}
				<Link to="/create">
					<div className="accordion-item">
						<h2 className="accordion-header" id="headingNew">
							{/* <button
							className="accordion-button"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseNew"
							aria-expanded="true"
							aria-controls="collapseNew"
              > */}
							Add Account
							{/* </button> */}
						</h2>
						<div
							id="collapseNew"
							className="accordion-collapse collapse show"
							aria-labelledby="headingNew">
							<div className="accordion-body">
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Main;

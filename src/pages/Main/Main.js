import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAccounts } from '../../services/account-api';
import './Main.css'

function Main() {
	const [accounts, setAccounts] = useState(null);
	const bgColors = [
		'secondary',
		'danger',
		'warning',
		'info',
		'light',
		'dark',
	];
	useEffect(() => {
		getAccounts().then((res) => setAccounts(res));
	}, [accounts]);

	return (
		<div>
			<h3 className="m-3 display-2">My Wallet</h3>
			<div className="accordion" id="accordion">
				{accounts &&
					accounts.map((account, index) => {
						return (
							<div
								className={`accordion-item text-bg-${bgColors[index]}`}
								key={index}>
								<h2
									className={`accordion-header text-bg-${bgColors[index]}`}
									id={`heading${index}`}>
									<button
										className={`accordion-button collapsed text-bg-${bgColors[index]}`}
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
										className={`accordion-collapse collapse text-bg-${bgColors[index]}`}
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
					<div className="accordion-item text-bg-success">
						<h2 className="accordion-header m-3" id="headingNew">
							Open Account
						</h2>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="60"
							height="60"
							fill="currentColor"
							className="bi bi-plus-circle m-3"
							viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
						</svg>
						<div
							id="collapseNew"
							className="accordion-collapse collapse show"
							aria-labelledby="headingNew">
							<div className="accordion-body"></div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Main;

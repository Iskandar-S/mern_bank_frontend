import React from 'react';

function Nav() {
	return (
		<nav className="px-4 py-2 navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/main">
					Bank
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="/main">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/about">
								About
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Login</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled">Signup</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Nav;

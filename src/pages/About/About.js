import './About.css';

const About = () => {
	return (
		<div className="container about p-4">
			<div>
				<h1 className="display-2 ">About</h1>
				<hr></hr>
			</div>
			<div className="about-content ">
				<h2 className="display-5">
					This Full Stack MERN App is part of Per Scholas projects.
				</h2>
				<h3 className="m-4">Mandatory To Pass:</h3>
				<ul>
					<li>
						A working full-stack application, built by learner, using
						the MERN stack:{' '}
						<strong>
							Node.js, MongoDB/Mongoose, Express and React
						</strong>
						. <i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						At least one model with full <strong>CRUD</strong>.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						Include <strong>at least one</strong> of the following
						features:
					</li>
					<ul>
						<li>
							Pull from a third party API - either client side with
							AJAX or server-side with an NPM:
						</li>
						<ul>
							<li>
								NPMs that work with an API: Twitter, Yelp, etc.
								Remember the <code>axios</code> module can make API
								calls server side to any URL.
							</li>
						</ul>
						<li>Have two models:</li>
						<ul>
							<li>
								Have two separate models that don't have to be
								related. <i className="twa twa-check-mark-button"></i>
							</li>
						</ul>
						<li>
							Use a CSS framework like Skeleton or Bootstrap.{' '}
							<i className="twa twa-check-mark-button"></i>
						</li>
					</ul>
					<li>
						<strong>Be deployed online</strong> and accessible to the
						public via
						<strong>Heroku</strong>.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						<strong>Use React Router</strong>.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<li>
						<strong>
							A <code>README.md</code> file
						</strong>{' '}
						with explanations of the technologies used, the approach
						taken, unsolved problems, user stories, and notes to
						yourself so you can come back to your project later in the
						course and be able to pick up your train of thought, etc.{' '}
						<i className="twa twa-check-mark-button"></i>
					</li>
					<ul>
						<li>
							Have a <strong>link to your hosted working app</strong>{' '}
							in the
							<code>README.md</code> file in your github repo.{' '}
							<i className="twa twa-check-mark-button"></i>
						</li>
					</ul>
				</ul>
			</div>
		</div>
	);
};

export default About;

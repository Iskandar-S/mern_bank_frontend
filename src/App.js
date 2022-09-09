import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import About from './pages/About/About';
import Account from './pages/Account/Account';
import CreateForm from './pages/CreateForm/CreateForm';
import EditForm from './pages/EditForm/EditForm';
import Main from './pages/Main/Main';

// for future development
// import Login from './components/progress/Login';
// import Signup from './components/progress/Signup';

function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Routes>
					<Route path="/main" element={<Main />} />
					<Route path="/create" element={<CreateForm />} />
					<Route path="/:id" element={<Account />} />
					<Route path="/:id/edit" element={<EditForm />} />
					<Route path="/about" element={<About />} />

					{/* for future development */}

					{/* <Route path="/signup" element={<Signup />} /> */}
					{/* <Route path="/login" element={<Login />} /> */}
				</Routes>
			</Router>
		</div>
	);
}

export default App;

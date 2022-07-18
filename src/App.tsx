import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';

import { Home, NotFound } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

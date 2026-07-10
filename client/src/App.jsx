import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './shared/components/layoyts/DefaultLayout';
import { ErrorLayout } from './shared/components/layoyts/ErrorLayout';
import { Home } from './pages/Home/Home';
import { Catalog } from './pages/Catalog/Catalog';
import { NotFound } from './pages/NotFound';
import './assets/styles/App.scss';

function App() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
			</Route>

			<Route element={<ErrorLayout />}>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

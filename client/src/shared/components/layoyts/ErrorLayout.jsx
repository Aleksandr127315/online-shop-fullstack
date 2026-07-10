import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import '../../../assets/styles/App.scss';

export const ErrorLayout = ({ children }) => {
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

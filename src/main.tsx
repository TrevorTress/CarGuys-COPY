import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './shell/Header';
import Footer from './shell/Footer';
import Router from './Router';
import GlobalStyles from './style';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<GlobalStyles />
		<Header />
		<Router />
		<Footer />
	</BrowserRouter>
);

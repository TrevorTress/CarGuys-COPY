import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Hero from './Hero';
import GlobalStyles from './style';
import Application from './Application';
import OurClients from './OurClients';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles />
		<Header />
		<Hero />
		<Application />
		<OurClients />
	</>
);

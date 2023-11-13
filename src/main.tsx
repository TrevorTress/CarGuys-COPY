import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import GlobalStyles from './style';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<>
		<GlobalStyles />
		<Header />
	</>
);

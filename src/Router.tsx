import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import FindJob from './FindJob';

const HPOTRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/find-a-job" element={<FindJob />} />
		</Routes>
	);
};
export default HPOTRouter;

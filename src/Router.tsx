import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';
import Application from './Application';
import OurClients from './OurClients';

const HPOTRouter = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<>
						<Hero />
						<Application />
						<OurClients />
					</>
				}
			/>
			<Route path="/find-a-job" element={<h1>WIP</h1>} />
		</Routes>
	);
};
export default HPOTRouter;

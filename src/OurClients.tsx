import styled from 'styled-components';

import Group1 from './assets/GROUP1.webp';
import TonyT from './assets/TONYT.webp';
import MikeTerry from './assets/MIKE-TERRY.webp';
import Carite from './assets/CARITE.webp';
import WinnersCircle from './assets/WINNERS-CIRCLE.webp';
import Perkins from './assets/PERKINS-MOTORS.webp';

const OurClients: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<h2>OUR CLIENTS</h2>
			<p>We have helped 100's of dealerships & Automotive groups to consistently find qualified candidates every single month</p>

			<table>
				<tr>
					<td>
						<img src={Group1} />
					</td>
					<td>
						<img src={TonyT} />
					</td>
					<td>
						<img src={MikeTerry} />
					</td>
				</tr>
				<tr>
					<td>
						<img src={Carite} />
					</td>
					<td>
						<img src={WinnersCircle} />
					</td>
					<td>
						<img src={Perkins} />
					</td>
				</tr>
			</table>
		</div>
	);
};

export default styled(OurClients)`
	margin: 0 auto;
	width: 70%;
	text-align: center;

	& h2 {
		margin: 2rem;
	}

	& p {
		font-size: 1.4rem;
	}

	& table {
		margin: 0 auto;
		width: 70vw;
		& td {
			border: solid black 1px;
			width: 20vw;
			height: 35vh;
		}
	}
`;

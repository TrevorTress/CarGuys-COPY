import styled from 'styled-components';
import img from './assets/logo.webp';

import { FaUser } from 'react-icons/fa';

const Header: React.FC<X> = ({ className }) => {
	return (
		<>
			<header className={className}>
				<left>
					<img src={img} />
				</left>
				<right>
					<span>Home</span>
					<span>Find a Job</span>
					<span>Our Services</span>
					<button className="dealer-portal-btn">Dealer Portal Login</button>
					<span>
						<FaUser /> Login
					</span>
				</right>
			</header>
		</>
	);
};

export default styled(Header)`
	/* background: pink; */
	width: 100vw;
	height: 14vh;
	display: flex;
	justify-content: space-between;
	padding: 0.75rem 2.75rem;

	& right {
		width: 55vw;
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	& .dealer-portal-btn {
		background: black;
		color: #fff;
		font-weight: 600;
		font-size: 1.2rem;
		padding: 1rem;
		border: none;
		transition: all 0.2s ease-in-out;

		&:hover {
			background: #3e434f;
		}
	}
`;

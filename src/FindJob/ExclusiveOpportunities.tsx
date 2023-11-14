import styled from 'styled-components';
import img from '../assets/ExOps.webp';
const ExclusiveOpportunities: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<left>
				<h1>
					Exclusive
					<br />
					Opportunities
				</h1>
				<h4>We do all of the recruiting for our dealership partners. Meaning, that the opportunities we have available are exclusively available through CarGuys Inc. Click below to get access to these opportunities Instantly.</h4>

				<button>Apply Now</button>
			</left>
			<right>
				<img src={img} />
			</right>
		</div>
	);
};

export default styled(ExclusiveOpportunities)`
	width: 100%;
	height: 60vh;
	display: flex;
	justify-content: space-between;

	& left {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		& button {
			background: #a8a8a8 !important;
			border: none;
			padding: 0.75rem 2.5rem;
			color: #000 !important;
			margin: 2rem;
		}
	}

	& h1 {
		font-size: 3.2rem;
		text-align: center;
	}

	& h4 {
		text-align: center;
		width: 30vw;
	}

	& img {
		height: 100%;
	}
`;

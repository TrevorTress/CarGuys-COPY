import styled from 'styled-components';

const Application: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<h1>Searching For A New Dealership Career?</h1>
			<h3>
				Click the button below to send us a confidential application
				<br />
				and our team will contact you
			</h3>
			<button>Start My Application</button>
			<p>*Only Takes 20 Seconds To Apply*</p>
		</div>
	);
};

export default styled(Application)`
	background: #c7c7c7;
	height: 36vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	& h1 {
		font-weight: 600;
	}

	& h3 {
		font-size: 1.5rem;
		font-weight: 400;
		padding: 0 5rem;
	}

	& button {
		background: #142026;
		color: #fff;
		padding: 0.75rem 1rem;
		margin: 1rem;
	}
`;

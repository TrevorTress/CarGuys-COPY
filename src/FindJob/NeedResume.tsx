import styled from 'styled-components';

const NeedResume: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<h1>Need a New Resume?</h1>
			<h3>Click below to get a new professional resume in only a few clicks</h3>
			<button>Get Started</button>
		</div>
	);
};

export default styled(NeedResume)`
	background: #c7c7c7;
	width: 100%;
	height: 40vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0 32%;

	& h1 {
		font-weight: 600;
	}

	& h3 {
		text-align: center;
	}

	& button {
		background: #142026;
		color: #fff;
		padding: 0.75rem 3rem;
		border: none;
		transition: all ease-in-out 0.25s;

		&:hover {
			background: #3e434f !important;
		}
	}
`;

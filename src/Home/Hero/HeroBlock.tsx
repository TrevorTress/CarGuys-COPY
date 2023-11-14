import styled from 'styled-components';

interface P extends X {
	heading: string;
	description: string;
	button: string;
}
const HeroBlock: React.FC<P> = ({ className, heading, description, button }) => {
	return (
		<div className={className}>
			<h2>I Need To</h2>
			<h3>{heading}</h3>
			<h4>{description}</h4>
			<button>{button}</button>
		</div>
	);
};

export default styled(HeroBlock)`
	background: #191a1e9d;
	height: 32vh;
	width: 16vw;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: solid #fff 1px;
	color: #fff;
	margin: 1rem;
	padding: 0.5rem 1rem;

	& h2 {
		font-size: 2rem !important;
	}

	& h3 {
		font-weight: 700;
	}

	& h4 {
		text-align: center;
		font-weight: 200;
		font-size: 1.25rem;
	}

	& button {
		position: absolute;
		bottom: -3vh;
		width: 80%;
		height: 6vh;
		font-weight: 700;
		font-size: 1.2rem;
		transition: all ease-in-out 0.25s;

		&:hover {
			background: #3e434f !important;
			border: none !important;
			color: #fff;
		}
	}
`;

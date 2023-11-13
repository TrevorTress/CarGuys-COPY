import styled from 'styled-components';

interface P extends X {
	heading: string;
	description: string;
	button: string;
}
const HeroBlock: React.FC<P> = ({ className, heading, description, button }) => {
	return (
		<div className={className}>
			<p>I Need To</p>
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
	padding: 1rem;

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
		bottom: -2vh;
		width: 80%;
		height: 5vh;
		font-weight: 700;
		font-size: 1.2rem;
	}
`;

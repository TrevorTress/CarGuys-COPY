import styled from 'styled-components';

interface P extends X {
	title: string;
	description: string;
	button: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	img: any;
	full?: boolean;
}
const HeroBlock: React.FC<P> = ({ className, title, description, button, img, full }) => {
	return (
		<div className={className} style={{ background: `url(${img})`, width: full ? '100%' : '', justifyContent: full ? 'center' : '' }}>
			<mask />
			<content>
				<h2>{title}</h2>
				<h3>{description}</h3>
				<button>{button}</button>
			</content>
		</div>
	);
};

export default styled(HeroBlock)`
	background-size: cover !important;
	height: 70vh;
	width: 25%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: solid #fff 1px;
	color: #fff;
	padding: 1rem 3.5rem;

	& content {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: center;

		& h2 {
			font-size: 3.4rem;
			font-size: 900;
			text-align: center;
		}

		& h3 {
			font-size: 1.4rem;
			font-weight: 300;
			text-align: center;
			margin: 1rem;
		}

		& button {
			width: 15vw;
			height: 6vh;
			font-weight: 700;
			font-size: 1.2rem;
			transition: all ease-in-out 0.25s;
			border: none;

			&:hover {
				background: #3e434f !important;
				border: none !important;
				color: #fff;
			}
		}
	}

	& mask {
		position: absolute;
		top: 0;
		background: #061c2dad;
		width: 100%;
		height: 100%;
	}
`;

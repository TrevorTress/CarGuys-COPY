import styled from 'styled-components';
import bg from '../../assets/HOME-BG.webp';
import HeroBlock from './HeroBlock';

const Hero: React.FC<X> = ({ className }) => {
	return (
		<>
			<section className={className} style={{ background: `url(${bg})` }}>
				<mask />
				<div className="content">
					<h1>Welcome To CarGuys Inc.</h1>
					<h2>America's #1 Automotive Recruiting Agency</h2>

					<div className="hero-blocks">
						<HeroBlock heading="Fill a Position" description="Learn More About Our Recruiting Services" button="FILL A POSITION NOW" />
						<HeroBlock heading="Find a Job" description="Learn More About How We Can Assist You With Finding Your Next Career" button="FIND A JOB NOW" />
						<HeroBlock heading="Create A Resume" description="Learn More About Our Resume Builder Website" button="CREATE A RESUME" />
						<HeroBlock heading="Send My Resume" description="Need To Apply Confidentially? Click Below To Send Us Your Resume" button="UPLOAD MY RESUME" />
					</div>
				</div>
			</section>
		</>
	);
};

export default styled(Hero)`
	position: relative;
	height: 72vh;
	width: 100%;
	background-size: cover !important;

	& mask {
		display: block;
		position: absolute;
		background: #061c2dad;
		width: 100%;
		height: 72vh;
	}

	& .content {
		position: relative;
		z-index: 2;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;

		& h1 {
			font-weight: 700;
			color: #fff;
			margin: 1rem;
			font-size: 3.5rem;
		}
		& h2 {
			color: #fff;
			font-weight: 200;
			margin: 1rem;
			font-size: 3.5rem;
		}

		& .hero-blocks {
			display: flex;

			& :nth-child(even) {
				& button {
					background: #000;
					color: #fff;
					border: solid #fff 1px;
				}
			}
		}
	}
`;

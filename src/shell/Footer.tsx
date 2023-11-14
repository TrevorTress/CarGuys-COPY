import styled from 'styled-components';
import img from '../assets/logo.webp';
import { Link } from 'react-router-dom';

import { FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<img src={img} />
			<div className="footer-list">
				<h5>Navigation</h5>
				<Link to="/">Home</Link>
				<Link to="/">Job Seekers</Link>
				<Link to="/">Contact Us</Link>
			</div>

			<div className="footer-list">
				<h5>Job Seekers</h5>
				<Link to="/">Home</Link>
				<Link to="/">Job Seekers</Link>
				<Link to="/">Contact Us</Link>
				<Link to="/">
					Contact Recruiting:
					<br />
					616-551-1596
				</Link>
			</div>

			<div className="footer-list">
				<h5>Employers</h5>
				<Link to="/">Home</Link>
				<Link to="/">Candidate Dashboard Login</Link>
				<Link to="/">
					Contact Sales:
					<br />
					248-617-2631
				</Link>
				<Link to="/">
					Contact Recruiting Support:
					<br />
					616-551-1596
				</Link>
				<Link to="/">Terms of Service</Link>
			</div>
			<div className="footer-list">
				<h5>Follow Us</h5>
				<FaYoutube size={25} />
				<FaFacebook size={25} />
			</div>

			<div className="bottom">© 2023 by Car Guys Inc.</div>
		</div>
	);
};

export default styled(Footer)`
	height: 70vh;
	width: 100%;
	display: flex;
	align-items: start;
	justify-content: center;
	position: relative;
	padding-top: 10rem;

	& .footer-list {
		display: block;
		margin: 1rem;

		& a {
			display: block;
			color: #000;
			margin: 1rem;
		}

		& svg {
			margin: 1rem;
		}
	}

	& .bottom {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		bottom: 0;
		width: 100%;
		height: 4vh;
		background: black;
		color: #fff;
		font-size: 0.8rem;
	}
`;

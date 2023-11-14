import styled from 'styled-components';
import JobBlock from './JobBlock';

import BG1 from '../assets/JOB-BG1.webp';
import BG2 from '../assets/JOB-BG2.webp';
import BG3 from '../assets/JOB-BG3.webp';
import BG4 from '../assets/JOB-BG4.webp';
import BG5 from '../assets/JOB-BG5.webp';
import NeedResume from './NeedResume';
import ExclusiveOpportunities from './ExclusiveOpportunities';

const FindJob: React.FC<X> = ({ className }) => {
	return (
		<div className={className}>
			<JobBlock title="Search Jobs Now" description="Click below to search jobs nationwide using our automotive industry exclusive job board carguysnation.com" button="Search Jobs Now" img={BG1} />
			<JobBlock title="Create a New Resume" description="Click below to create a new professional resume in only a few clicks" button="Create My Resume Now" img={BG2} />
			<JobBlock title="Have a professional review your resume" description="Have one of our professionals review your resume, offer enhancements, & suggestions that Dealerships are looking for" button="Get Started Now" img={BG3} />
			<JobBlock title="Interview Coaching" description="Receive a coaching session on dealership interview techniques from a 30 year veteran of the business who knows what dealerships are looking for!" button="Get Started Now" img={BG4} />
			<JobBlock title="Automotive Job Seekers" description="CarGuys Inc. Was founded by Adam J. Hayford & Austin Hayford to help professionals advance their career. Whether you are currently in the automotive industry or looking for a new career. Our team of recruiting experts is dedicated to helping you. Click below to get started today!" button="Start My Application" img={BG5} full />

			<NeedResume />
			<ExclusiveOpportunities />
		</div>
	);
};

export default styled(FindJob)`
	height: fit-content;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& :nth-child(odd) {
		& button {
			background: #142026;
			color: #fff;
		}
	}
`;

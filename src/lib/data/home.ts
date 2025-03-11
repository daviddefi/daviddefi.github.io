import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName},`,
	description:
		'I am a Full-Stack Developer with expertise in designing, developing, and optimizing software solutions across various platforms. My proficiency spans web and mobile development, database management, AI/ML, cybersecurity, DevOps, and system architecture.',
	links: [
		{ label: 'Email', href: 'mailto:daviddao.upwork@gmail.com', icon: 'i-carbon-at' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;

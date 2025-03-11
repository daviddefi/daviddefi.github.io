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
		'I am a Senior Engineering Manager leading a full-stack development team. With extensive experience in web, mobile, and enterprise solutions, I guide my team in delivering high-quality software across various platforms. Our expertise spans modern technologies including AI/ML, cloud architecture, and DevOps practices.',
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

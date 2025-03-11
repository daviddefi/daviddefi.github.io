import Assets from './assets';
import { getSkills } from './skills';
import type { Project, Screenshot } from './types';

const items: Array<Project> = [
	{
		slug: 'fowi-dating',
		color: '#ff6b6b',
		description: 'A dating and friendship app with features like location services, swiping, matching, chat functionality, and blog writing capability.',
		shortDescription: 'Modern dating and friendship app with location-based matching and chat features.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.FowiDating,
		screenshots: [
			{ src: '/images/projects/fowi-dating/fowi-dating-1.jpg', label: 'FOWI DATING Main Screen' },
			{ src: '/images/projects/fowi-dating/fowi-dating-2.jpg', label: 'Profile View' },
			{ src: '/images/projects/fowi-dating/fowi-dating-3.jpg', label: 'Chat Interface' },
			{ src: '/images/projects/fowi-dating/fowi-dating-4.jpg', label: 'Match Screen' }
		],
		name: 'FOWI DATING',
		period: '2023-01 - Present',
		skills: getSkills('react-native', 'typescript', 'node', 'mongodb'),
		type: 'Mobile App'
	},
	{
		slug: 'ohrey',
		color: '#4ecdc4',
		description: 'A personal inventory management and online shopping experience application. Focused on buying and selling unused items to reduce waste and build sustainable fashion habits.',
		shortDescription: 'Sustainable fashion marketplace and inventory management system.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'Ohrey',
		period: '2023-03 - Present',
		skills: getSkills('flutter', 'dart', 'firebase', 'node'),
		type: 'Mobile App'
	},
	{
		slug: 'kb-hero',
		color: '#ffd93d',
		description: "A children's item exchange platform that creates a community for parents and children to develop self-management skills for their belongings. Features include buying, selling, and trading toys, books, and children's clothing to earn coins within the app.",
		shortDescription: "Children's item exchange platform with gamification elements.",
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'KB-HERO',
		period: '2023-06 - Present',
		skills: getSkills('react-native', 'typescript', 'node', 'postgresql'),
		type: 'Mobile App'
	},
	{
		slug: 'banking-app',
		color: '#45b7d1',
		description: 'Enterprise-grade Flutter application supporting bank staff in customer management and transaction approvals. Implemented secure biometric authentication, real-time MQTT protocol notifications, and offline operation capabilities.',
		shortDescription: 'Enterprise banking app with biometric auth and offline capabilities.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'Banking App',
		period: '2023-08 - Present',
		skills: getSkills('flutter', 'dart', 'spring', 'postgresql'),
		type: 'Enterprise Application'
	},
	{
		slug: 'field-verification',
		color: '#96ceb4',
		description: 'Full-stack solution combining Flutter mobile application with Spring Boot microservices for document verification. Implemented optical character recognition (OCR) for automated data extraction, geolocation verification, and secure document storage.',
		shortDescription: 'Document verification system with OCR and geolocation features.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'Field Verification System',
		period: '2023-09 - Present',
		skills: getSkills('flutter', 'spring-boot', 'kafka', 'redis'),
		type: 'Enterprise Solution'
	},
	{
		slug: 'digital-lending',
		color: '#88d8b0',
		description: 'Microservices-based loan processing platform built with Spring Boot, Spring Cloud, and Angular. Designed event-driven architecture with Kafka message broker, implemented workflow automation using state machines.',
		shortDescription: 'Microservices-based digital lending platform.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'Digital Lending System',
		period: '2023-10 - Present',
		skills: getSkills('spring-boot', 'angular', 'kafka', 'kubernetes'),
		type: 'Enterprise Platform'
	},
	{
		slug: 'ai-banking-assistant',
		color: '#6c5ce7',
		description: 'Conversational banking platform using Python and TensorFlow for NLP, combined with facial recognition for authentication. Developed chatbot functionality with intent recognition and integrated with banking APIs.',
		shortDescription: 'AI-powered banking assistant with facial recognition.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'AI Banking Assistant',
		period: '2023-11 - Present',
		skills: getSkills('python', 'tensorflow', 'opencv', 'flask'),
		type: 'AI Application'
	},
	{
		slug: 'facial-detection',
		color: '#a8e6cf',
		description: 'A Computer vision solution built with Python and OpenCV for automated employee attendance tracking. Implemented facial recognition algorithms with deep learning models, real-time processing of video streams.',
		shortDescription: 'AI-powered attendance tracking system using facial recognition.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'Facial Detection Attendance System',
		period: '2023-12 - Present',
		skills: getSkills('python', 'opencv', 'tensorflow', 'docker'),
		type: 'AI Solution'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;

import Assets from './assets';
import { getSkills } from './skills';
import type { Project, Screenshot } from './types';

// Store icons as inline SVG
const storeIcons = {
	android: '<svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="currentColor" d="M17.523 15.341a1.31 1.31 0 01-.924-.383.95.95 0 01-.393-.779.95.95 0 01.393-.779 1.31 1.31 0 01.924-.383c.347 0 .654.123.924.383.27.256.393.498.393.779s-.123.523-.393.779a1.31 1.31 0 01-.924.383zm-11.046 0a1.31 1.31 0 01-.924-.383.95.95 0 01-.393-.779.95.95 0 01.393-.779 1.31 1.31 0 01.924-.383c.347 0 .654.123.924.383.27.256.393.498.393.779s-.123.523-.393.779a1.31 1.31 0 01-.924.383zm11.415-6.458l1.864-2.589a.422.422 0 00.086-.437.515.515 0 00-.086-.164.438.438 0 00-.616-.091l-2.006 2.785c-1.528-.669-3.203-1.004-5.024-1.004s-3.496.335-5.024 1.004L5.134 5.602a.438.438 0 00-.616.091.515.515 0 00-.086.164.422.422 0 00.086.437l1.864 2.589C3.947 10.081 2.5 12.322 2.5 14.843v.957c0 .876.327 1.623.981 2.241.654.619 1.444.928 2.368.928h12.302c.924 0 1.714-.31 2.368-.928.654-.618.981-1.365.981-2.241v-.957c0-2.521-1.447-4.762-3.808-6.002z"/></svg>',
	ios: '<svg viewBox="0 0 24 24" class="w-5 h-5"><path fill="currentColor" d="M14.94 5.19A4.38 4.38 0 0016 2a4.38 4.38 0 00-3 1.52 4.09 4.09 0 00-1 3.07 3.59 3.59 0 002.94-1.4zm3.49 7.08c.17 1.87 1.6 6.73 5.07 6.73a2.47 2.47 0 01-2 1.25c-.84 0-1.5-.5-2.5-.5s-1.67.5-2.5.5a2.47 2.47 0 01-2-1.25 11.45 11.45 0 01-2-6.73c0-4.07 2.87-6 5.37-6a3.11 3.11 0 012.63 1.25c.83.87 1.17 1.87 1.17 3.25a3.25 3.25 0 01-1.17 2.25z"/></svg>'
};

const items: Array<Project> = [
	{
		slug: 'crm-system',
		color: '#6c5ce7',
		description: 'A customer relationship management (CRM) platform designed to streamline sales processes, manage customer interactions, and optimize business workflows. Features include lead tracking, automated follow-ups, deal pipelines, and customer support ticketing. Developed a user-friendly dashboard with real-time analytics and reporting tools. Integrated email and SMS notifications for enhanced customer engagement. The system syncs with Shopify to pull customer data, track orders, and manage e-commerce sales.',
		shortDescription: 'Comprehensive CRM platform with Shopify integration and real-time analytics.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.Unknown,
		name: 'CRM System',
		period: '2024-01 - Present',
		skills: getSkills('angular', 'spring-boot', 'mongodb', 'redis'),
		type: 'Enterprise Platform'
	},
	{
		slug: 'grillz-builder',
		color: '#ffd93d',
		description: 'A customization platform similar to Nike By You, but for custom grillz design. This interactive web application allows users to personalize their grillz with features like teeth shape selection, material choices (gold, silver, platinum), diamond placements, and custom engravings. The platform provides real-time 3D visualization of designs, dynamic pricing based on customizations, and seamless integration with Shopify for order processing. Users can experiment with different combinations, save their designs, and share them on social media.',
		shortDescription: 'Interactive 3D grillz customization platform inspired by Nike By You.',
		links: [{ to: '#', label: 'Private Repository' }],
		logo: Assets.GrillzBuilder,
		screenshots: [
			{ src: Assets.GrillzBuilderScreenshots.mainscreen.light, label: 'Main Screen' },
			{ src: Assets.GrillzBuilderScreenshots.preview1.light, label: '3D Preview' },
			{ src: Assets.GrillzBuilderScreenshots.preview2.light, label: '3D Preview' },
			{ src: Assets.GrillzBuilderScreenshots.preview3.light, label: '3D Preview' }
		],
		name: 'Grillz Builder',
		period: '2024-02 - Present',
		skills: getSkills('react', 'node', 'firebase', 'express'),
		type: 'Web Application'
	},
	{
		slug: 'open-banking',
		color: '#45b7d1',
		description: 'A comprehensive digital banking platform that enables users to register for banking services online using eKYC (electronic Know Your Customer) technology. The system supports a seamless and secure banking experience with features such as instant money transfers via QR codes, scheduled transactions, online savings account management, and real-time financial tracking. Transactions are secured with modern authentication methods that comply with national banking security standards. Additional utilities include referring friends, gifting, appointment scheduling, and stock information tracking.',
		shortDescription: 'Digital banking platform with eKYC and advanced security features.',
		links: [
			{ to: 'https://play.google.com/store/apps/details?id=ops.namabank.com.vn', label: '📱 Android' },
			{ to: 'https://apps.apple.com/us/app/nam-a-bank-open-banking/id1456997296?ls=1', label: '🍎 iOS' }
		],
		logo: Assets.OpenBanking,
		screenshots: [
			{ src: Assets.OpenBankingScreenshots.mainScreen.light, label: 'Main Screen' },
			{ src: Assets.OpenBankingScreenshots.profileView.light, label: 'Profile View' },
			{ src: Assets.OpenBankingScreenshots.chatInterface.light, label: 'Features Screen' },
			{ src: Assets.OpenBankingScreenshots.matchScreen.light, label: 'Transaction Screen' }
		],
		name: 'Open Banking Platform',
		period: '2024-03 - Present',
		skills: getSkills('flutter', 'spring-boot', 'mysql', 'firebase'),
		type: 'Enterprise Platform'
	},
	{
		slug: 'peopletrust',
		color: '#88d8b0',
		description: 'An e-commerce marketplace designed for the buying and selling of clean agricultural products, offering a transparent and reliable platform for farmers and consumers. The application includes advanced features such as secure transactions, real-time product updates, and user-friendly navigation. PeopleTrust connects buyers and sellers to promote sustainable agriculture and ethical sourcing.',
		shortDescription: 'Agricultural e-commerce platform connecting farmers and consumers.',
		links: [
			{ to: 'https://play.google.com/store/apps/details?id=com.trustsolutions.peopletrust', label: '📱 Android' },
			{ to: 'https://apps.apple.com/us/app/peopletrust-n%C3%B4ng-s%E1%BA%A3n-s%E1%BA%A1ch/id1485974563', label: '🍎 iOS' }
		],
		logo: Assets.PeopleTrust,
		name: 'PeopleTrust',
		period: '2024-04 - Present',
		skills: getSkills('flutter', 'node', 'mongodb', 'firebase'),
		type: 'E-commerce Platform'
	},
	{
		slug: 'fowi-dating',
		color: '#ff6b6b',
		description: 'A dating and friendship app with features like location services, swiping, matching, chat functionality, and blog writing capability.',
		shortDescription: 'Modern dating and friendship app with location-based matching and chat features.',
		links: [
			{ to: 'https://play.google.com/store/apps/details?id=com.qconnection.fowi', label: '📱 Android' },
			{ to: 'https://apps.apple.com/vn/app/fowi/id1572297184', label: '🍎 iOS' }
		],
		logo: Assets.FowiDating,
		screenshots: [
			{ src: Assets.FowiDatingScreenshots.mainScreen.light, label: 'Main Screen' },
			{ src: Assets.FowiDatingScreenshots.profileView.light, label: 'Profile View' },
			{ src: Assets.FowiDatingScreenshots.chatInterface.light, label: 'Chat Interface' },
			{ src: Assets.FowiDatingScreenshots.matchScreen.light, label: 'Match Screen' }
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
		links: [
			{ to: 'https://play.google.com/store/apps/details?id=com.qconnection.ohrey', label: '📱 Android' }
		],
		logo: Assets.Ohrey,
		screenshots: [
			{ src: Assets.OhreyScreenshots.mainScreen.light, label: 'Main Screen' },
			{ src: Assets.OhreyScreenshots.profileView.light, label: 'Profile View' },
			{ src: Assets.OhreyScreenshots.chatInterface.light, label: 'Chat Interface' },
			{ src: Assets.OhreyScreenshots.matchScreen.light, label: 'Match Screen' }
		],
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
		links: [
			{ to: 'https://apps.apple.com/vn/app/kb-hero/id1594876669?l=vi', label: '🍎 iOS' }
		],
		logo: Assets.KBHero,
		screenshots: [
			{ src: Assets.KBHeroScreenshots.mainScreen.light, label: 'Main Screen' }
		],
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

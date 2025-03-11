import type { Skill, SkillCategory } from './types';
import type { StringWithAutoComplete } from '@riadh-adrani/utils';
import { omit } from '@riadh-adrani/utils';
import Assets from './assets';
import svelteMd from './md/svelte.md?raw';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Mobile', slug: 'mobile' }),
	defineSkillCategory({ name: 'Backend', slug: 'backend' }),
	defineSkillCategory({ name: 'Frontend', slug: 'frontend' }),
	defineSkillCategory({ name: 'Relational Databases', slug: 'relational-db' }),
	defineSkillCategory({ name: 'NoSQL Databases', slug: 'nosql-db' }),
	defineSkillCategory({ name: 'Message Brokers & Event Streaming', slug: 'messaging' }),
	defineSkillCategory({ name: 'Cloud & DevOps', slug: 'devops' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => {
	return items.filter((it) => (slugs.length === 0 ? true : slugs.includes(it.slug)));
};

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

const title = 'Skills';

const items = [
	defineSkill({
		slug: 'flutter',
		color: 'blue',
		description: 'Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, desktop, and embedded devices from a single codebase.',
		logo: Assets.Flutter,
		name: 'Flutter (Dart)',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'kotlin',
		color: 'purple',
		description: 'Kotlin is a modern programming language that makes developers happier. Concise, safe, interoperable with Java and other languages.',
		logo: Assets.Kotlin,
		name: 'Kotlin',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'swift',
		color: 'orange',
		description: 'Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.',
		logo: Assets.Swift,
		name: 'Swift',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'ionic',
		color: 'blue',
		description: 'Ionic is an open source mobile UI toolkit for building high quality, cross-platform native and web app experiences.',
		logo: Assets.Ionic,
		name: 'Ionic',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'react-native',
		color: 'blue',
		description: 'React Native lets you create truly native apps and doesn't compromise your users' experiences.',
		logo: Assets.ReactNative,
		name: 'React Native',
		category: 'mobile'
	}),
	defineSkill({
		slug: 'java',
		color: 'red',
		description: 'Java with Spring Boot and Spring Cloud for building scalable microservices and cloud-native applications.',
		logo: Assets.Java,
		name: 'Java (Spring Boot, Spring Cloud)',
		category: 'backend'
	}),
	defineSkill({
		slug: 'python',
		color: 'blue',
		description: 'Python is a programming language that lets you work quickly and integrate systems more effectively.',
		logo: Assets.Python,
		name: 'Python',
		category: 'backend'
	}),
	defineSkill({
		slug: 'angular',
		color: 'red',
		description: 'Angular is a platform for building mobile and desktop web applications.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'react',
		color: 'blue',
		description: 'React is a JavaScript library for building user interfaces.',
		logo: Assets.ReactJs,
		name: 'React',
		category: 'frontend'
	}),
	defineSkill({
		slug: 'oracle',
		color: 'red',
		description: 'Oracle Database is a multi-model database management system.',
		logo: Assets.Oracle,
		name: 'Oracle',
		category: 'relational-db'
	}),
	defineSkill({
		slug: 'mysql',
		color: 'blue',
		description: 'MySQL is an open-source relational database management system.',
		logo: Assets.MySQL,
		name: 'MySQL',
		category: 'relational-db'
	}),
	defineSkill({
		slug: 'postgresql',
		color: 'blue',
		description: 'PostgreSQL is a powerful, open source object-relational database system.',
		logo: Assets.PostgreSQL,
		name: 'PostgreSQL',
		category: 'relational-db'
	}),
	defineSkill({
		slug: 'mongodb',
		color: 'green',
		description: 'MongoDB is a general purpose, document-based, distributed database.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'nosql-db'
	}),
	defineSkill({
		slug: 'redis',
		color: 'red',
		description: 'Redis is an open source, in-memory data structure store, used as a database, cache, and message broker.',
		logo: Assets.Redis,
		name: 'Redis',
		category: 'nosql-db'
	}),
	defineSkill({
		slug: 'kafka',
		color: 'black',
		description: 'Apache Kafka is an open-source distributed event streaming platform.',
		logo: Assets.Kafka,
		name: 'Kafka',
		category: 'messaging'
	}),
	defineSkill({
		slug: 'activemq',
		color: 'purple',
		description: 'Apache ActiveMQ is a message broker and integration patterns server.',
		logo: Assets.ActiveMQ,
		name: 'ActiveMQ',
		category: 'messaging'
	}),
	defineSkill({
		slug: 'docker',
		color: 'blue',
		description: 'Docker is a platform for developing, shipping, and running applications in containers.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	}),
	defineSkill({
		slug: 'kubernetes',
		color: 'blue',
		description: 'Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications.',
		logo: Assets.Kubernetes,
		name: 'Kubernetes',
		category: 'devops'
	}),
	defineSkill({
		slug: 'prometheus',
		color: 'orange',
		description: 'Prometheus is an open-source systems monitoring and alerting toolkit.',
		logo: Assets.Prometheus,
		name: 'Prometheus',
		category: 'devops'
	}),
	defineSkill({
		slug: 'grafana',
		color: 'orange',
		description: 'Grafana is the open source analytics & monitoring solution for every database.',
		logo: Assets.Grafana,
		name: 'Grafana',
		category: 'devops'
	}),
	defineSkill({
		slug: 'git',
		color: 'orange',
		description: 'Git is a free and open source distributed version control system.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devops'
	}),
	defineSkill({
		slug: 'jenkins',
		color: 'red',
		description: 'Jenkins is an open source automation server for CI/CD.',
		logo: Assets.Jenkins,
		name: 'Jenkins',
		category: 'devops'
	}),
	defineSkill({
		slug: 'maven',
		color: 'orange',
		description: 'Apache Maven is a software project management and comprehension tool.',
		logo: Assets.Maven,
		name: 'Maven',
		category: 'devops'
	})
] as const;

const SkillsData = {
	title,
	items
};

export default SkillsData;

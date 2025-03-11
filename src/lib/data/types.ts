import type { Color } from './colors';

export type Icon = `i-carbon-${string}`;

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube'
}

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = { light: string; dark: string };

export type Screenshot = {
	src: string;
	label: string;
};

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<Screenshot>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface Experience<S extends string = string> extends Item<S> {
	company: string;
	title: string;
	period: string;
	description: string;
}

export interface Project<S extends string = string> extends Item<S> {
	name: string;
	description: string;
	period: string;
	color: string;
	type: string;
	skills: Array<Skill>;
	links?: Array<Link>;
}

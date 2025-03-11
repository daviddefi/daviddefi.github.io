const firstName = 'David';
const lastName = 'D.';
const suffix = 'Portfolio';
const defaultTheme = 'light' as const;

const BaseData = {
	firstName,
	lastName,
	suffix,
	defaultTheme,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;

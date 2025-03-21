import { base } from '$app/paths';

const url = (file: string) => `${base}/logos/${file}`;

const asset = (lightFilename: string, darkFilename = lightFilename) => {
	return { light: url(lightFilename), dark: url(darkFilename) };
};

const Assets = {
	AWS: asset('aws.svg'),
	Bootstrap: asset('bootstrap.svg'),
	C: asset('c.svg'),
	Cpp: asset('cpp.svg'),
	Celery: asset('celery.svg'),
	Django: asset('django.svg'),
	FastApi: asset('fastapi'),
	Flask: asset('flask.svg'),
	Go: asset('go.svg'),
	Kafka: asset('kafka.svg'),
	Neo4j: asset('neo4j.svg'),
	Nginx: asset('nginx.svg'),
	Numpy: asset('numpy.svg'),
	Pandas: asset('pandas.svg'),
	RabbitMQ: asset('rabbitmq.svg'),
	Rust: asset('rust.svg', 'rust-dark.png'),
	Scrapy: asset('scrapy.png'),
	Selenium: asset('selenium.svg'),
	Docker: asset('docker.svg'),
	Kubernetes: asset('kubernetes.svg'),
	Csharp: asset('csharp.svg'),
	Xamarin: asset('xamarin.svg'),
	TypeScript: asset('ts.png'),
	VueJs: asset('vue.png'),
	ReactJs: asset('react.svg'),
	Dart: asset('dart.png'),
	Kotlin: asset('kotlin.png'),
	Python: asset('python.png'),
	NodeJs: asset('node.png'),
	Deno: asset('deno.svg'),
	Svelte: asset('svelte.svg'),
	ExpressJs: asset('express.png'),
	JavaScript: asset('js.png'),
	Fastify: asset('fastify.svg', 'fastify-dark.png'),
	NestJs: asset('nest.svg'),
	Quasar: asset('quasar.svg'),
	SolidJs: asset('solid.svg'),
	Electron: asset('electron.png'),
	Flutter: asset('flutter.svg'),
	Java: asset('java.png'),
	AdonisJs: asset('adonis.png'),
	Android: asset('android.png'),
	Angular: asset('angular.png'),
	PostgreSQL: asset('postgres.png'),
	Firebase: asset('firebase.png'),
	Sass: asset('sass.png'),
	Unknown: asset('no-img.svg'),
	MongoDB: asset('mongodb.svg'),
	Redis: asset('redis.svg'),
	Tailwind: asset('tailwind.svg'),
	HTML: asset('html.svg'),
	Premiere: asset('premiere.svg'),
	Photoshop: asset('photoshop.svg'),
	CSS: asset('css.svg'),
	AfterEffects: asset('after-effects.svg'),
	Illustrator: asset('illustrator.svg'),
	Nuxt: asset('nuxt.png'),
	Vite: asset('vite.png'),
	Vitest: asset('vitest.svg'),
	Jest: asset('jest.png'),
	Unocss: asset('unocss.svg'),
	Ruvy: asset('ruvy.svg'),
	Postcss: asset('postcss.svg'),
	Swift: asset('swift.svg'),
	Ionic: asset('ionic.png'),
	ReactNative: asset('react.svg'),
	Oracle: asset('oracle.svg'),
	MySQL: asset('mysql.png'),
	ActiveMQ: asset('activemq.png'),
	Prometheus: asset('prometheus.svg'),
	Grafana: asset('grafana.svg'),
	Git: asset('git.png'),
	Jenkins: asset('jenkins.svg'),
	Maven: asset('maven.png'),
	// Project assets
	FowiDating: asset('projects/fowi-dating-logo.png'),
	FowiDatingScreenshots: {
		mainScreen: asset('projects/fowi-dating-1.jpg'),
		profileView: asset('projects/fowi-dating-2.jpg'),
		chatInterface: asset('projects/fowi-dating-3.jpg'),
		matchScreen: asset('projects/fowi-dating-4.jpg')
	},
	KBHero: asset('projects/KB-HERO-logo.png'),
	KBHeroScreenshots: {
		mainScreen: asset('projects/KB-HERO-1.jpg')
	},
	GrillzBuilder: asset('projects/grillz-builder-logo.jpg'),
	GrillzBuilderScreenshots: {
		mainscreen: asset('projects/grillz-builder-4.png'),
		preview1: asset('projects/grillz-builder-1.png'),
		preview2: asset('projects/grillz-builder-2.png'),
		preview3: asset('projects/grillz-builder-3.png')
	},
	Ohrey: asset('projects/ohrey-logo.jpg'),
	OpenBanking: asset('projects/open-banking-platform-logo.png'),
	OpenBankingScreenshots: {
		mainScreen: asset('projects/open-banking-platform-1.jpeg'),
		profileView: asset('projects/open-banking-platform-2.jpeg'),
		chatInterface: asset('projects/open-banking-platform-3.jpg'),
		matchScreen: asset('projects/open-banking-platform-4.png')
	},
	PeopleTrust: asset('projects/people-trust-logo.jpg'),
	PeopleTrustScreenshots: {
		mainScreen: asset('projects/people-trust-1.jpg')
	}
} as const;

export default Assets;

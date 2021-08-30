import Axle from '../dist/index';

// custom middleware
Axle.use((req, res) => {
	if (res.query['id']) {
		console.log(`ID: ${res.queryParam('id')}`);
	} else {
		console.log('Different URL, no ID found');
	}
});

// built-in middleware
Axle.use(Axle.middleware.timeTook());

// built-in middleware options
Axle.useOptions({
	...Axle.middlewareOptions.cors(),
	...Axle.middlewareOptions.kneepads(),
});

(async function test() {
	const res = await Axle.get('https://dog.ceo/api/breeds/image/random');
	const json = await res.json();

	console.log(json.message); // random dog url
})();

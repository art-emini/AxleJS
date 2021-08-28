import Axle from '../dist/index';

interface Schema {
	apiKey: string;
}

interface ResultSchema {
	foo: 'bar';
	bar: 'foo';
}

async function test() {
	// with data schema
	const res = await Axle.post<Schema>('https://someApi.com/api/test', {
		apiKey: 'someApiKey',
	});

	// expected result typings with json function
	const json = await res.json<ResultSchema>();

	console.log(json.foo, json.bar); // bar, foo
}

test();

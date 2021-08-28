import Axle from '../dist/index';

async function test() {
	// multiple fetches at a time
	const responses = await Axle.all([
		Axle.post('https://someApi.com/api/test', {
			apiKey: 'someApiKey',
		}),
		Axle.get('https://someApi.com/documentation'),
		Axle.delete('https://someApi.com/api/collection/15/1'),
		Axle.patch('https://someApi.com/api/collection/15/1?name=John%20Doe', {
			newName: 'John Smith',
		}),
		Axle.put(
			'https://someApi.com/api/collection/15/1?name=Maxwell%20Smith',
			{
				age: 41,
			}
		),
	]);

	responses.forEach(async (res) => {
		console.log(res.status, res.statusMessage, await res.json());
	});
}

test();

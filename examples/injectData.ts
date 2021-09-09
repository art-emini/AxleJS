import Axle from '../dist/index';

// inject into json results
Axle.inject({
	someInjectedData: 'injected',
});

// inject with middleware, check examples/useMiddleware.ts for more info
Axle.use((req, res) => {
	Axle.inject({ timeTook: res.timeTook });
});

(async () => {
	const res = await Axle.get('https://someApi.com/documentation');
	const json = await res.json();

	console.log(json.someInjectedData); // 'injected'
})();

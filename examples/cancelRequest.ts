import Axle from '../dist/index';

// setup cancel
const cancelMark = new Axle.cancelMark();
const cancelSignal = cancelMark.signal;

(async function test() {
	const json = await (
		await Axle.get('https://dog.ceo/api/breeds/image/random', {
			signal: cancelSignal,
		})
	).json();

	console.log(json.message); // dog image url

	// cancel with message, optional
	cancelMark.cancel('Canceled Request');
})();

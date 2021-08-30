import { AxleTypes } from '../index';
import AxleRequest from '../models/request';

export default async function head(
	url: string,
	options: AxleTypes.AxleOptions = {
		mode: 'cors',
		cache: 'default',
	}
) {
	try {
		const req = new AxleRequest('HEAD', url, undefined, options);
		const res = await req.run();
		return res;
	} catch (error) {
		console.error(error);
	}
}

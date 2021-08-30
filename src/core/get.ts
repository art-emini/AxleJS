import { AxleTypes } from '../index';
import AxleRequest from '../models/request';

export default async function get(
	url: string,
	options: AxleTypes.AxleOptions = {
		mode: 'cors',
		cache: 'default',
	}
) {
	const req = new AxleRequest('GET', url, undefined, options);
	const res = await req.run();
	return res;
}

import { AxleTypes } from '../index';
import AxleRequest from '../models/request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function deleteReq<t = Record<string, any> | FormData>(
	url: string,
	data?: t | undefined | null,
	options: AxleTypes.AxleOptions = {
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
	}
) {
	const req = new AxleRequest('DELETE', url, data, options);
	const res = await req.run();
	return res;
}

import { AxleTypes } from '../index';
import AxleRequest from '../models/request';
import AxleResponse from '../models/response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function patch<t = Record<string, any>>(
	url: string,
	data?: t | FormData | undefined | null,
	options: AxleTypes.AxleOptions = {
		mode: 'cors',
		cache: 'default',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
	}
): Promise<AxleResponse> {
	const req = new AxleRequest('PATCH', url, data, options);
	const res = await req.run();
	return res;
}

import { AxleTypes } from '../index';
import AxleRequest from '../models/request';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function put<t = Record<string, any>>(
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
	try {
		return new AxleRequest('PUT', url, data, options).response;
	} catch (error) {
		console.error(error);
	}
}

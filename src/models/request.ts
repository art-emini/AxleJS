import { AxleTypes } from '../index';
import handleStatus from '../utils/handleStatus';
import AxleResponse from './response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class AxleRequest<t = Record<string, any>> {
	private method: string;
	private url: string;
	private body: t | undefined | null;
	private options: AxleTypes.AxleOptions;

	public response: AxleResponse | undefined;

	constructor(
		method: string,
		url: string,
		body: t | undefined | null,
		options: AxleTypes.AxleOptions
	) {
		this.method = method.toUpperCase();
		this.url = url;
		this.body = body;
		this.options = options;

		this.response;
	}

	public async run() {
		const res = await fetch(this.url, {
			...this.options,
			method: this.method,
			body: JSON.stringify(this.body),
		});

		if (handleStatus(this.method, res.status, res.statusText)) {
			this.response = new AxleResponse(res);
			return this.response;
		}

		this.response = new AxleResponse(res);
		return this.response;
	}
}

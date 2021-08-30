/* Custom Request class / for code reusability */

import { __getMiddleware } from '../core/use';
import { __getMiddlewareOptions } from '../core/useOptions';
import { AxleTypes } from '../index';
import handleStatus from '../utils/handleStatus';
import isJSON from '../utils/isJSON';
import AxleResponse from './response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class AxleRequest<t = Record<string, any>> {
	public method: string;
	public url: string;
	public body: t | FormData | undefined | null;
	public options: AxleTypes.AxleOptions;

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

	// Fetches, returns Promise<AxleResponse>
	public async run() {
		// get any middleware options

		// merge into one object
		let middlewareOptions: AxleTypes.AxleOptions = {};
		__getMiddlewareOptions().forEach((option) => {
			middlewareOptions = { ...middlewareOptions, ...option };
		});

		// fetch body
		let fetchBody: t | FormData | string | undefined | null = this.body;

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		if (isJSON(fetchBody as Record<string, any>)) {
			fetchBody = JSON.stringify(this.body) as string;
		} else {
			fetchBody = this.body as FormData;
		}

		// fetch options
		const fetchOptions = {
			...this.options,
			method: this.method,
			body: fetchBody,
			...middlewareOptions,
		};

		const timeStart = performance.now();

		// fetch
		const res = await fetch(this.url, fetchOptions);

		const timeEnd = performance.now();

		// check if status is 400+, throws error and rejects promise if so
		if (handleStatus(this.method, res.status, res.statusText)) {
			this.response = new AxleResponse(res, timeStart, timeEnd);

			// reason is returned from handleStatus if not false
			Promise.reject(
				handleStatus(this.method, res.status, res.statusText)
			);

			return this.response;
		} else {
			this.response = new AxleResponse(res, timeStart, timeEnd);

			// run middleware
			__getMiddleware().forEach((cb) => {
				cb(this, this.response as AxleResponse);
			});

			return this.response;
		}
	}
}

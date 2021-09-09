// Class for converting Response to AxleResponse to supercharge fetch!

import { __getInjectedData } from '../core/inject';
import getQuery from '../utils/getQuery';
import queryParam from '../utils/queryParam';
import AxleHeaders from './headers';

// custom, extended Response class, extended from Fetch Response
export default class AxleResponse {
	private res: Response;
	private timeStart: number;
	private timeEnd: number;

	constructor(res: Response, timeStart: number, timeEnd: number) {
		this.res = res;
		this.timeStart = timeStart;
		this.timeEnd = timeEnd;
	}

	public async json<t = Record<string, unknown>>() {
		let json: t = await this.res.json();

		// get injected data

		const injectedData = __getInjectedData();

		// add injected data
		injectedData.forEach((data) => {
			json = {
				...json,
				...data,
			};
		});

		return json;
	}

	public async data() {
		const text = await this.res.text();
		return text;
	}

	public async body() {
		return (await this.res.body?.getReader().read())?.value;
	}

	public get bodyReader() {
		return this.res.body;
	}

	public get bodyUsed() {
		return this.res.bodyUsed;
	}

	public redirect(url: string | URL, ifStatusOk = true) {
		if (ifStatusOk) {
			if (this.res.ok) {
				location.replace(url.toString());
			}
		} else {
			location.replace(url.toString());
		}
	}

	// automatically redirect
	public finishRedirect() {
		if (this.res.headers.has('Location')) {
			const url = this.res.headers.get('Location');
			location.replace(
				url?.toString() ||
					(() => {
						console.error(
							'AxleJS: Unexpected error. Headers includes location but retrieved header is undefined or null. Defaulted to a blank string.'
						);
						return '';
					})()
			);
			return true;
		} else {
			console.error(
				'AxleJS: Cannot finish redirect. New Location Header ("Location") is not found.',
				`Location Header: ${this.res.headers.get('Location')}`
			);
			return null;
		}
	}

	public get status() {
		return this.res.status;
	}
	public get statusMessage() {
		return this.res.statusText;
	}

	public async blob() {
		const blob = await this.res.blob();
		return blob;
	}

	public get url() {
		return this.res.url;
	}

	public get query() {
		return getQuery(new URL(this.res.url).search);
	}
	public queryParam(name: string) {
		return queryParam(name, new URL(this.res.url).search);
	}

	public get headers() {
		return new AxleHeaders(this.res.headers);
	}

	public get timeTook() {
		return this.timeEnd - this.timeStart;
	}

	public get type() {
		return this.res.type;
	}

	public get basic() {
		return { ...this.res };
	}
}

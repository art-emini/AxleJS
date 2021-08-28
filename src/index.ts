import deleteReq from './core/delete';
import get from './core/get';
import patch from './core/patch';
import post from './core/post';
import put from './core/put';
import AxleCancelMark from './models/cancelMark';
import AxleResponse from './models/response';

export namespace AxleTypes {
	interface AxleHeaders {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
		'Content-Type'?: string;
	}

	export interface AxleOptions {
		mode?: 'no-cors' | 'cors' | 'same-origin';
		cache?:
			| 'no-cache'
			| 'default'
			| 'reload'
			| 'force-cache'
			| 'only-if-cached';
		credentials?: RequestCredentials;
		headers?: AxleHeaders;
		redirect?: 'manual' | 'follow' | 'error';
		referrerPolicy?:
			| 'no-referrer'
			| 'no-referrer-when-downgrade'
			| 'origin'
			| 'origin-when-cross-origin'
			| 'same-origin'
			| 'strict-origin'
			| 'strict-origin-when-cross-origin'
			| 'unsafe-url';
		body?: string;
		keepalive?: boolean;
		signal?: AbortSignal | null;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		window?: any;
		integrity?: string;
	}
}

const Axle = {
	post: post,
	get: get,
	delete: deleteReq,
	put: put,
	patch: patch,
	all: (promises: Promise<AxleResponse | undefined>[]) => {
		return Promise.all(promises);
	},
	cancelMark: AxleCancelMark,
};

export default Axle;

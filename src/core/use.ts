import { AxleTypes } from '../index';

const __axle_js_middleware: AxleTypes.AxleMiddleware[] = [];

// use middleware for AxleJS, such as certain settings for all requests, etc..
export default function use(cb: AxleTypes.AxleMiddleware) {
	return __axle_js_middleware.push(cb);
}

// gets the updated array of middleware(s)
export function __getMiddleware() {
	return __axle_js_middleware;
}

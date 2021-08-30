import { AxleTypes } from '../index';

const __axle_js_middleware_options: AxleTypes.AxleOptions[] = [];

// use / extend all of your requests' options
export default function useOptions(options: AxleTypes.AxleOptions) {
	return __axle_js_middleware_options.push(options);
}

// retrieve options
export function __getMiddlewareOptions() {
	return __axle_js_middleware_options;
}

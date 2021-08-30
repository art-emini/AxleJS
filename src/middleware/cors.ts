import { AxleTypes } from '../index';

// Built-in AxleMiddleware Options
export default function cors(): AxleTypes.AxleOptions {
	return {
		mode: 'cors',
		cache: 'default',
	};
}

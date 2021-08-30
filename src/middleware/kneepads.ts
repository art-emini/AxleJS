import { AxleTypes } from '../index';

// middleware options for protecting against accidentally sending credentials
export default function kneepads(): AxleTypes.AxleOptions {
	return {
		credentials: 'omit',
		referrer: '',
		referrerPolicy: 'no-referrer',
	};
}

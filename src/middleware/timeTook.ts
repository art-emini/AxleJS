import { AxleTypes } from '../index';
import AxleRequest from '../models/request';
import AxleResponse from '../models/response';

// Built-in AxleMiddleware
export default function timeTook(): AxleTypes.AxleMiddleware {
	return (req: AxleRequest, res: AxleResponse) => {
		console.log('Time Took: ' + res.timeTook + 'ms');
	};
}

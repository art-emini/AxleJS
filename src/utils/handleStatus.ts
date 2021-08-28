export default function handleStatus(
	method: string,
	status: number,
	statusMessage?: string
) {
	if (status >= 400) {
		if (statusMessage) {
			console.error(
				`${method.toUpperCase()}: Fetch return with error code ${status}. Status Message: "${statusMessage}"`
			);
		} else {
			console.error(`Fetch return with error ${status}`);
		}
		return true;
	} else {
		return false;
	}
}

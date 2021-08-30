export default function handleStatus(
	method: string,
	status: number,
	statusMessage?: string
) {
	// throw error if status is 400+
	// returns error message if true, returns false if false
	if (status >= 400) {
		if (statusMessage) {
			return `${method.toUpperCase()}: Fetch returned with error code ${status}. Status Message: "${statusMessage}"`;
		} else {
			return `Fetch returned with error ${status}`;
		}
	} else {
		return false;
	}
}

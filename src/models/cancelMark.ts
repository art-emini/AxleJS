export default class AxleCancelMark {
	private controller: AbortController;
	public signal: AbortSignal;

	constructor() {
		this.controller = new AbortController();
		this.signal = this.controller.signal;
	}

	public cancel(message?: string) {
		this.controller.abort();
		if (message) {
			console.error(message);
		}
	}
}

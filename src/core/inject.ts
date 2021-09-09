const __axle_js__inject_arr: Record<string, unknown>[] = [];

export default function inject(data: Record<string, unknown>) {
	return __axle_js__inject_arr.push(data);
}

export function __getInjectedData() {
	return __axle_js__inject_arr;
}

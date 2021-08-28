export default function queryParam(name: string, url: string) {
	const urlSearchParams = new URLSearchParams(url);

	if (urlSearchParams.has(name)) {
		return urlSearchParams.get(name);
	} else {
		return null;
	}
}

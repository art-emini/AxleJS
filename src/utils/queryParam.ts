export default function queryParam(name: string, url: string) {
	// gets a search query by name from a url
	const urlSearchParams = new URLSearchParams(url);

	if (urlSearchParams.has(name)) {
		return urlSearchParams.get(name);
	} else {
		return null;
	}
}

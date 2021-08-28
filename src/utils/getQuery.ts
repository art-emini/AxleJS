export default function getQuery(url: string) {
	const urlSearchParams = new URLSearchParams(url);
	const params = Object.fromEntries(urlSearchParams.entries());

	return params;
}

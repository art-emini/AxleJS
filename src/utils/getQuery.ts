export default function getQuery(url: string) {
	// gets the search query from url
	const urlSearchParams = new URLSearchParams(url);
	const params = Object.fromEntries(urlSearchParams.entries());

	return params;
}

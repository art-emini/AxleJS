// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function isJSON(json: Record<string, any>) {
	try {
		const jsonStr = JSON.stringify(json);
		JSON.parse(jsonStr);
		return true;
	} catch (error) {
		return false;
	}
}

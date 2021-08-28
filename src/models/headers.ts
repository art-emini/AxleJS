export default class AxleHeaders {
	private headers: Headers;

	constructor(headers: Headers) {
		this.headers = headers;
	}

	public append(name: string, value: string) {
		this.headers.append(name, value);
	}

	public delete(name: string) {
		if (this.has(name)) {
			this.headers.delete(name);
			return true;
		} else {
			return false;
		}
	}

	public deleteByValue(value: string) {
		const found = Object.keys(this.object()).find(
			(key) => this.object()[key] === value
		);
		if (found) {
			delete this.object()[found];
			return true;
		} else {
			return false;
		}
	}

	public get entries() {
		return this.headers.entries();
	}

	public get(name: string) {
		return this.headers.get(name);
	}

	public getByValue(value: string) {
		return Object.keys(this.object()).find(
			(key) => this.object()[key] === value
		);
	}

	public set(name: string, value: string, ifExists = false) {
		if (ifExists) {
			if (this.has(name)) {
				this.headers.set(name, value);
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	public has(name: string) {
		return this.headers.has(name);
	}

	public hasValue(value: string) {
		const values = this.valueArray();

		for (let i = 0; i < values.length; i++) {
			const item = values[i];
			if (item === value) {
				return true;
			} else {
				if (i !== values.length) {
					continue;
				} else {
					return false;
				}
			}
		}
	}

	public each(
		cb: <t = unknown>(name: string, value: string, index: number) => t
	) {
		const obj = this.object();
		Object.keys(obj).forEach((key, index) => {
			return cb(key, obj[key], index);
		});
	}

	public keys() {
		return this.headers.keys();
	}

	public values() {
		return this.headers.values();
	}

	public keyArray() {
		return [...this.keys()];
	}

	public valueArray() {
		return [...this.values()];
	}

	public object() {
		return Object.fromEntries(this.entries);
	}

	public get basic() {
		return { ...this.headers };
	}
}

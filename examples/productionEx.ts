// production example

// types
interface Result {
	status: number;
	statusMessage: string;
	message: string;
	sessionToken: string;
	regenerated: boolean;
}

// dependencies
import Axle from '../dist';

// constants
const form: HTMLFormElement = document.querySelector('#loginForm');
const formData = new FormData(form);

// setup
form.onsubmit = (e) => {
	e.preventDefault();

	loginUser();
};

Axle.use(Axle.middleware.timeTook());
Axle.useOptions(Axle.middlewareOptions.kneepads());
Axle.useOptions(Axle.middlewareOptions.cors());

// custom middleware to inject regenerated property into json
Axle.use((req, res) => {
	if (req.method === 'POST') {
		if (Boolean(res.queryParam('regenerateToken')) === true) {
			Axle.inject({
				regenerated: true,
			});
		} else {
			Axle.inject({
				regenerated: false,
			});
		}
	}
});

// Main

// loginUser function, makes post request to /api/login, sets sessionToken, and follows redirect
async function loginUser(regenerateToken = false) {
	const url = `https://example.com/api/login?regenerateToken=${regenerateToken}`;

	const res = await Axle.post(url, formData, {
		handleStatus: handleStatus,
	});
	const json = await res.json<Result>();

	console.log(json.message);

	// login session token
	localStorage.setItem('test-session-token', json.sessionToken);

	// if new token was generated
	if (json.regenerated) {
		console.log('New token.');
	}

	// follow redirect by Location header
	res.finishRedirect();
}

// custom handle status
// return true to throw error and reject or false to resolve and continue
function handleStatus(status: number, statusMessage: string) {
	if (status >= 500) {
		console.log(status, statusMessage);
		return true;
	} else {
		return false;
	}
}

import express from 'express';

export function onlyForRender() {
	const app = express();
	const port = process.env.PORT || 5000;

	app.get('/', (req, res) => {
		res.send('Express launched');
	});

	app.listen(port, () => {
		console.log('Express launched');
	});
}

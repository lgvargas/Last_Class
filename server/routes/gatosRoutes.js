const mongoose = require('mongoose');

const Gato = mongoose.model('gatos');

module.exports = (app) => {
	app.get('/api/gatos', async (req, res) => {
		const gatos = await Gato.find({});
		//console.log(gatos);
		res.send(gatos);
	});
};
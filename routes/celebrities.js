const router = require("express").Router();
const Celebrity = require("../models/Celebrity.js ")
/* GET home page */

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
		.then(celebritiesFromDb => {
			console.log(celebritiesFromDb)
			// render a view
			res.render('celebrities/index', {celebritiesFromDb: celebritiesFromDb })
		})
		.catch(err => next(err))
});

module.exports = router;

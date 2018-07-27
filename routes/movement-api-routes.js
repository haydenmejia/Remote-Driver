var db = require("../models");

module.exports = function (app) {
    app.get("/api/movement", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Movement.findAll({})
            .then(function (dbMovement) {
             res.json(dbMovement);
             console.log(dbMovement);
        });
    });

    app.post("/api/movement", function(req, res) {
        db.movement.create(req.body).then(function(dbMovement) {
          res.json(dbMovement);
        });
      });

}
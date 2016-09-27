(function() {
    app.get('/contact/list', function(req, res) {
        db.contactlist.find(function(err, doc) {
            res.json(doc);
        });
    });

    app.post('/contact/add', function(req, res) {
        db.contactlist.insert(req.body, function(err, doc) {
            res.json(doc);
        });
    });

    app.delete('/contact/remove/:id', function(req, res) {
        var id = req.params.id;
        db.contactlist.remove({ _id: mongojs.ObjectId(id) }, function(err, doc) {
            res.json(doc);
        });
    });

    app.get('/contact/edit/:id', function(req, res) {
        var id = req.params.id;
        db.contactlist.findOne({ _id: mongojs.ObjectId(id) }, function(err, doc) {
            res.json(doc);
        });
    });

    app.put('/contact/update/:id', function(req, res) {
        var id = req.params.id;
        delete req.body._id;
        var qry = {
    			query: { _id: mongojs.ObjectId(id)},
    			update: {$set: req.body},
    			new: true
			}
        db.contactlist.findAndModify(qry, function(err, doc) {
            res.json(doc);
        });
    });

})();

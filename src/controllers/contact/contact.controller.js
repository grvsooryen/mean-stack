var contactController = {
    listContact: listContact,
    addContact: addContact,
    removeContact: removeContact,
    editContact: editContact,
    updateContact: updateContact
};

function listContact(req, res) {
    db.contactlist.find(function (err, doc) {
        res.json(doc);
    });
}

function addContact(req, res) {
    db.contactlist.insert(req.body, function (err, doc) {
        res.json(doc);
    })
}

function removeContact(req, res) {
    var id = req.params.id;
    db.contactlist.remove({
        _id: mongojs.ObjectId(id)
    }, function (err, doc) {
        res.json(doc);
    });
}

function editContact(req, res) {
    var id = req.params.id;
    db.contactlist.findOne({
        _id: mongojs.ObjectId(id)
    }, function (err, doc) {
        res.json(doc);
    });
}

function updateContact(req, res) {
    var id = req.params.id;
    delete req.body._id;
    var qry = {
        query: {
            _id: mongojs.ObjectId(id)
        },
        update: {
            $set: req.body
        },
        new: true
    }
    db.contactlist.findAndModify(qry, function (err, doc) {
        res.json(doc);
    });
}
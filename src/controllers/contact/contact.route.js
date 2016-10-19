/*
Define All the routes of the controller in this file
*/
app
    .get('/contact/list', contactController.listContact)
    .post('/contact/add', contactController.addContact)
    .delete('/contact/remove/:id', contactController.removeContact)
    .get('/contact/edit/:id', contactController.editContact)
    .put('/contact/update/:id', contactController.updateContact);
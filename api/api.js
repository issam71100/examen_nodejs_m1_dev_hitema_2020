const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const v1 = express.Router();

const PeopleService = require('./people-service');
const peopleService = new PeopleService();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

// To be implemented!

// Get 
v1.get('/people', async (request, response) => {
    let filters = request.query;

    const peoples = await peopleService.getPeople(filters);
    response.send(peoples);
});



// Update People
v1.put("/people/:id", (request, response) => {
    const HTTP_STATUS_OK = 200;
    const HTTP_STATUS_BAD_REQUEST = 400;

    try {
      const id = request.params.id;
      const people = request.body;
      const updated_people_id = peopleService.updatePeople(id, people);
      return updated_people_id ? response.sendStatus(HTTP_STATUS_OK) : response.sendStatus(HTTP_STATUS_BAD_REQUEST);
    } catch (error) {
      response.sendStatus(HTTP_STATUS_BAD_REQUEST);
    }
  });





module.exports = app;

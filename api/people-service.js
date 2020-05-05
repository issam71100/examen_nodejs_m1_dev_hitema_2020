const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        // To be implemented!
        id = parseInt(id);

        this.peoples.filter(person => {
            if (person.id === id) {
                person = people;
                person.id = id
                people.id = id;
            }
        });

        fs.writeFile(__dirname + '/people.json', JSON.stringify(this.peoples), (error) => {
            if (error) throw error;
            console.log('Saved!');
        });

        return people.id;
    }

    getPeople(filters) {
        // To be implemenfilted!
        return this.filterArray(this.peoples, filters)
    }

    filterArray(array, filters) {
        const filterKeys = Object.keys(filters);
        return array.filter(item => {
            return filterKeys.every(key => {
                return filters[key] === item[key];
            });
        });
    }

}

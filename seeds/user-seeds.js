const { User } = require('../models');

const userData = [{
        username: 'Kirk',
        password: 'Kirk'

    },
    {
        username: 'Christopher',
        password: 'Christopher'
    },
    {
        username: 'Bailey',
        password: 'Bailey'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
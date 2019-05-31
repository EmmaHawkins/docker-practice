const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    username: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    url: process.env.TEST_URL
};
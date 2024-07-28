const {
  fetchJoke,
  addJoke,
  deleteJoke,
} = require('../controllers/jokes-controller');

const routes = [
  {
    path: '/fetchUnmoderatedJoke',
    handler: fetchJoke,
    method: 'get',
  },
  {
    path: '/addJoke',
    handler: addJoke,
    method: 'post',
  },
  {
    path: '/deleteJoke',
    handler: deleteJoke,
    method: 'post',
  },
];

module.exports = {
  routes,
};

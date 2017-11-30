const app = require('../app'),
  hotelController = require('./controllers/hotel');

exports.setRoutes = app => {
  app.get('/hotels', hotelController.getHotels);
}
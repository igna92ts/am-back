const hotelService = require('../services/hotel');

const starsToArray = stars => stars.split(',').map(star => parseInt(star));

exports.getHotels = (req, res, next) => {
  try {
    let hotels = hotelService.getHotels();
    if (req.query.name && req.query.name !== '') {
      hotels = hotels.filter(hotel => {
        const hotelName = hotel.name.toLowerCase();
        const searchName = req.query.name.toLowerCase();
        return hotelName.search(searchName) != -1
      })
    } 
    if (req.query.stars && req.query.stars !== '') {
      const stars = starsToArray(req.query.stars);
      hotels = hotels.filter(hotel => {
        return stars.some(s => hotel.stars === s);
      })
    }
    res.send(hotels);
  } catch (error) {
    next(error);
  }
}


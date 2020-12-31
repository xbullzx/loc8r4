/* GET 'home' page */
const homelist = (req, res) => {
  res.render('locations-list', { 
    title: 'LOC8r - find a place to work with wifi',
    pageHeader: {
      title: 'LOC8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for Wifi and a Seat? LOC8r helps you find places to work when out and about. Perhaps with Coffee, cake, and a smile? Let LOC8r help you find what your looking for.",
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Starbuns',
      address: '345 Sweet Street, Middle Earth, USA',
      rating: 4,
      facilities: ['Hot Coffee', 'Snacks', 'Fast Takeout'],
      distance: '250m'
    },{
      name: 'Monster Coffee',
      address: '678 Dragon Ln, Kansas City,Mo',
      rating: 2,
      facilities: ['Premium Coffee', 'Hot Foods', 'Wifi', 'Outside Seats'],
      distance: '1.2km'
    }]
  });
};

/* GET 'Location info' page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
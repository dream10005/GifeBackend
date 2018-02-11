const { Places, ExternalReviews } = require('./placeModel');
const { send } = require('micro');

const notFound = JSON.parse('{"message" : "PLACE_NOT_FOUND"}');

Places.hasMany(ExternalReviews, { as: 'review', foreignKey: 'place_id', targetKey: 'id' });

async function getAllPlaces() {
  const result = await Places.findAll({
    include: [{
      model: ExternalReviews,
      as: 'review',
    }],
  });
  return result;
}

async function getPlacesById(req, res) {
  const result = await Places.findById(req.query.id, {
    include: [{
      model: ExternalReviews,
      as: 'review',
    }],
  });
  if (result == null) {
    send(res, 404, notFound);
  }
  return result;
}

function getPlacesByType(req, res) {
  const result = Places.findAll({
    where: {
      type: req.query.type,
    },
    include: [{
      model: ExternalReviews,
      as: 'review',
    }],
  });
  if (result == null) {
    send(res, 404, notFound);
  }
  return result;
}

function getPlacesByStatus() {
  return 'getplacebystatus';
}

module.exports = {
  getAllPlaces,
  getPlacesById,
  getPlacesByType,
  getPlacesByStatus,
};

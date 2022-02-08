const races = require("../data/races.json")

function read(req, res) {
    const { raceId } = req.params;
    res.json({ data: races.filter(raceId ? race => race.id == raceId : () => true) });
  }

function raceExists(req, res, next) {
    // const { raceId } = req.params;
    // const foundRace = races.find(race => race.id === Number(raceId));
    // if (foundRace) {
    //   res.locals.race = foundRace;
    //   return next();
    // }
    // next({
    //   status: 404,
    //   message: `Paste id not found: ${raceId}`,
    // });
  };

function list(req, res, next) {
    res.json({ data: races });
  };

module.exports = {
  read,
  list
}
const races = ("../data/races")

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

function read(req, res, next) {
    res.json({ data: res.locals.race });
  };

module.exports = {
    read: [raceExists, read],
}
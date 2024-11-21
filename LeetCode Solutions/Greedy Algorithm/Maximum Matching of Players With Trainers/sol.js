/**
 * @param {number[]} players
 * @param {number[]} trainers
 * @return {number}
 */
var matchPlayersAndTrainers = function (players, trainers) {
  players.sort((a, b) => a - b); // players sorted beacuse we can match palyers with low skills
  trainers.sort((a, b) => a - b); // trainers sorted beacuse we can match trainer with low trainer skills

  let pointP = 0;
  let pointT = 0;
  let match = 0;

  while (pointP < players.length && pointT < trainers.length) {
    if (players[pointP] <= trainers[pointT]) {
      // if player's skill is less or equal to the trainer's skill
      match++;
      pointP++;
      pointT++;
    } else if (players[pointP] > trainers[pointT]) {
      // if player's skill is greater than we choose next trainer
      pointT++;
    }
  }

  return match;
};

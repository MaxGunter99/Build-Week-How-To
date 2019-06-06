
//SEEDS ⬇︎
exports.seed = function(knex, Promise) {
  return knex('steps').insert([
    {
      howtoId: 1,
      step: 'Add water'
    },
    {
      howtoId: 1,
      step: 'add stuff'
    },
    {
      howtoId: 1,
      step: 'Vwala you have slime'
    }
  ]);
};

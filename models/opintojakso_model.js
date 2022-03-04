const db = require('../database');

const Opintojakso = {
  getById: function(id, callback) {
    return db.query('select * from Opintojakso where idOpintojakso=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Opintojakso', callback);
  },
  add: function(Opintojakso, callback) {
    return db.query(
      'insert into Opintojakso (Koodi,Laajuus,Nimi) values(?,?,?)',
      [Opintojakso.Koodi, Opintojakso.Laajuus, Opintojakso.Nimi],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Opintojakso where idOpintojakso=?', [id], callback);
  },
  update: function(id, Opintojakso, callback) {
    return db.query(
      'update Opintojakso set Koodi=?,Laajuus=?, Nimi=? where idOpintojakso=?',
      [Opintojakso.Koodi, Opintojakso.Laajuus, Opintojakso.Nimi, id],
      callback
    );
  }
};
module.exports = Opintojakso;
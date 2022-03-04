const db = require('../database');

const Arviointi = {
  getById: function(id, callback) {
    return db.query('select * from Arviointi where idArviointi=?', [id], callback);
  },
  getAll: function(callback) {
    return db.query('select * from Arviointi', callback);
  },
  add: function(Arviointi, callback) {
    return db.query(
      'insert into Arviointi (Paivamaara,Arvosana,Opiskelija_idOpiskelija,Opintojakso_idOpintojakso) values(?,?,?,?)',
      [Arviointi.Paivamaara, Arviointi.Arvosana, Arviointi.Opiskelija_idOpiskelija, Arviointi.Opintojakso_idOpintojakso],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from Arviointi where idArviointi=?', [id], callback);
  },
  update: function(id, Arviointi, callback) {
    return db.query(
      'update Arviointi set Paivamaara=?,Arvosana=?, Opiskelija_idOpiskelija=?, Opintojakso_idOpintojakso=? where idArviointi=?',
      [Arviointi.Paivamaara, Arviointi.Arvosana, Arviointi.Opiskelija, Arviointi.Opiskelija_idOpiskelija, Arviointi.Opintojakso_idOpintojakso, id],
      callback
    );
  }
};
module.exports = Arviointi;
const TypeModel = (sequelize, Sequelize) => {
    const {INTEGER, STRING, FLOAT, BOOLEAN, DATE} = Sequelize
    const Type = sequelize.define('Type', {
        TypeId: {type: INTEGER, primaryKey: true, autoIncrement: true},
        typePhotoName: {type: STRING, primaryKey: true, allowNull: false},
    })
    return Type
  }
  
  module.exports = TypeModel
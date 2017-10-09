'use strict';
module.exports = (sequelize, DataTypes) => {
  var Beach = sequelize.define('Beach', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    sand_rating: DataTypes.INTEGER
  });

  Beach.associate = (models) => {
    // Beach.hasMany(models.Lifeguard, {
    //   foreignKey: 'lifeguardId'
    // });
  };

  return Beach;
};
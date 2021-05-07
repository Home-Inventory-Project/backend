const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	const Producer = sequelize.define('Producer', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INT
    },
    name: {
      type : DataTypes.STRING,
      allowNull : false
    },
    vat_number: {
      type : DataTypes.INT,
      allowNull : true
    },
    site: {
      type : DataTypes.STRING,
      allowNull : true
    },
    image: {
      type : DataTypes.STRING,
      allowNull : true
    }
	});
  return Home
};

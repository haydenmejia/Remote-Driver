module.exports = function(sequelize, DataTypes) {
    var Movement = sequelize.define("Movement", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true
      },
      user_name: DataTypes.STRING,
      button_name: DataTypes.STRING,
      button_direction: DataTypes.STRING,
      button_degree: DataTypes.INTEGER,
      current_direction: DataTypes.STRING,
      current_degree: DataTypes.INTEGER,
      timestamp: DataTypes.STRING
    });

    // Movement.associate = function(models) {
    //   Movement.belongsTo(models.Driver, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Movement;
  };
  
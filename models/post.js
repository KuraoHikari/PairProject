'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.UserCat)
      Post.belongsToMany(models.HastagCat , {through:'PostHastag', foreignKey:"PostId"})
    }
    get DateCoverter(){
      let today = this.createdAt;
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        today = yyyy + '-' + dd + '-' + mm;
        return today
    }
  };
  Post.init({
    title: DataTypes.STRING,
    story: DataTypes.STRING,
    image: DataTypes.STRING,
    UserCatId: {
      type:DataTypes.INTEGER,
      references : {
        model :{
          tableName : "Posts"
        },
        key : "id"
      },
      onUpdate : "CASCADE",
      onDelete : "CASCADE"
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
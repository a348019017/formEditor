const { Sequelize, DataTypes, Model } = require('sequelize');
//const sequelize = new Sequelize('sqlite::memory:');
const sequelize=require("./dbcnn")
class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
//console.log(User === sequelize.models.User); // true

class formTemplate extends Model {};

formTemplate.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
    },
    template: {
      type: DataTypes.JSON,
      // allowNull defaults to true
    },
    type: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    order: {
      type: DataTypes.INTEGER,
      // allowNull defaults to true
    },
    //是否允许更改,用于前端过滤不可变的模板，后台未处理
    enable: {
        type: DataTypes.BOOLEAN,
        defaultValue:true,
        // allowNull defaults to true
    },
    //模板的分组名称
    group:{
      type: DataTypes.STRING,
    },
    roleid:{
      type: DataTypes.STRING,
    }
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "FormTemplate", // We need to choose the model name
  }
);


class formData extends Model {};

formData.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    data: {
      type: DataTypes.JSON,
      // allowNull defaults to true
    },
    // formTemplateId: {
    //   type: DataTypes.INTEGER,
    // },
    type: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    //formData的状态，表示已提交
    status: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    //表单的分组名称，相当于存取多个表单
    group:{
      type: DataTypes.STRING,
    },
    //用户Id
    userid:{
      type: DataTypes.STRING,
    }
    // references: {
    //   model: formTemplate,
    //   key: "id",
    // },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "FormData", // We need to choose the model name
  }
);



/**
 * 数据字典,通过type字段进行分组
 */
class dictionaryData extends Model {};

dictionaryData.init(
  {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    type: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    title: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    //表示级联的情况，特殊处理
    // parent: {
    //   type: DataTypes.INTEGER,
    //   // allowNull defaults to true
    // },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "DictionaryData", // We need to choose the model name
  }
);



formTemplate.hasOne(formData);
formData.belongsTo(formTemplate);

module.exports ={User,formTemplate,formData,dictionaryData} ;


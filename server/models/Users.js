const { DataTypes } = require("sequelize")

module.exports=(sequelize,Datatype)=>{
    const Users=sequelize.define('users',{
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        gender:DataTypes.STRING,
        status:DataTypes.STRING 
    },{
        createAt:'create_at',
        updateAt:'modified_at'
    })
    return Users 
}
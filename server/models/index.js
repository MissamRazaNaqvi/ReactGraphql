const sequelize=require('../config/db')
const {Sequelize,Datatype}=require('../config/db')

const db={}

db.Sequelize=Sequelize
db.sequelize=sequelize

db.sequelize.sync({force:false}).then(()=>{console.log('yes re-sync');})
 
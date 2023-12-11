const flowersmodel = require('../flowersmodel')
const treesmodel = require('../treesmodel')
const carsmodel = require('../carsmodel')

const maincontrollers= {};

// maincontrollers.index = (req,res) =>{
//     res.render('index',{users : flowersmodel.users});
// };
maincontrollers.flowers = (req,res) =>{
    res.render('flowers',{users : flowersmodel.users});
};
maincontrollers.trees = (req,res) =>{
    res.render('trees',{users : treesmodel.users});
};
maincontrollers.cars = (req,res) =>{
    res.render('cars',{users : carsmodel.users});
};
module.exports = maincontrollers;
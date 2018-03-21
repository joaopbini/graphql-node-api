import * as fs from 'fs'
import * as path from 'path'
import * as Sequelize from 'sequelize'

const basename: string = path.basename(module.filename);
const env: string = process.env.NODE_ENV || 'development';

let config = require(path.resolve(`${__dirname}./../config/config.json`));

console.log(config);

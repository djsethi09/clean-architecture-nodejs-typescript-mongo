import config from '../../config'
import knexFile from '../../knexfile'
import knex from 'knex'
let knexfile: any = knexFile
var environment = config.NODE_ENV || 'development';
var knexConfig = knexfile[environment];
export default knex(knexConfig);
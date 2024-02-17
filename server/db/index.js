import pkg from 'pg';

const {Pool} = pkg;
const pool = new Pool()

export const query = (text, params, callback) => pool.query(text, params, callback);
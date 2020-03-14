import Sequelize from 'sequelize';

// Imports models

import databaseConfig from '../config/database';

// list models
const models = [];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();

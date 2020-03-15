import Sequelize from 'sequelize';

// Imports models
import User from '../app/models/User';
import Recipient from '../app/models/Recipient';

import databaseConfig from '../config/database';

// list models
const models = [User, Recipient];

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

import Sequelize, { Model } from 'sequelize';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                street: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                number: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                complement: {
                    type: Sequelize.STRING,
                },
                city: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                state: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: true,
                    },
                    length: 2,
                },
                zip_code: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: true,
                    },
                    length: 9,
                },
            },
            {
                sequelize,
            }
        );
    }
}

export default Recipient;

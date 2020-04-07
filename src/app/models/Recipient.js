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

    equals(recipient) {
        if (recipient.name !== this.name) return false;
        if (recipient.street !== this.street) return false;
        if (recipient.number !== this.number) return false;
        if (recipient.complement !== this.complement) return false;
        if (recipient.city !== this.city) return false;
        if (recipient.state !== this.state) return false;
        if (recipient.zip_code !== this.zip_code) return false;

        return true;
    }
}

export default Recipient;

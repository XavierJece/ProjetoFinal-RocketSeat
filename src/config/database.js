module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'fastfeet',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci',
        },
    },
};

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'db_developer',
    password: 'db_developerROOT',
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

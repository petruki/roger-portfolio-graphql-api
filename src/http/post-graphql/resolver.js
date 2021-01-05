const Portfolio = require('./model/portfolio');

const resolvers = {
    Query: {
        check: () => 'All good',
        async portfolio() {
            return await resolvePortfolio()
        }
    }
}

const resolvePortfolio = async () => {
    return await Portfolio.findOne({ version: 0 });
};

module.exports = { resolvers }
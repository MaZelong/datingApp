module.exports = {
	API_URL : process.env.API_URL || "http://127.0.0.1:3000",
	DB_URI : process.env.DB_URI || 'http://localhost:7474/db/data/transaction/commit',
	FACEBOOK_APP_ID: process.env.FACEBOOK_APP_ID,
	FACEBOOK_APP_SECRET: process.env.FACEBOOK_APP_SECRET
};
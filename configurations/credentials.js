module.exports = {
    host: process.env.HOST || "localhost",
    port: process.env.PORT || 8967,
    database: {
        db_name: process.env.DB_NAME || "rns_softeng_database",
        username: process.env.DB_USER ||"root",
        password: process.env.DB_PASS || ""
    },
    jwt_secret: process.env.SECRET || 'mylittlesecret',
    email: {
        username: process.env.EMAIL_USER || "rnssofteng@gmail.com",
        password: process.env.EMAIL_PASS || "Rnssofteng1@",
        address: process.env.EMAIL_ADDRESS || "rnssofteng@gmail.com"
    }
} 

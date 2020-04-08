const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                Service: path.resolve(__dirname, `src/service/${process.env.VUE_APP_SERVICE}/api`),   
            }
        }
    }

}
module.exports = function (Arrow, server) {

    var _ = require('lodash'),
        pkginfo = require('pkginfo')(module) && module.exports;

    return {

        /**
         * The metadata of the connector plucked from the package.json
         */
        pkginfo: _.pick(pkginfo, 'name', 'version', 'description', 'author', 'license', 'keywords', 'repository'),

        /**
         * The logger of the connector.
         */
        logger: server && server.logger || Arrow.createLogger({}, { name: pkginfo.name }),

        /**
         * Any models in use.
         */
        models: Arrow.loadModelsForConnector(pkginfo.name, module)

    };

};
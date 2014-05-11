var async = require('async');

module.exports = keyMaker = function(keys, cb) {
    var maker = function(keyData, cb) {
        keyData.migrator.addForeignKey(keyData.tableName, {
            name:       keyData.keyName,
            references: keyData.def
        }, cb);
    }

    async.eachSeries(keys, maker, cb);
} 

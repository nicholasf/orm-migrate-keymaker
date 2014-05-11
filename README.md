A helper function for handling foreign key constructions in node-orm-migrate2

## Installation
```
npm install orm-migrate-keymaker
```

## Usage

```
var keyMaker = require('orm-migrate-keymaker');

exports.up = function(next){
    var keys = [
        { migrator: this, tableName: 'buildings', keyName: 'suburb_id',   def: { table: 'suburbs', column: 'id' } },
        { migrator: this, tableName: 'buildings', keyName: 'postcode_id', def: { table: 'postcodes', column: 'id' } },
        { migrator: this, tableName: 'buildings', keyName: 'state_id',    def: { table: 'states', column: 'id' } }
    ];

    this.createTable('buildings', {
        id              : { type: 'integer', primary: true, serial: true },
        street_number   : { type: 'integer', required: true },
        street_name     : { type: 'text',   required: true },
        street_type_id  : { type: 'integer', required: true },
        suburb_id       : { type: 'integer', required: true },
        state_id        : { type: 'integer', required: true },
        postcode_id     : { type: 'integer', required: true },
        created_at      : { type: 'date', required: true, defaultValue: 'now()' }
    }, function(err, table) {
        keyMaker(keys, next);
    })
};

exports.down = function(next){
    this.dropTable('buildings', next);
};

```

const LoadConfig = require('./internal/config/config');
const Run = require('./internal/run/app');

let config = LoadConfig()
Run(config)
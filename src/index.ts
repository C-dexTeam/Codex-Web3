import { LoadConfig } from './internal/config/config';
import { Run } from './internal/app/run'

let config = LoadConfig()

Run(config);
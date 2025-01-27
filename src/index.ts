import { LoadConfig } from './internal/config/config';
import { Run } from './internal/run/run'

let config = LoadConfig()
Run(config);
import { LoadConfig } from './internal/config/config';
import { Run } from './internal/app/run';

try {
    let config = LoadConfig();
    
    Run(config);

} catch (error) {
    console.error('Error occurred:', error);
}

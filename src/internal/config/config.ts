import * as yaml from 'js-yaml';
import * as fs from 'fs';
import { format } from 'path';

interface Config {
    [key: string]: any; 
}

const LoadConfig = (): Config => {
    try {
        const config: Config = yaml.load(fs.readFileSync('src/config/config.yaml', 'utf8')) as Config;
        return config;
    } catch (e) {
        if (e instanceof Error) {
            console.error(e.message); 
        }
        process.exit(1); 
    }
};

export { LoadConfig, Config };

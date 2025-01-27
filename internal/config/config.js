const yaml = require('js-yaml');
const fs = require('fs');

const LoadConfig = () => {
    try {
        const config = yaml.load(fs.readFileSync('./config/config.yaml', 'utf8'));

        return config
    } catch (e) {
        console.error(e.message); // Hata mesajını ekrana yazdır
        process.exit(1); // Uygulama hatayla sonlanacak
    }
}


module.exports = LoadConfig
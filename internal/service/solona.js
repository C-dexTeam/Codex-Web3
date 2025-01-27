class SolonaService {
    constructor(net){
        this.net = net
    }

    Hello(name) {
        if(!name){
            return 
        }

        return `Hello ${name}` 
    }
}

module.exports = SolonaService

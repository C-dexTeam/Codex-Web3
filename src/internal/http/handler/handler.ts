import Error from "../error/error";
import SolonaHandler from "./solona";
import Services from "../../service/services"; 

class Handler {
    private services: Services;
    private errorHandler: Error;
    private solonaHandler: SolonaHandler;

    constructor(services: Services) {
        this.services = services;
        this.errorHandler = new Error();

        this.solonaHandler = new SolonaHandler(
            this.services,
            this.errorHandler,
        ); 
    }

    SolonaHandler(): SolonaHandler {
        return this.solonaHandler; 
    }
}

export default Handler;

import Error from "../error/error";
import Services from "../../service/services"; 
import WalletHandler from "./wallet";

class Handler {
    private services: Services;
    private errorHandler: Error;
    private walletHandler: WalletHandler;

    constructor(services: Services) {
        this.services = services;
        this.errorHandler = new Error();

        this.walletHandler = new WalletHandler(
            this.services,
            this.errorHandler,
        ); 
    }

    WalletHandler(): WalletHandler {
        return this.walletHandler; 
    }
}

export default Handler;

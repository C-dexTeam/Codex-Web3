import { Request, Response } from 'express';
import Error from "../error/error";
import Services from "../../service/services"; 

class SolonaHandler {
    private services: Services;
    private errorHandler: Error;

    constructor(services: Services, errorHandler: Error) {
        this.services = services;
        this.errorHandler = errorHandler;
    }

    Hello = (req: Request, res: Response): Response => {
        this.errorHandler.SetRes(res);
        const name: string | undefined = req.query.name as string;

        if (!name) {
            return this.errorHandler.BadRequest("Name parameter is required.");
        }
        
        const msg = this.services.SolanaService().Hello(name);
        
        return this.errorHandler.OK("Hello Success", msg);
    }
}

export default SolonaHandler;

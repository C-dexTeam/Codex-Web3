// src/http/handler/user.ts
import Services from "../../service/services";
import ErrorHandler from "../error/error";
import { Request, Response } from 'express';
import { ResponseData } from "../response/response";

class UserHandler {
    private services: Services;
    private errorHandler: ErrorHandler;

    constructor(services: Services, errorHandler: ErrorHandler) {
        this.services = services;
        this.errorHandler = errorHandler;
    }

    GetUserNFTs = async (req: Request, res: Response): Promise<Response> => {
        this.errorHandler.SetRes(res);

        const userId = parseInt(req.params.id);

        if (isNaN(userId)) {
            return this.errorHandler.BadRequest("Geçersiz kullanıcı ID");
        }

        try {
            const nfts = this.services.UserService().getUserNFTs(userId);
            return this.errorHandler.Format(nfts);
        } catch (error) {
            if (error instanceof ResponseData) {
                return this.errorHandler.Format(error);
            }
            return this.errorHandler.InternalServerError("NFT'ler alınamadı", error);
        }
    };

}

export default UserHandler;

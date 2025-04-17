import Services from "../../service/services";
import ErrorHandler from "../error/error";
import { Request, Response } from 'express';
import { ResponseData } from "../response/response";

class NFTHandler {
    private services: Services;
    private errorHandler: ErrorHandler;

    constructor(services: Services, errorHandler: ErrorHandler) {
        this.services = services;
        this.errorHandler = errorHandler;
    }

    MintNFT = async (req: Request, res: Response): Promise<Response> => {
        this.errorHandler.SetRes(res);

        const { publicKey, name, symbol, uri, sellerFee } = req.body;

        try {
            const nftMintResult = await this.services.NFTService().MintNFT(
                name,
                symbol,
                uri,
                sellerFee
            );

            const transferNFT = await this.services.NFTService().TransferNFT(
                nftMintResult.address.toString(),
                publicKey.toString()
            )

            return this.errorHandler.OK("NFT minted successfully", { nftMintResult, transferNFT });
        } catch (error) {
            if (error instanceof ResponseData) {
                return this.errorHandler.Format(error);
            }
            return this.errorHandler.InternalServerError("Unknown Error", error);
        }
    };

    MintNFTDemo = async (req: Request, res: Response): Promise<Response> => {
        this.errorHandler.SetRes(res);

        const { userID, nftID, publicKey } = req.body;

        try {
            // Kullanıcının NFT'lerini getir (await unutma!)
            const nftsResponse = this.services.UserService().getUserNFTs(userID);

            // ResponseData'dan veriyi al
            const nftList = nftsResponse.Data();

            // NFT'yi bul
            const nft = nftList.find((n: any) => n.id === nftID);
            if (!nft) {
                return this.errorHandler.BadRequest("NFT bulunamadı");
            }


            console.log(1)

            // Mint işlemi için gerekli veriler
            const { name, symbol, uri, sellerFee } = nft;


            // NFT mint etme işlemi
            const nftMintResult = await this.services.NFTService().MintNFT(
                name,
                symbol,
                uri,
                sellerFee
            );
            console.log(2)


            // Mint edilen NFT'yi belirtilen public key'e transfer etme
            const transferNFT = await this.services.NFTService().TransferNFT(
                nftMintResult.address.toString(),
                publicKey.toString()
            );
            console.log(3)


            // Başarılı yanıt döndür
            return this.errorHandler.OK("NFT başarıyla mintlendi ve transfer edildi.", {
                nftMintResult,
                transferNFT,
            });
        } catch (error) {
            if (error instanceof ResponseData) {
                return this.errorHandler.Format(error);
            }
            return this.errorHandler.InternalServerError("Bilinmeyen bir hata oluştu", error);
        }
    };
}

export default NFTHandler
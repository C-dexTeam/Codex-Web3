import { Connection, PublicKey } from "@solana/web3.js";
import { ResponseData } from "../http/response/response";

class SolanaService {
    private connection;
    constructor(conn: Connection){
        this.connection = conn
    }

    Hello(name?: string): string | undefined {
        if (!name) {
            return;
        }

        return `Hello ${name}`;
    }

    async GetBalance(publicKeyStr: string) {
        try {
            if (!publicKeyStr) {
                throw new ResponseData("Wallet address parameter is required.", 404)
            }

            const publicKey = new PublicKey(publicKeyStr);
            
            const balance = await this.connection.getBalance(publicKey);
            const balanceInSOL = balance / 1e9;
    
            return balanceInSOL; 
        } catch (error) {
            throw new ResponseData("An error occurred while retrieving the balance.", 500);
        }
    }
}

export default SolanaService;

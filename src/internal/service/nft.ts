import { Connection, PublicKey } from "@solana/web3.js"

class NFTService{
    private connection;
    constructor(conn: Connection){
        this.connection = conn
    }
    
}

export default NFTService
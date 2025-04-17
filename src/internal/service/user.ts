// src/service/user.ts
import { Pool } from "pg";
import pool from "../../pkg/db_adapter/db";
import { ResponseData } from "../http/response/response";

const dummyNFT = [
    {
        id: 1,
        user_id: 1,
        symbol: "ATS001",
        name: "Cyber Samurai",
        uri: "https://example.com/nft/1",
        seller_fee: 500,
    },
    {
        id: 2,
        user_id: 2,
        symbol: "ATS002",
        name: "SolWave",
        uri: "https://example.com/nft/2",
        seller_fee: 750,
    },
    {
        id: 3,
        user_id: 1,
        symbol: "ATS003",
        name: "Bird of Solana",
        uri: "https://example.com/nft/3",
        seller_fee: 300,
    },
];


class UserService {
    private pool: Pool;

    constructor() {
        this.pool = pool;
    }

    Hello(name?: string): string | undefined {
        if (!name) return;
        return `Hello ${name}`;
    }

    getUserNFTs(userId: number): ResponseData {
        const nfts = dummyNFT.filter(nft => nft.user_id === userId);
        return new ResponseData("NFT'ler başarıyla getirildi", 200, nfts);
    }

}

export default UserService;

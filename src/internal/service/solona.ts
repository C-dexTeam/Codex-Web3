class SolanaService {
    private net: string;

    constructor(net: string) {
        this.net = net;
    }

    Hello(name?: string): string | undefined {
        if (!name) {
            return;
        }

        return `Hello ${name}`;
    }
}

export default SolanaService;

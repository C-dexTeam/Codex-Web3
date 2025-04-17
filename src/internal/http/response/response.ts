export class ResponseData {
    private message: string | undefined;
    private status: number | undefined;
    private data: any;
    private error: string | undefined;

    constructor(message?: string, status?: number, data: any = null, error?: string) {
        this.message = message;
        this.status = status;
        this.data = data;
        this.error = error;
    }

    Status(): number {
        return this.status ?? 666
    }

    Data(): any {
        return this.data
    }
}

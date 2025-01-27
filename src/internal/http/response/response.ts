export class ResponseData {
    private message: string | undefined;
    private status: string | undefined;
    private data: any;
    private error: string | undefined;

    constructor(message?: string, status?: string, data: any = null, error?: string) {
        this.message = message;
        this.status = status;
        this.data = data;
        this.error = error;
    }
}

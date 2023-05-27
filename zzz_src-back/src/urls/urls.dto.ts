export class CreateUrlDto {
    full_url: string
}

export class UrlCreatedResponse {
    full_url: string = ''

    short_url_hash: string = ''

    short_url: string = ''

    constructor(url: string, hash: string) {
        this.full_url = url;
        this.short_url_hash = hash;
    }
}

export class UrlHashRequest {
    hash: string;
}
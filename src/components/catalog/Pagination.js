export class PaginatedResponse {
    items ;
    metaData;

    constructor(items, metaData) {
        this.items = items;
        this.metaData = metaData;
    }
}
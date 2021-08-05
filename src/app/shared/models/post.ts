export class Post {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}


export class PostListReponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Array<Post>;
    support: any;
}
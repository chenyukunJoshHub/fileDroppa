export interface Item {
    id: string;
    description: string;
    price: number;
    name: string;
    manufacturer: string;
    image_src?: string;
    averageReviewRate?:number;
    comments:Comment[];
}

export interface Comment {
    name:string;
    comment:string;
    rate?:number;
}
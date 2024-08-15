export class CoffeeProduct {
    id: string;
    name: string;
    image: string;
    price: string;
    rating: number;
    votes: number;
    popular: boolean;
    available: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.image = data.image;
        this.price = data.price;
        this.rating = data.rating;
        this.votes = data.votes;
        this.popular = data.popular;
        this.available = data.available;
    }
}
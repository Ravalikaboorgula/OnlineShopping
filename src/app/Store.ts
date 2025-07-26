    export class Store {
    storeName : string;
    streetName: string;
    city: string;
    state: string;
    zipCode: string;
    email: string;
    branch: string;
    storeHours: string;

    constructor(storeName : string,
        streetName: string,
        city: string,
        state: string,
        zipCode: string,
        email: string,
        branch: string,
        storeHours: string){
            this.storeName = storeName
            this.streetName = streetName;
            this.city = city;
            this.state = state;
            this.zipCode = zipCode;
            this.email = email;
            this.branch = branch;
            this.storeHours = storeHours;
        }
}
export class User{
    constructor(
        private username : string,
        private password : string
    ){
    }

    get Username() {return this.username;}
    get Password() {return this.password;}
}
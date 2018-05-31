export class User{
    constructor(
        private _username : string,
        private _password : string
    ){
    }

    get username() {return this._username;}
    set username(v : string){this._username=v;}

    get password() {return this._password;}
    set password(v : string){this._password=v;}
}
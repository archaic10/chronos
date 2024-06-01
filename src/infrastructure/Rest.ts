import { Authenticator } from "./Authenticator";
export class Rest{

    private static rest:Rest;
    constructor(token:string){
        this.setAuth(token);
    }

    public static getRest(token?:string) {
        if (!Rest.rest && token != undefined) {
            Rest.rest = new Rest(token);
        }

        return Rest.rest.getAuth().getAuthenticator();
    }
    //@ts-ignore
    private auth:Authenticator;
    
    private setAuth(token:string):void{
        this.auth = new Authenticator(token);
    }

    public getAuth():Authenticator{
        return this.auth;
    }
    
}
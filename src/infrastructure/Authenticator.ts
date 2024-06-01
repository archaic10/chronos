import { Octokit } from "@octokit/core";
export class Authenticator{
    //@ts-ignore
    private githubToken:string;

    constructor(token:string){
        this.setGithubToken(token);
    }
    private setGithubToken(token:string):void{
        this.githubToken = token;
    }

    public getAuthenticator(){
        const octokit = new Octokit({ auth: this.githubToken})
        return octokit;
    }
}
import core from '@actions/core';
import github from '@actions/github';
import { PullRequestRepository } from '../../infra/Repository/PullRequestRepository';


export class Github{
    private githubToken:string = '';
    private major:number = 0;
    private minor:number = 0;
    private patch:number = 0;
    private contentRelease:string = `## What's Changed \n`;
    
    private get commitSha(){
        if(!this.hasCommitSha()){
            return '';
        }
        return github.context.payload.commits[0].id;
    }

    private get branchEvent():string|null{
        if(!this.isPullRequest()){
            return null;
        }
        //@ts-ignore
        return github.context.payload.ref.split('/')[2];
    }

    private get branchDefault(){
        if(!this.isBranchDefault()){
            return null;
        }
        //@ts-ignore
        return github.context.payload.repository.default_branch;
    }
    
    public get owner():string{
        if(!this.isOwner){
            return '';
        }
        //@ts-ignore
        return github.context.payload.repository.owner.name;
    }

    public get repository():string{
        if(!this.isRepository){
            return '';
        }
        //@ts-ignore
        return github.context.payload.repository.name;
    }

    private getNumberPullRequestByCommit(){
        if(this.branchEvent == this.branchDefault){
            const pullRequestRepository = new PullRequestRepository;
            pullRequestRepository.getNumberPullRequestByCommit({owner:this.owner,name:this.repository, commitSha:this.commitSha, token: this.githubToken});
        }
    }

    public isOwner(){
        if(!github.hasOwnProperty("context")){
            return false;
        }
        if(!github.context.hasOwnProperty("payload")){
            return false;
        }
        if(!github.context.payload.hasOwnProperty("repository")){
            return false;
        }
        //@ts-ignore
        if(!github.context.payload.repository.hasOwnProperty("owner")){
            return false;
        }
        //@ts-ignore
        if(!github.context.payload.repository.owner.hasOwnProperty("name")){
            return false;
        }
        return true;

    }

    public isRepository(){
        if(!github.hasOwnProperty("context")){
            return false;
        }
        if(!github.context.hasOwnProperty("payload")){
            return false;
        }
        if(!github.context.payload.hasOwnProperty("repository")){
            return false;
        }
        //@ts-ignore
        if(!github.context.payload.repository.hasOwnProperty("name")){
            return false;
        }
        return true;

    }

    hasCommitSha():boolean{
        if(!github.hasOwnProperty("context")){
            return false;
        }
        if(!github.context.hasOwnProperty("payload")){
            return false;
        }
        if(!github.context.payload.hasOwnProperty("commits")){
            return false;
        }
        //@ts-ignore
        if(!github.context.payload.commits.length === 0){
            return false;
        }
        if(!github.context.payload.commits[0].hasOwnProperty("id")){
            return false;
        }
        return true;
    }    

    private isPullRequest():boolean{
        if(!github.hasOwnProperty("context")){
            return false;
        }
        if(!github.context.hasOwnProperty("payload")){
            return false;
        }
        if(!github.context.payload.hasOwnProperty("ref")){
            return false;
        }
        return true;
    }

    private isBranchDefault():boolean{
        if(!github.hasOwnProperty("context")){
            return false;
        }
        if(!github.context.hasOwnProperty("payload")){
            return false;
        }
        if(!github.context.payload.hasOwnProperty("repository")){
            return false;
        }
        //@ts-ignore
        if(!github.context.payload.repository.hasOwnProperty("default_branch")){
            return false;
        }
        return true;
    }
}
import { IpullRequest } from "../../domain/interface/IpullRequest";
import { Rest } from "../Rest";

export class PullRequestRepository{
    
    async getNumberPullRequestByCommit({owner,name, commitSha, token}:IpullRequest){
        
        let res = await Rest.getRest(token).request('GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls', {
            owner: owner,
            repo: name,
            commit_sha: commitSha
        })
        return res.data.pop();
    }
}
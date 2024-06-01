import { Rest } from "../Rest";
export class ReleaseRepository {
    // async  getRelease(owner,name){
       
        // return await Rest.getRest().request('GET /repos/{owner}/{repo}/releases', {
        //     owner: owner,
        //     repo: name
        // }).then((res)=>{
        //     let isRelease = false
        //     if(number_release != null){
        //         res.data.map(({tag_name, body, id})=>{
        //             if(tag_name.split(/([a-z]|[A-z])+\.*/).pop() == number_release){
        //                 release_milestone = tag_name
        //                 body_milestone = body
        //                 id_release_milestone = id
        //                 isRelease = true;
        //             }
        //         })
        //     }
                
        //     return isRelease ? {status: res.status, last_release: release_milestone, body: body_milestone, id: id_release_milestone } : {status: 404, last_release: res.data[0].tag_name, body:null, id:null}
        // }).catch(()=>{            
        //     return {status: 404, last_release: null, body:null, id:null}
        // })
    
    // }
}
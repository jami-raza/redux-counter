import { Server } from "miragejs";

export function Makeserver({environment = 'test'} = {}){
    let server = new Server({
        environment,
        routes(){
            this.namespace = "api";
            this.get("fetchRandomNumber",()=>{
                return Math.ceil(Math.random() + 10)
            },{
                timing:1000
            })
        }
    })
    return server;
}
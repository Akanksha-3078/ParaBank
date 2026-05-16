// import { APIRequestContext, request } from "@playwright/test";

// export class BaseAPI{
//     protected RequestContext!: APIRequestContext;     //Definite Assignment Assertion
//     async init(){
//         this.RequestContext = await request.newContext({
//             baseURL: 'https://parabank.parasoft.com/parabank/services/bank/',
//             extraHTTPHeaders: {
//                 'Accept' : 'application/json'
//             }
//         })
//     }

//     async dispose() {
//         await this.RequestContext.dispose();
//     }
// }

import { APIRequestContext } from "@playwright/test";

export class BaseAPI {

    protected RequestContext: APIRequestContext;

    constructor(requestContext: APIRequestContext) {

        this.RequestContext = requestContext;
    }
}


import { APIRequestContext } from "@playwright/test";

export class BaseAPI {

    protected RequestContext: APIRequestContext;

    constructor(requestContext: APIRequestContext) {

        this.RequestContext = requestContext;
    }
}


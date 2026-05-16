import { BaseAPI } from "../Pages/ApiClients";

export class AccountsAPI extends BaseAPI{
    async getAccounts(customerId:number | string){
        return await this.RequestContext.get(`accounts/${customerId}`);
    }

    async createAccount(

        customerId: number,

        newAccountType: number,

        fromAccountId: number

    ) {

    return await this.RequestContext.post(

        'createAccount',

        {

            params: {

                customerId,

                newAccountType,

                fromAccountId

            }

        }

    );

    
}
}
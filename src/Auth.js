export const startLogin=(data)=>{
    return async context=>{
        const {apiRequest}=context;
        apiRequest('POST', "/login", data)
    }
}
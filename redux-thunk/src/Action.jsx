const Fetch_data = "FETCH_DATA"

const Error = "ERROR"

export function  fetchData(url) {
    return {
        type:Fetch_data,
        payload : url
    }
}

export function fetchError(error){
    return{
        type:Error,
        payload : error

    }
}
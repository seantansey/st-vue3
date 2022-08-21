export const dataCall = async (apiCall, params) => {
    return apiCall(params)
        .then((response) => {
            if (!response.ok) throw Error (response.statusText)
            return response.json()
        })
        .catch((error) => { 
            return { error } 
        })
}
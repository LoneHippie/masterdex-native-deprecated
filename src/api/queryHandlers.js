export const queryOptions = (query, variables) => {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Method-Used': 'graphiql'
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    }
};

export async function handleQuery(url, options) {
    
    const data = fetch(url, options)
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);

    return data;
};

function handleResponse(res) {
    return res.json().then((resJSON) => {
        return res.ok ? resJSON : Promise.reject(resJSON)
    });
};

function handleData(data) {
    return data;
};

function handleError(err) {
    console.log(err);
};
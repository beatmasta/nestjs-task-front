export const request = async (method: string, apiMethod: string, data = {}) => {

    let fetchOptions: any = {
        method, // GET | POST | PUT | DELETE
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    };

    let fetchURL = `${process.env.REACT_APP_API_URL}/${apiMethod}`;

    if (method === 'GET' || method === 'HEAD') {

        const params = Object.keys(data)
            .map(key => `${key}=${(data as any)[key]}`)
            .join('&');

        fetchURL += `?${params}`;

    } else if (Object.keys(data).length) {

        fetchOptions.body = JSON.stringify(data);

    }

    const response = await fetch(fetchURL || '', fetchOptions);

    return response.json();

};

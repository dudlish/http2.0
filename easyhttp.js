class EasyHTTP {
    // GET Method
    // get(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Make HTTP Post
    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP PUT Request
    // put(url, data) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));
    //     });
    // }

    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Make an HTTP DELETE Request
    // delete(url) {
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'DELETE',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(() => resolve('Item Deleted'))
    //             .catch(err => reject(err));
    //     });
    // }

    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const resData = await 'Item Deleted';
        return resData;
    }
}
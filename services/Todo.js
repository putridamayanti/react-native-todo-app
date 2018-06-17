/**
 * Created by PutriDamayanti on 6/8/2018.
 */
const URI = 'https://2f371d37.ngrok.io';

export default {
    async fetchList() {
        try {
            let response = await fetch(URI + '/api/list');
            let responseJsonData = await response.json();
            return responseJsonData;
        }
        catch(e) {
            console.log(e)
        }
    },

    async addTask(task) {
        console.log(task);
        try {
            return fetch(URI + '/api/list', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    task: task,
                }),
            })
                .then(response => {
                    response.json();
                    console.log(response)
                });
            // let data = {
            //     method: 'POST',
            //     credentials: 'same-origin',
            //     mode: 'same-origin',
            //     body: JSON.stringify({
            //         task: task
            //     }),
            //     headers: {
            //         'Accept':       'application/json',
            //         'Content-Type': 'application/json',
            //         // 'X-CSRFToken':  cookie.load('csrftoken')
            //     }
            // };
            // // console.log(data)
            // return fetch('/api/list/store', data)
            //     .then(response => {
            //             console.log(response);
            //             response.json();
            //     })  // promise
            //     // .then(json => dispatch(receiveAppos(json)))
        } catch (e) {
            console.log(e);
            return 'Error';
        }
    }
}
import * as serverApi from './db'

const promise = new Promise((resolve, reject) => {

});


function all(onSuccess, onError) {
    return new Promise((resolve, reject) => {
        serverApi.all((response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                resolve(onSuccess(info.data));
            } else {
                reject(onError(info.status));
            }
        });
    })
}

function one(id, onSuccess, onError) {
    return new Promise((resolve, reject) => {
        serverApi.get(id, (response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                resolve(onSuccess(info.data));
            } else {
                reject(onError(info.status));
            }
        });
    });
}

function remove(id, onSuccess, onError) {
    return new Promise((resolve, reject) => {
        serverApi.remove(id, (response) => {
            let info = JSON.parse(response);

            if (info.code === 200) {
                resolve(onSuccess(info.data));
            } else {
                reject(onError(info.status));
            }
        });
    });
}

export {all, one, remove};
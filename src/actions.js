import {API_BASE_URL} from './config';

export const FETCH_CAT_SUCCESS = 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
    type: FETCH_CAT_SUCCESS,
    cat
});

export const fetchCat = () => dispatch => {
    console.log('cat fetch')
    fetch(`${API_BASE_URL}/cat`).then(res => {
        if (!res.ok) {
            console.log('cat error')
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(cat => {
        console.log('cat success')
        dispatch(fetchCatSuccess(cat));
    });
};

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
    type: FETCH_DOG_SUCCESS,
    dog
});

export const fetchDog = () => dispatch => {
    fetch(`${API_BASE_URL}/dog`).then(res => {
        if (!res.ok) {
            return Promise.reject(res.statusText);
        }
        return res.json();
    }).then(dog => {
        dispatch(fetchDogSuccess(dog));
    });
};

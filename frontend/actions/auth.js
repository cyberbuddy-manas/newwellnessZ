import fetch from 'isomorphic-fetch';
import cookie from 'js-cookie';
import { API } from '../config';

export const signup = async user => {
    try {
        const response = await fetch(`${API}/signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


export const clubregister = async user => {
    try {
        const response = await fetch(`${API}/v1/club/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const clublogin = async user => {
    try {
        const response = await fetch(`${API}/v1/club/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


export const signin = async user => {
    try {
        const response = await fetch(`${API}/signin`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const signout = async next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();

    try {
        const response = await fetch(`${API}/signout`, {
            method: 'GET'
        });
        console.log('signout success');
    } catch (err) {
        return console.log(err);
    }
};


export const setCookie = (key, value) => {
    if (process.browser) {
        cookie.set(key, value, {
            expires: 1
        });
    }
};

export const removeCookie = key => {
    if (process.browser) {
        cookie.remove(key, {
            expires: 1
        });
    }
};

export const getCookie = key => {
    if (process.browser) {
        return cookie.get(key);
    }
};

export const setLocalStorage = (key, value) => {
    if (process.browser) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

export const removeLocalStorage = key => {
    if (process.browser) {
        localStorage.removeItem(key);
    }
};

export const authenticate = (data, next) => {
    setLocalStorage('user', data.user);
    setCookie('token', data.token);
    next();
};

export const isAuth = () => {
    if (process.browser) {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};





export const forgotPassword = async email => {
    try {
        const response = await fetch(`${API}/forgot-password`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(email)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const resetPassword = async resetInfo => {
    try {
        const response = await fetch(`${API}/reset-password`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(resetInfo)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
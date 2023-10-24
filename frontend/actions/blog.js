import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { isAuth } from './auth';

export const createBlog = async (blog, token) => {
    try {
        const response = await fetch(`${API}/blog`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: blog
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


export const listBlogsWithCategoriesAndTags = async () => {
    try {
        const response = await fetch(`${API}/blogs-categories-tags`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        console.log(err);
    }
};



export const allblogs = async () => {
    try {
        const response = await fetch(`${API}/allblogs`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const getAllBlogSlugs = async () => {
    try {
        const response = await fetch(`${API}/allblogslugs`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};



export const singleBlog = async (slug) => {
    try {
        const response = await fetch(`${API}/blog/${slug}`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};



export const listRelated = async blog => {
    try {
        const response = await fetch(`${API}/blogs/related`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


export const removeBlog = async (slug, token) => {
    let deleteBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        deleteBlogEndpoint = `${API}/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        deleteBlogEndpoint = `${API}/user/blog/${slug}`;
    }

    try {
        const response = await fetch(`${deleteBlogEndpoint}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};

export const updateBlog = async (blog, token, slug) => {
    let updateBlogEndpoint;

    if (isAuth() && isAuth().role === 1) {
        updateBlogEndpoint = `${API}/blog/${slug}`;
    } else if (isAuth() && isAuth().role === 0) {
        updateBlogEndpoint = `${API}/user/blog/${slug}`;
    }

    try {
        const response = await fetch(`${updateBlogEndpoint}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: blog
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};


export const list = async username => {
 
    try {
        const response = await fetch(`${API}/blogs`, {
            method: 'GET'
        });
        return await response.json();
    } catch (err) {
        return console.log(err);
    }
};
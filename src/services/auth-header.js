import React from 'react';

export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if(user && user.token) {
        return { Authorization: 'Bearer ' + user.token };
        // return { "x-auth-token": user.token };
    } else {
        return {};
    }
}
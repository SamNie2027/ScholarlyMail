import React from 'react';
import { Header } from './Header';

export const Home = () => {

    let user = 'blah';
    return (
        <>
        <Header user={user}/>
        <div class="flex justify-center py-4">
        <div class="w-5/6 lg:w-3/4 bg-white p-4 rounded overflow-hidden shadow-lg">
            <h1 class="text-4xl">Hello World</h1>
            <p>{user ? 'You are logged in.' : 'You are not logged in.'}</p>
        </div>
        </div>
        </>
    );
}
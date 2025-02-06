import React from 'react';
import { User } from '../types';

/**
 * Header component contains the logo and the navbar
 */
export const Header = ({user}: User) => {

    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">

        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-xl tracking-tight">Express OIDC by Auth0</span>
        </div>

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <a href="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" visibility={user ? 'visibile' : 'hidden'}>Home</a>
                <a  href="/mailInfo" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" visibility={user ? 'visibile' : 'hidden'}>Profile</a>
                <a  href="/logout" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" visibility={user ? 'visibile' : 'hidden'}>Logout</a>
                <a  href="/login" 
                        class="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4" visibility={user ? 'hidden' : 'visible'}>Login</a>
            </div>

            <div>
                <a  href="https://github.com/auth0/express-openid-connect" 
                    target="blank"
                    class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-800 hover:bg-white mt-4 lg:mt-0">
                    <span class="font-semibold text-xl tracking-tight">GitHub</span>
                    
                </a>
            </div>
        </div>
    </nav>
    );
}
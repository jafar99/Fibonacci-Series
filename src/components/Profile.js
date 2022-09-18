import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <article className='column'>
    
                <h2>User Name : {user?.name}</h2>
                
            </article>
        )
    )
}

export default Profile

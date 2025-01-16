import axios from 'axios';

export const joinWaitlist = (email: string) => 
    axios.post('https://api.theindiegrid.xyz/waitlist', {
        email
    });

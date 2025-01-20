import axios from 'axios';

export const joinWaitlist = (email: string) => 
    axios.post('https://theindiegridapi.damonk3y.xyz/waitlist', {
        email
    });

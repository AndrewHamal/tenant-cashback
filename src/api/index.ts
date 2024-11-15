import { apiURL } from "@/lib/utils";
import axios from 'axios';

export async function fetcher(url: string)
{
    const res = await fetch(`${apiURL}${url}`);
    return await res.json();
}

export async function subscribePost(email: string){
    return axios.post(`${apiURL}home`, {
        email,
        subscribed: true
    })
}
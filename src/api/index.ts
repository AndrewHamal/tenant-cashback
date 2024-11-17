import axios from 'axios';
import { apiURL } from "@/lib/utils";
import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../components/email-template';
import { Resend } from 'resend';

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


export const sendEmail = async (formdata:any) => {
    return axios.post(`http://127.0.0.1:3000/api/send`, formdata)
};

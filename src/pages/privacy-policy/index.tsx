import { fetcher } from "@/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useSWR from 'swr';
import { Skeleton } from "@/components/ui/skeleton"
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

const subText: any = {
    '/privacy-policy': 'Tenant’s Cashback',
    '/privacy-policy/': 'Tenant’s Cashback',
    '/terms-and-services/': 'You can view our complete terms and conditions below..',
    '/terms-and-services': 'You can view our complete terms and conditions below.',
    '/price-list': 'Civil Litigation',
    '/price-list/': 'Civil Litigation'
}

export default function PrivacyPolicy({data, pages}: any)
{
    const page = usePathname();

    const content = {
        body: pages?.page?.privacy_policy,
        extra: pages?.page?.privacy_banner?.[0]?.privacy_banner,
        extraBottom: pages?.page?.privacy_banner?.[0]?.privacy_bottom
    };

    return (<>
        <Image className="absolute h-[100vh] top-0 z-[-1] bottom-0 left-0 right-0 object-cover" src={require('@/assets/bg.svg')} alt=""/>
        <Navbar data={data?.setting}/>
        <div className="xl:container px-3 m-auto">
            <div className="header py-10 sm:py-20">
                <h2 className="capitalize text-center text-5xl font-[700] text-[#1A1A1A]">{page?.replace('/', '')?.replaceAll('-', ' ')}</h2>

                <p className="text-center mt-3 sm:mt-5 text-[20px]">{subText[page]}</p>

                <div className="pt-10 sm:pt-20 sm:px-11 page" dangerouslySetInnerHTML={{__html: content?.body}}/>
            </div>
        </div>

        {content?.extra && <div className="bg-[#333333]">
            <div className="xl:container px-3 m-auto py-11 page sm:px-11">
                <span className="text-white text-[20px]" dangerouslySetInnerHTML={{__html: content.extra}}></span>  
            </div>
        </div>}

        {content?.extraBottom && <div>
            <div className="xl:container px-3 m-auto py-11 page sm:px-11">
                <span className="text-[18px]" dangerouslySetInnerHTML={{__html: content.extraBottom}}></span>  
            </div>
        </div>}
        <Footer data={data?.setting}/>
    </>)
}

export const getStaticProps = (async () => {
    const setting = await fetch(process.env.API_URL+'setting')
    const page = await fetch(process.env.API_URL+'page')

    const data = await setting.json()
    const pages = await page.json()
  
    return { props: { data, pages } }
});
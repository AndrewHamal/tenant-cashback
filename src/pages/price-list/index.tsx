import { fetcher } from "@/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import useSWR from 'swr';
import { Skeleton } from "@/components/ui/skeleton"
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import SectionTable from "@/components/SectionTable";

const subText: any = {
    '/privacy-policy': 'Tenant’s Cashback',
    '/privacy-policy/': 'Tenant’s Cashback',
    '/terms-and-services/': 'You can view our complete terms and conditions below..',
    '/terms-and-services': 'You can view our complete terms and conditions below.',
    '/price-list': 'Civil Litigation',
    '/price-list/': 'Civil Litigation'
}

export default function PriceList({data, pages}: any)
{
    const page = usePathname();
    const content = pages?.page

    return (<>
        <Image className="absolute h-[100vh] top-0 z-[-1] bottom-0 left-0 right-0 object-cover" src={require('@/assets/bg.svg')} alt=""/>
        <Navbar data={data?.setting}/>
        <div className="xl:container px-3 m-auto">
            <div className="header py-10 sm:py-20">
                <h2 className="capitalize text-center text-5xl font-[700] text-[#1A1A1A]">{page?.replace('/', '')?.replaceAll('-', ' ')}</h2>

                <p className="text-center mt-3 sm:mt-5 text-[20px]">{subText[page]}</p>

                <div className="pt-10 sm:pt-20 sm:px-20 page" dangerouslySetInnerHTML={{__html: content?.price_content}}/>
            </div>
        </div>

        {content?.price_standard_rate && <div className="pt-11 xl:container px-3 m-auto ">
            <div className="sm:px-20">
                <h2 className="text-3xl font-[600]">Standard Hourly Rates</h2>
                <p className="text-[18px] pt-3">Guideline hourly rates</p>
                <table className="w-full m-auto mt-5">
                    <tbody>
                    {content?.price_standard_rate?.map((res: any, key: number) => (
                        <Fragment key={key}>
                        <tr className="">
                            <td className={key == 0 ? `text-[18px]` : ""}>
                            <p className="w-[104%] bg-white text-muted">{res?.item_col_1}</p>{" "}
                            </td>
                            <td className={key == 0 ? `text-[18px]` : ""}>
                            <p className="w-[104%] bg-white text-muted">{res?.item_col_2}</p>
                            </td>
                            <td className={key == 0 ? `text-[18px]` : ""}>
                            <p className="bg-white text-muted">{res?.item_col_3}</p>
                            </td>
                        </tr>
                        </Fragment>
                    ))}
                </tbody>
                </table>
          </div>
        </div>}

        <div className="mt-11 bg-[#8C51FF]">
            <div className="xl:container px-3 m-auto">
                <div className="sm:px-20 py-11">
                    <h2 className="text-3xl text-white font-[600]">{content?.price_banner?.[0]?.title}</h2>
                    <p className="text-white text-[18px] font-[500] pt-3" dangerouslySetInnerHTML={{__html: content?.price_banner?.[0]?.sub_title}}/>
                </div>
            </div>
        </div>

        <SectionTable data={pages?.third}/>
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
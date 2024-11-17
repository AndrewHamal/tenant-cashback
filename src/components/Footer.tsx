import { fileURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const text = `TENANT’S Cashback is simply dummy text of the printing and typesetting industry.
<br/><br/>
TENANT’S Cashback has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

export default function Footer({data}: any)
{
    return (<div className="bg-[#EDF1F5] footer">
        <div className="xl:container px-3 m-auto pt-11">
            <div className="grid sm:grid-cols-5 grid-cols-2 gap-5 sm:gap-10">
                <div className="sm:col-span-3 col-span-3 sm:w-[80%]">
                    <Link href={'/'}>
                        <img className="sm:w-[228px] w-[170px] mb-6" src={fileURL+data?.logo} alt="logo"/>
                    </Link>
                    <p className="text-[14px]" dangerouslySetInnerHTML={{__html: data?.footer_content}}/>

                    <div className="sm:pt-3">
                        <h4 className="font-[600]  mb-3">Follow Us</h4>

                        <div className="flex gap-3 items-center">
                            {
                                data?.social_media?.map((res:any, key: number) => (
                                    <Fragment key={key}>
                                        <Link target="_blank" href={res.social_handle}>
                                            <img alt="" className="w-[100%] h-auto" src={fileURL+res.icon}/>
                                        </Link>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div> 
                    <h4 className="font-[600] mb-2">Sitemap</h4>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/faqs'}>FAQs</Link></li>
                    <li><Link href={'/contact-us'}>Contact Us</Link></li>
                </div>

                <div> 
                    <h4 className="font-[600] mb-2">Policy</h4>
                    <li><Link href={'/terms-and-services'}>Terms & Condition</Link></li>
                    <li><Link href={'/privacy-policy'}>Privacy Policy</Link></li>
                    <li><Link href={'/price-list'}>Fees & Pricing</Link></li>
                </div>
            </div>

            <div className="border-t-[1px] flex flex-wrap pt-4 mt-4 pb-8">
                <p className="text-[14px]">© {(new Date().getFullYear())} Tenant’s Cashback - Reclaim Your Unprotected Tenancy Deposit</p>

                <div className="sm:ml-auto mt-2 sm:mt-0 flex gap-4">
                    <Link href={''} className="text-[14px]">Call our team</Link>
                    <Link href={''} className="text-[14px]">Check online</Link>
                </div>
            </div>
        </div>
    </div>)
}
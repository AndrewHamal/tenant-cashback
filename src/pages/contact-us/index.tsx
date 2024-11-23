import ClaimBox from "@/components/ClaimBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionFeatured from "@/components/SectionFeatured";
import { fileURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect } from "react";

export default function ContactUs({data}: any){
    return (<>
        <Navbar data={data?.setting}/>

        <section className="xl:container px-3 m-auto pt-8 md:pt-0">
            <div className="md:flex items-center h-[100%]">
               <div className="sm:w-[50%]">
                    <h1 className="leading-[32px] uppercase sm:leading-[70px] text-muted font-[500] sm:text-6xl"> Contact Us</h1>
                    <p className="text-[14px] sm:text-[20px] text-muted font-[600] py-3 sm:py-7">
                        <span dangerouslySetInnerHTML={{__html: data?.setting?.sub_title}}></span>
                    </p>

                    <Link href={`/eligibility#form-claim`}>
                        <button className="btn-primary font-[600] flex gap-[5px] items-center">
                            <Image
                            width={18}
                            alt=""
                            src={require("@/assets/icons/phone.svg")}
                            />
                            Claim Your Deposit Today
                        </button>
                    </Link>

               </div>
               <div className="ml-auto mt-5 mb-11 sm:my-0 pb-6 sm:w-[50%]">
                    <Image
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        className=" w-[100%] h-auto"
                        src={fileURL + data?.setting?.contact_image}
                    />
               </div>
            </div>
        </section>

        <section className="bg-[#333333]">
            <div className="xl:container m-auto px-3 py-[55px]">
            <div className="bg-primary py-6 sm:py-[50px] px-5 sm:px-[50px] rounded-[16px]">
                <div className="grid sm:grid-cols-2 gap-11 md:gap-[100px] items-center">
                    <div className="rounded-[8px] overflow-hiden" dangerouslySetInnerHTML={{__html: data?.setting?.iframe}}/>
                    <div>
                        <h2 className="font-[600] text-4xl text-white mb-5">You Can Also Visit Us At:</h2>
                        {
                            data?.setting?.address?.map((res: any, key: number) => (
                                <Fragment key={key}>
                                    <div className="flex items-center gap-2 pb-2">
                                        <Image alt="" className="brightness-0 invert" src={require('@/assets/icons/check-circle.svg')}/>
                                        <p className="text-[14px] sm:text-center sm:text-[16px] text-[#5C5C5B] text-white">{res?.address}</p>
                                    </div>
                                </Fragment>
                            ))
                        }
                        <h2 className="font-[500] text-2xl text-white pb-3 pt-3">Want to call? We're only one phone call away!</h2>
                        <p className="text-[14px] sm:text-[16px] text-[#5C5C5B] text-white">{data?.setting?.description}</p>
                        
                        <Link href={`tel:${data?.setting?.phone}`}>
                            <button className="bg-[#fff] hover:opacity-[0.7] transition duration-500 ease-in-out px-5 text-primary font-[600] mt-5 flex items-center gap-1 px-3 py-2 rounded-[8px]">
                                <Image className="filter clip" width={18} alt="" src={require("@/assets/icons/phone.svg")} />
                                {data?.setting?.phone}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
{/* 
        <SectionList
            type="flex"
            data={sectionData}
        /> */}

       <div className="mt-11"> 
        <SectionFeatured
                hideContact={false}
                data={data?.featured}
            />
       </div>

        <ClaimBox/>
    
        <Footer data={data?.setting}/>
    </>)
}

export const getStaticProps = (async () => {
    const res = await fetch(process.env.API_URL+'unprotected')
    const data = await res.json()
  
    return { props: { data } }
});
  
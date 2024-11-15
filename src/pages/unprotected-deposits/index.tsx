import ClaimBox from "@/components/ClaimBox";
import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionFeatured from "@/components/SectionFeatured";
import SectionList from "@/components/SectionList";
import SectionTable from "@/components/SectionTable";
import { fileURL } from "@/lib/utils";
import Image from "next/image";
import { Fragment, useEffect } from "react";

export default function UnprotectedDeposits({data}: any){
     // home about animation
    let start = 0
    var lastScrollTop = 0;

     function checkDownAnimation() {
         let p = window.pageYOffset
         if (start > 100) return
 
         if (p > 1314) {
             start = Math.abs(start + (p / 700))
         }
         const ele: any = document?.querySelector('.animate-text .h2');

         if(typeof ele !== 'undefined') ele.style.backgroundSize = `calc(${start}*2.5ch) 200%`;
     }
 
     function checkUpAnimation() {
        let p = window.pageYOffset
 
         if (p > 1150) {
            start = Math.abs(start - (p / 700))
         }
 
         const ele: any = document.querySelector('.animate-text .h2');
         if(typeof ele !== 'undefined') ele.style.backgroundSize = `calc(${start}*2.5ch) 200%`;
     }

    useEffect(() => {
        function listener() {
            const st = window.pageYOffset;

            if (st < 1150) {
                start = 0
            }
    
            if (st > lastScrollTop) {
                checkDownAnimation();
            } else {
                checkUpAnimation()
            }
    
            lastScrollTop = st;
        }
        
        document.addEventListener('scroll', listener, true)

        return () => {
            document.removeEventListener('scroll', listener, false)
            document.removeEventListener('scroll', listener, true)
        }
    }, [])
 
    const sectionData = {
        title: data?.unprotected?.items_title,
        sub_title: data?.unprotected?.items_sub_title,
        items: data?.unprotected?.items
    }

    return (<>
        <Navbar data={data?.setting}/>

        <section className="xl:container px-3 m-auto">
            <div className="py-7 sm:py-11">
                <h1 className="text-muted sm:px-0 text-4xl font-[700] text-center sm:text-left" dangerouslySetInnerHTML={{
                    __html: data?.unprotected?.title,
                    }}/>

                <p className="text-center sm:text-left text-[14px] sm:text-[18px] text-muted py-4 sm:py-9">
                    <span dangerouslySetInnerHTML={{ __html: data?.unprotected?.sub_title }}
                    ></span>
                </p>

                <img className="w-[100vw]" src={fileURL+data?.unprotected?.cover_image}/>

                <p className="text-[14px] sm:text-[18px] text-muted py-9">
                    <span
                        dangerouslySetInnerHTML={{ __html: data?.unprotected?.cover_message }}
                    ></span>
                </p>
            </div>
        </section>

        <section className="bg-[#8C51FF]/[0.2] py-10 sm:py-20">
            <div className="xl:container px-3 m-auto">
                <div className="grid sm:grid-cols-2">
                    <div className="items-center text-center">
                        <div className="flex">
                            <img className="w-[120px] h-[120px] m-auto" src={fileURL+data?.unprotected?.contact_info?.find((res: any) => res.type === 'person')?.data?.image} alt="" />
                        </div>
                        <h4 className="font-[600] text-[17px] mt-3 text-muted">{data?.unprotected?.contact_info?.find((res: any) => res.type === 'person')?.data?.name}</h4>
                        <h3 className="text-[20px] text-muted">{data?.unprotected?.contact_info?.find((res: any) => res.type === 'person')?.data?.designation}</h3>

                        <h3 className="text-[20px] text-primary py-5 font-[500]" dangerouslySetInnerHTML={{__html: data?.unprotected?.contact_info?.filter((res: any) => res.type === 'text')?.[0]?.data?.content}}/>

                        <div className="bg-white rounded-[8px] px-5 py-6">
                            <div className="text-[20px] text-muted font-[500]" dangerouslySetInnerHTML={{__html: data?.unprotected?.contact_info?.filter((res: any) => res.type === 'text')?.[1]?.data?.content}}/>
                            
                            <div className="flex gap-5 justify-center my-4">
                                <div className="gap-2 flex">
                                    <input type="radio"/>
                                    <label htmlFor="">Yes</label>
                                </div>

                                <div className="gap-2 flex">
                                    <input type="radio"/>
                                    <label htmlFor="">No</label>
                                </div>
                            </div>

                            <h3 className="text-[14px] text-left text-muted font-[300]" dangerouslySetInnerHTML={{__html: data?.unprotected?.contact_info?.filter((res: any) => res.type === 'text')?.[2]?.data?.content}}/>
                            
                            <div className="flex gap-2 items-center justify-center pt-5">
                                <Image width={18} src={require('@/assets/icons/lock.svg')} alt="" />
                                <p className="font-[300]"> 100% Secure SSL Encryption </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 sm:my-auto ml-auto">
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                                <div className="text-center">
                                    <h3 className="text-[20px] sm:text-[24px] font-[600] text-white">Talk to Us:</h3>
                                    <h3 className="text-[24px] sm:text-[32px] font-[600] text-white">{data?.setting?.phone}</h3>
                                </div>
                            </div>
                            <Image src={require('@/assets/contact-bg.svg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="xl:container px-3 m-auto animate-text">
            <div className="py-5 sm:py-11">
                <span className="clip h2 text-xl sm:text-4xl text-[#8A8A8A] py-5 font-[400] leading-[35px] sm:leading-[55px]">
                    {data?.unprotected?.contact_info?.filter((res: any) => res.type === 'text')?.[3]?.data?.content}
                </span>
            </div>

            <div>
                <Image alt="" className="w-[13%] sm:w-auto" src={require('@/assets/down-circle.svg')}/>
            </div>

            <div className="pb-5 sm:py-11 px-3 sm:px-0 flex justify-center gap-4">
                <Image alt=""  className="w-[10%] sm:w-auto"  src={require('@/assets/quote.svg')}/>
                <h3 className="text-center text-2xl sm:text-3xl text-muted py-5 font-[500] sm:leading-[55px]">
                    {data?.unprotected?.contact_info?.filter((res: any) => res.type === 'text')?.[4]?.data?.content}
                </h3>
            </div>

            <div>
                <h1 className="text-muted sm:px-11 sm:px-0 text-4xl font-[700] sm:text-center" dangerouslySetInnerHTML={{
                    __html: data?.unprotected?.contact_info?.filter((res: any) => res.type === 'header')?.[0]?.data?.content,
                    }}/>

                <p className="text-[14px] text-center sm:text-[18px] text-[#5C5C5B] sm:py-9">
                    <span
                        className="hidden sm:block"
                        dangerouslySetInnerHTML={{ __html: data?.unprotected?.contact_info?.filter((res: any) => res.type === 'sub_header')?.[0]?.data?.content }}
                    ></span>
                </p>


                <div className="sm:border-[1px] sm:px-4 pt-4  rounded-[8px] border-[#5C5C5B]">
                    {
                        data?.unprotected?.contact_info?.filter((res: any) => res.type === 'lists')?.map((res:any, key: number) => (
                            <Fragment key={key}>
                                <div className="flex items-center gap-2 pb-4">
                                    <Image alt="" src={require('@/assets/icons/check-circle.svg')}/>
                                    <p className="text-[14px] sm:text-center sm:text-[18px] text-[#5C5C5B]">{res?.data?.content}</p>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </section>


        <SectionList
            type="flex"
            data={sectionData}
        />

        <section className="xl:container px-3 m-auto pb-10 sm:pb-20">
            <ContactBox />
        </section>

        <div className="sm:py-11">
            <SectionFeatured
                hideContact={false}
                data={data?.featured}
            />
        </div>

        <SectionTable data={data?.third}/>
        <ClaimBox/>
    
        <Footer data={data?.setting}/>
    </>)
}

export const getStaticProps = (async () => {
    const res = await fetch(process.env.API_URL+'unprotected')
    const data = await res.json()
  
    return { props: { data } }
});
  
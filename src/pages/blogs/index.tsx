import { fetcher, subscribePost } from "@/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { fileURL } from "@/lib/utils";
import { Fragment, useState } from "react";
import useSWRInfinite from 'swr/infinite';
import dayjs from 'dayjs';
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

var relativeTime: any = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

export default function Blogs({setting}: any){
    const { toast } = useToast()
    const [email, setEmail] = useState('');
    const getKey = (pageIndex: any, previousPageData: any) => {
        if (previousPageData && !previousPageData.data.data.length) return null
        return `blogs?page=${pageIndex+1}`;
    };

    const { data, size, setSize, mutate: InstantResponseMutate, isValidating: chatValidating } = useSWRInfinite(
        getKey,
        fetcher
    );

    let postList: any[] = [];
    if (data) {
        data?.map((data: any) => {
            postList = [...postList, ...data.posts.data];
        });
    }

    function subscribe(){
        subscribePost(email)
        .then(res => {
            toast({
                title: res?.statusText,
                description: res?.data?.message,
            })
            setEmail('')
        }).catch(err => {
            toast({
                variant: "destructive",
                title: err?.response?.statusText,
                description: err?.response?.data?.message,
            })
        })
    }

    return (
        <>
           <Navbar data={setting?.setting}/>

            <section className="xl:container px-3 m-auto py-5 sm:py-20">
                <h2
                    className="text-4xl font-[700] text-muted text-center"
                >Our Blog</h2>
                <p
                    className="text-[#52525B] font-[400] text-[18px] text-center mt-5 sm:px-20"
                ><b>Subscribe</b> to stay informed on the latest updates about tenancy deposit <br/>claims, helpful tips, and what you need to know to ensure your rental <br/>agreements are as transparent as possible.</p>
            
                <div className="flex gap-2 sm:w-[40%] mx-auto py-11">
                    <div className="w-[100%]">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" className="w-[100%] h-[100%] border-[#D0D5DD] border-[1px] py-2 px-4 rounded-[8px]" />
                    </div>
                    <button onClick={subscribe} className="btn-primary">Subscribe</button>
                </div>
            </section>
           
            <section className="xl:container px-3 m-auto">
                <div>
                    <h2 className="text-[24px] font-[600] mb-7">Latest Blog Posts</h2>

                    {
                        !data ? <div className="flex flex-col space-y-3">
                        <Skeleton className="h-[175px] w-[350px] rounded-xl" />
                        <div className="space-y-2">
                          <Skeleton className="h-4 w-[350px]" />
                          <Skeleton className="h-4 w-[300px]" />
                        </div>
                      </div> :
                   
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <Link href={'/blogs/'+postList?.[0]?.slug}>
                                        <div className={'mb-5'}>
                                            <img className="rounded-[8px]" src={fileURL+postList?.[0]?.cover_photo_path}/>

                                            <div className="mt-5">
                                                <p className="text-[#6941C6] font-[600] text-[14px]">Posted on {dayjs(postList?.[0]?.published_at).format('DD-MM-YYYY')} by {postList?.[0]?.user?.name}</p>

                                                <div className="flex items-center">
                                                    <h3 className="text-[24px] font-[600] py-1">{postList?.[0]?.title}</h3>
                                                    <Image className="ml-auto" width={20} alt="" src={require("@/assets/icons/link.svg")} />
                                                </div>
                                                <p className="text-[667085]">{postList?.[0]?.sub_title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div className="">
                                    {
                                        postList?.slice(1, 3)?.map((res:any, key: number) => (
                                            <Fragment key={key}>
                                                <Link href={'/blogs/'+res.slug}>
                                                    <div className={'grid grid-cols-2 gap-6 mb-6'}>
                                                        <img className="rounded-[8px]" src={fileURL+res?.cover_photo_path}/>

                                                        <div>
                                                            <p className="text-[#6941C6] font-[600] text-[12px] sm:text-[14px]">Posted on {dayjs(res?.published_at).format('DD-MM-YYYY')} by {res?.user?.name}</p>

                                                            <h3 className="text-[18px] sm:text-[24px] font-[600] py-1">{res?.title}</h3>
                                                            <p className="text-[13px] sm:text-[16px] text-[#667085]">{res?.sub_title}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </Fragment>
                                        ))
                                    }
                                </div>
                            </div>
                        }
                    <div>
                        <img/>
                    </div>
                </div>
            </section>

            <section className="xl:container px-3 m-auto my-20">
                <div>
                    <h2 className="text-[24px] font-[600] mb-7">All Blogs</h2>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            postList?.map((res:any, key: number) => (
                                <Fragment key={key}>
                                    <Link href={'/blogs/'+res.slug}>
                                        <div className={'rounded-[12px] p-3 border-[1px] border-[#E8E8EA]'}>
                                            <img className="rounded-[8px] h-[200px] w-[100%] object-cover" src={fileURL+res?.cover_photo_path}/>

                                            <div>
                                                <div className="gap-2 flex flex-wrap mt-3">
                                                    {res?.categories?.map((cat:any, keyCat:number) => (
                                                        <p key={keyCat} className="px-2 py-[2px] rounded-full text-[11px] sm:text-[12px] text-[#4B6BFB] bg-[#4B6BFB]/[0.2]">
                                                            {cat.name}
                                                        </p>
                                                    ))}
                                                </div>

                                                <h3 className="text-[18px] sm:text-[24px] font-[600] py-1">{res?.title}</h3>
                                                <p className="text-[13px] sm:text-[16px] text-[#667085]">{res?.sub_title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </Fragment>
                            ))
                        }
                    </div>
                    <div>
                        <img/>
                    </div>
                </div>
            </section>

            <Footer data={setting?.setting}/>
        </>
    )
}

export const getStaticProps = (async () => {
    const res = await fetch(process.env.API_URL+'setting')
    const setting = await res.json()
  
    return { props: { setting } }
});
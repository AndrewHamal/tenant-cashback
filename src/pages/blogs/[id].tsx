import { fetcher } from "@/api";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { apiURL, fileURL } from "@/lib/utils";
import dayjs from "dayjs";
import Link from "next/link";
import { Fragment } from "react";
import useSWRInfinite from 'swr/infinite'
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function Blog({setting, blog}: any)
{
    console.log(blog)
    const data = blog?.post;

    const getKey = (pageIndex: any, previousPageData: any) => {
        if (previousPageData && !previousPageData.data.data.length) return null
        return `blogs?page=${pageIndex+1}`;
    };

    const { data: blogs, size, setSize, mutate: InstantResponseMutate, isValidating: chatValidating } = useSWRInfinite(
        getKey,
        fetcher
    );

    let postList: any[] = [];
    if (blogs) {
        blogs?.map((data: any) => {
            postList = [...postList, ...data.posts.data];
        });
    }

    return (
        <>
            <Navbar data={setting?.setting}/>
            <section>
                <div className="border-t-[1px]">
                    <div className="xl:container px-3 m-auto">
                        <div className="flex gap-2 py-3 text-muted m-auto">
                            <Link className="opacity-[0.7] font-[500] text-[14px] text-muted" href={'/'}>Home</Link> /
                            <Link className="opacity-[0.7] font-[500] text-[14px] text-muted" href={'/blogs'}>Blogs</Link> /
                            <p className="font-[500] text-[14px] text-muted">{data?.slug}</p>
                        </div>
                    </div>
                </div>
                {/* <div className="relative">
                    <div className="w-[100vw] py-20 bg-[#8C51FF] flex items-center justify-center">
                        <div className="xl:container m-auto px-3">
                            <div className="flex gap-4 justify-center mb-3">
                                {data?.categories?.map((cat:any, keyCat:number) => (
                                    <div key={keyCat} className="uppercase font-[500] text-white text-[18px]">
                                        {cat.name}
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-5xl font-[500] text-white text-center">{data?.title}</h2>
                            
                            <div className="flex items-center justify-center gap-4 w-[100%] text-white mt-4">
                                <p className="font-[500] text-[15px]">Published At: {dayjs(data?.published_at).fromNow()}</p>
                                <div className="w-[5px] h-[5px] bg-white rounded-full"/>
                                <p className="font-[500] text-[15px]">By: {data?.user?.name}</p> 
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="xl:container m-auto px-3 pt-5 pb-11">
                    <div className="flex flex-wrap sm:flex-nowrap gap-5 sm:gap-10">
                        <div className="md:w-[75%] sm:w-[65%]">
                            <img className="w-[100%] rounded-xl" src={fileURL+data?.cover_photo_path}/>

                            <h2 className="text-4xl font-[600] text-muted mt-8">{data?.title}</h2>
                            <h2 className="text-xl font-[400] text-muted mt-3">{data?.sub_title}</h2>
                            <div className="flex gap-4 mb-3 mt-3">
                                {data?.categories?.map((cat:any, keyCat:number) => (
                                    <div key={keyCat} className="px-3 py-[2px] rounded-full text-[15px] text-[#4B6BFB] bg-[#4B6BFB]/[0.2]">
                                        {cat.name}
                                    </div>
                                ))}
                            </div>
                            <div className="page mt-11" dangerouslySetInnerHTML={{__html: data?.body}}></div>
                            
                            <hr className="mt-11 mb-20"/>
                            <h3 className="font-[500] text-2xl">Tags</h3>
                            <div className="flex gap-4 mb-3 mt-3">
                                {data?.tags?.map((cat:any, keyCat:number) => (
                                    <p key={keyCat} className="px-3 py-[3px] rounded-full text-[14px] text-[#4B6BFB] border-[1px] border-[#4B6BFB]/[0.2]">
                                        {cat.name}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-[25%] sm:w-[35%]">
                            <h3 className="font-[500] text-2xl mb-5">Latest blogs</h3>

                            {
                                postList?.slice(0, 3)?.map((res:any, key: number) => (
                                    <Fragment key={key}>
                                        <Link href={'/blogs/'+res.slug}>
                                            <div className={'mb-6 border p-3 rounded-xl'}>
                                                <img className="rounded-[8px]" src={fileURL+res?.cover_photo_path}/>

                                                <div className="mt-2">
                                                    <p className="text-[#6941C6] font-[500] text-[13px]">Posted {dayjs(res?.published_at).fromNow()} by {res?.user?.name}</p>

                                                    <h3 className="text-[20px] font-[600] pb-1">{res?.title}</h3>
                                                    <p className="text-[667085] text-[15px]">{res?.sub_title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                </div>

                
            </section>
            <Footer data={setting?.setting}/>
        </>
    )
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: false 
    };
}

export const getStaticProps = (async ({params}: any) => {
    const res = await fetch(apiURL+'setting')
    const setting = await res.json()

    const blogs = await fetch(apiURL+'blogs/'+params?.id)
    const blog = await blogs.json()

    return { props: { setting, blog } }
});

export default Blog;
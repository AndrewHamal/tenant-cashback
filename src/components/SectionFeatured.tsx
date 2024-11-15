import Image from "next/image";
import { Fragment } from "react";
import ContactBox from "./ContactBox";
import { fileURL } from "@/lib/utils";

export default function SectionFeatured({data, hideContact=true}: any)
{
    return (<section>
        <h2
          className="text-4xl text-center pb-4"
          dangerouslySetInnerHTML={{ __html: data?.title }}
        />
        
        <div className="py-11">
            <div className="relative min-h-[90px] sm:min-h-[140px] flex">
                <Image
                    className="w-[100vw] h-[100%] absolute top-0 bottom-0 left-0 right-0"
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    src={require("@/assets/success.png")}
                />
                <div className="xl:container m-auto px-3 relative">
                    <div className="flex flex-wrap py-4 gap-4 sm:gap-20 items-center justify-between">
                    {data?.items?.map((res: any, key: number) => (
                        <Fragment key={key}>
                        <img
                            alt={res.title}
                            className="w-[20%] sm:w-[15%] h-auto"
                            src={`${fileURL}${res?.logo}`}
                        />
                        </Fragment>
                    ))}
                    </div>
                </div>
            </div>

            {hideContact && <div className="mt-11 xl:container px-3 mx-auto"> 
                <ContactBox />
            </div>}
        </div>
      </section>)
}
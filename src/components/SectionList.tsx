import Image from "next/image";
import { Fragment } from "react";

export default function SectionList({data, type=''}: any)
{
    return (<section className="xl:container m-auto px-3">
    <div className="py-10 sm:py-20">
      <h2 className="text-muted px-11 sm:px-0 text-4xl font-[700] text-center leading-[56px]">
        <span dangerouslySetInnerHTML={{__html: data?.title}}></span>
    </h2>
      <p className="text-[#52525B] font-[400] text-[18px] text-center mt-5 sm:px-20">
        <span dangerouslySetInnerHTML={{__html: data?.sub_title}}></span>
      </p>

      <div className={type === 'flex' ? "flex flex-wrap items-center justify-center gap-1 mt-8" : "gap-4 sm:gap-0 grid grid-cols-2 xl:grid-cols-3 mt-11 features"}>
        {data?.items?.map((res: any, key: number) => (
          <Fragment key={key}>
            <div className={type === 'flex' ? "w-[49%] md:w-[33%] sm:py-7 sm:px-10" : "sm:py-7 sm:px-10"}>
              <div className="w-[100%] flex justify-center mb-4 sm:mb-8">
                <Image
                  width={46}
                  alt=""
                  src={require("@/assets/icons/tick-house.svg")}
                />
              </div>
              <h4 className="text-muted font-[700] text-[18px] text-center mb-2">
                {res?.title}
              </h4>
              <p className="text-[#52525B] text-center leading-[26px]">
                {res?.description}
              </p>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  </section>)
}
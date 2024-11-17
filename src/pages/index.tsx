import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import ContactBox from "@/components/ContactBox";
import ClaimBox from "@/components/ClaimBox";
import { Fragment } from "react";
import { fileURL } from "@/lib/utils";
import SectionList from "@/components/SectionList";
import SectionFeatured from "@/components/SectionFeatured";
import SectionTable from "@/components/SectionTable";
import OnlineForm from "@/components/OnlineForm";
import Link from "next/link";

export default function Home({ homepage }: any) {
  return (
    <>
      <Navbar data={homepage?.setting} />

      <section className="xl:container m-auto px-3 md:h-[616px] py-4 sm:py-0">
        <div className="md:flex items-center h-[100%]">
          <div className="md:w-[55%]">
            <h1 className="leading-[32px] uppercase sm:leading-[70px] text-muted font-[700] sm:text-5xl">
              <span
                className="hidden sm:block"
                dangerouslySetInnerHTML={{
                  __html: homepage?.hero?.title_desktop,
                }}
              ></span>
              <span
                className="sm:hidden"
                dangerouslySetInnerHTML={{
                  __html: homepage?.hero?.title_mobile,
                }}
              ></span>
            </h1>

            <p className="text-[14px] sm:text-[20px] text-muted font-[600] py-9">
              <span
                className="hidden sm:block"
                dangerouslySetInnerHTML={{ __html: homepage?.hero?.sub_title }}
              ></span>
            </p>

            <div className="flex gap-2 sm:gap-4">
              <Link target="_blank" href={'https://mydepositclaims.co.uk'}>
                <button className="btn-primary font-[600] flex gap-[5px] items-center">
                  <Image
                    width={18}
                    alt=""
                    src={require("@/assets/icons/phone.svg")}
                  />
                  Claim Your Deposit Today
                </button>
              </Link>

              <button className="btn-primary-outlined gap-[5px] flex items-center">
                See If You’re Eligible
                <Image
                  width={20}
                  alt=""
                  src={require("@/assets/icons/tick.svg")}
                />
              </button>
            </div>
          </div>

          <div className="mt-9 md:mt-0 ml-auto flex justify-end hero-img">
            <Image
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-[100%] h-auto"
              src={fileURL + homepage?.hero?.image}
            />
          </div>
        </div>
      </section>

      <SectionList data={homepage?.second}/>
      <OnlineForm data={homepage?.unprotected} setting={homepage?.setting}/>
      <SectionTable data={homepage?.third}/>

      <section className="xl:container m-auto px-3 py-20 why-choose">
        <h2
          className="text-muted px-11 sm:px-0 text-4xl font-[700] text-center"
          dangerouslySetInnerHTML={{ __html: homepage?.forth?.title }}
        />
        <p
          className="text-[#52525B] font-[400] text-[18px] text-center mt-5 sm:px-20"
          dangerouslySetInnerHTML={{ __html: homepage?.forth?.sub_title }}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-11">
          {homepage?.forth?.items?.map((res: any, key: number) => (
            <Fragment key={key}>
              <div className="p-5 border-linear">
                <img src={fileURL + res?.icon} alt="" />
                <h4 className="text-[18px] font-[700] my-3 pr-5 text-muted">
                  {res?.title}
                </h4>
                <p className="text-muted">{res?.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </section>

  
      <SectionFeatured
        data={homepage?.featured}
      />

      <ClaimBox />

      <section className="bg-[#333333] sixth">
        <div className="xl:container m-auto px-3 py-[55px]">
          <div className="bg-primary py-8 sm:py-11 px-6 sm:px-[80px] rounded-[16px]">
            <h2
              className="font-[700] text-4xl text-white"
              dangerouslySetInnerHTML={{ __html: homepage?.sixth?.title }}
            />
            <div
              className="text-white py-5"
              dangerouslySetInnerHTML={{ __html: homepage?.sixth?.sub_title }}
            />

            <div
              className="text-white content"
              dangerouslySetInnerHTML={{ __html: homepage?.sixth?.content?.replaceAll(/<img\s+([^>]*?)src="([^"]*?)"/g, (match: any, attributes: any, oldSrc: string) => {
                // Construct the new src by appending text
                const newSrc = `${fileURL}${oldSrc?.replace('/storage', '')}`;
                return `<img ${attributes}src="${newSrc}"`;
              })}}
            />
          </div>
        </div>
      </section>

      <section className="xl:container m-auto px-3 py-11">
        <div className="py-11">
          <h2
            className="text-4xl font-[700] text-muted text-center"
            dangerouslySetInnerHTML={{ __html: homepage?.seventh?.title }}
          />
          <p
            className="text-[#52525B] font-[400] text-[18px] text-center mt-5 sm:px-20"
            dangerouslySetInnerHTML={{ __html: homepage?.seventh?.sub_title }}
          />

          {homepage?.seventh?.items?.map((res: any, key: number) => (
            <Fragment key={key}>
              <div className="pt-5 sm:pt-20 pb-5 grid sm:grid-cols-2 gap-11">
                {key % 2 != 0 && (
                  <div className="order-1 sm:order-[unset]">
                    <img alt={res.title} src={fileURL + res?.image} />
                  </div>
                )}

                <div>
                  <div className="linear-text leading-[70px]">{key + 1}</div>
                  <h2 className="text-[16px] sm:text-[24px] text-muted font-[700]">
                    {res.title}
                  </h2>
                  <p
                    className="text-[14px] sm:text-[16px] text-muted my-4"
                    dangerouslySetInnerHTML={{ __html: res?.description }}
                  />

                  <div className="pt-2">
                    <button className="btn-primary">
                      <div className="px-1 flex items-center gap-[5px]">
                        {key < 2 && (
                          <img
                            width={18}
                            alt=""
                            src={fileURL + res?.button_icon}
                          />
                        )}
                        {res?.button_title}
                        {key == 2 && (
                          <img
                            width={9}
                            className="ml-2"
                            alt=""
                            src={fileURL + res?.button_icon}
                          />
                        )}
                      </div>
                    </button>
                  </div>
                </div>

                {key % 2 == 0 && (
                  <div>
                    <img
                      // className="order-1 sm:order-0"
                      alt={res.title}
                      src={fileURL + res?.image}
                    />
                  </div>
                )}
              </div>
            </Fragment>
          ))}
          <p
            className="text-center text-muted text-[18px] pt-11"
            dangerouslySetInnerHTML={{ __html: homepage?.faq?.description }}
          />
        </div>
      </section>

      <section className="xl:container m-auto px-3 faqs">
        <h2
          className="text-5xl font-[600] leading-[3.4rem] text-muted text-center mb-11"
          dangerouslySetInnerHTML={{ __html: homepage?.faq?.title }}
        />

        <Accordion
          defaultValue="item-2"
          type="single"
          collapsible
          className="w-full sm:px-[40px]"
        >
          {homepage?.faq?.items?.map((res: any, key: number) => (
            <Fragment key={key}>
              <AccordionItem value={`item-${key}`}>
                <AccordionTrigger className="flex items-center gap-3 w-[100%]">
                  <div className="bg-[#F7F8F8] text-muted border-[#D7D9E0] border-[1px] min-w-[39px] h-[39px] rounded-lg flex items-center justify-center font-[400] text-[16px]">
                    {key + 1}
                  </div>

                  {res?.title}

                  <div className="ml-auto">
                    <Image
                      src={require("@/assets/icons/arrow-down.svg")}
                      alt=""
                    />
                  </div>
                </AccordionTrigger>

                <AccordionContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: res?.description }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            </Fragment>
          ))}
        </Accordion>
      </section>

      <section className="xl:container m-auto px-3 mt-8 mb-11">
        <ContactBox />
      </section>

      <ClaimBox />

      <Footer data={homepage?.setting} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(process.env.API_URL + "home");
  const homepage = await res.json();

  return { props: { homepage } };
};

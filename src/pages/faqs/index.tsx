import ContactBox from "@/components/ContactBox";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import Image from "next/image";
import { Fragment } from "react";

export default function Faq({data}: any)
{
    return (
        <>
            <Navbar data={data?.setting}/>
            <section className="xl:container m-auto px-3 faqs">
                <div className="mt-20 pb-11">
                    <h2 className="text-4xl font-[600] leading-[3.4rem] text-muted text-center"
                    >Frequently asked questions
                    </h2>

                    <p className="text-[#52525B] font-[400] text-[18px] text-center mt-5 sm:px-20">
                            Everything you need to know about the product and billing.
                        </p>
                </div>

                <Accordion
                    defaultValue="item-2"
                    type="single"
                    collapsible
                    className="w-full sm:px-[40px]"
                >
                {data?.faq?.items?.map((res: any, key: number) => (
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
            <section className="xl:container m-auto px-3 py-11">
                <div className="border-[unset] bg-[#F9FAFB] sm:mx-[40px] p-[20px] sm:p-[50px] rounded-[8px]">
                    <div className="flex mb-3">
                        <Image
                            className="w-[10%] mx-auto"
                            src={require("@/assets/touch.png")}
                            alt=""
                        />
                    </div>

                    <h5 className="text-[18px] leading-[24px] sm:text-[20px] sm:leading-[30px] font-[600] text-center mb-2 text-muted">Still have questions?</h5>
                    <p className="text-center mb-2 text-[18px] text-[#667085]">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>

                    <div className="text-center mt-5">
                        <button className="mx-auto btn-primary px-2 flex items-center gap-[5px]">
                            Get in touch
                        </button>
                    </div>
                </div>
            </section>

            <section className="xl:container m-auto px-3 pb-20">
                <ContactBox/>
            </section>

            <Footer data={data?.setting}/>
        </>
    )
}

export const getStaticProps = (async () => {
    const res = await fetch(process.env.API_URL+'faq')
    const data = await res.json()
  
    return { props: { data } }
});
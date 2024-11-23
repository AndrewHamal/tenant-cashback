import { sendEmail } from "@/api";
import { useToast } from "@/hooks/use-toast";
import { fileURL } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function OnlineForm({ data, setting, hideContact=true }: any) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const [answer, setAnswer] = useState("");
 
  const yesContent = () => {
    return <div className="bg-white rounded-[8px] px-5 py-6 h-fit">
        <h3 className="text-[20px] text-center text-muted font-[500]">
            Have you paid a tenancy deposit within the last 6 years?
        </h3>
        <div className="flex gap-5 justify-center my-4">
            <div className="gap-2 flex">
            <input
                defaultChecked={true}
                onChange={(e) => setAnswer(e.target.value)}
                type="radio"
                id="yes_101"
            />
            <label className="text-muted" htmlFor="yes_101">Yes</label>
            </div>

            <div className="gap-2 flex">
            <input
                onChange={(e) => setAnswer(e.target.value)}
                type="radio"
                id="no"
                value={"no"}
                name="answer_first_1"
            />
            <label htmlFor="no" className="text-muted">No</label>
            </div>
        </div>

        <h3 className="text-[20px] text-center text-muted font-[500]">
            Was your deposit placed into a government scheme?
        </h3>
        <p className="text-muted">Either the TDS, the DPS or My Deposits</p>
        <div className="flex items-center flex-wrap gap-5 justify-center my-4">
            <div className="gap-2 justify-center flex w-[100%]">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    value={"yes-2"}
                    id="yes-2"
                    name="answer_second"
                />
                <label className="text-muted" htmlFor="yes-2">Yes, I'm certain it was</label>
            </div>

            <div className="gap-2 justify-center flex w-[100%]">
                <input
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-7"
                    value={"no-2"}
                    name="answer_second"
                />
                <label className="text-muted" htmlFor="no-7">Yes, but more than 30 days after I paid it</label>
            </div>

            <div className="gap-2 flex">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-8"
                    value={"no-2"}
                    name="answer_second"
                />
                <label className="text-muted" htmlFor="no-8">No I'm certain it wasn't</label>
            </div>

            <div className="gap-2 flex">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-9"
                    value={"no-2"}
                    name="answer_second"
                />
                <label className="text-muted" htmlFor="no-9">I'm not sure</label>
            </div>
        </div>
        
        <p onClick={() => setAnswer('')} className="font-[500] text-[14px] cursor-pointer text-muted">Need to start again?</p>
    </div>
  }

  const yesContent2 = () => {
    const eleAll = document.querySelectorAll('input');
    eleAll.forEach((res: any) => {
        res.checked = false     
    })
    
    return <div className="bg-white rounded-[8px] px-5 py-6 h-fit">
        <h3 className="text-[20px] text-center text-muted font-[500]">
            Have you ever been provided with a letter or email from the TDS, the DPS or My Deposits to tell you they have received your deposit?
        </h3>

        <div className="flex items-center flex-wrap gap-5 justify-center my-4">
            <div className="gap-2 justify-center flex w-[100%]">
                <input
                    defaultValue={''}
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-17"
                    value={"no-2"}
                    name="answer_second_1"
                />
                <label className="text-muted" htmlFor="no-17">Yes, but more than 30 days after I paid it</label>
            </div>

            <div className="gap-2 flex">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-18"
                    value={"no-2"}
                    name="answer_second_1"
                />
                <label className="text-muted" htmlFor="no-18">Yes</label>
            </div>

            <div className="gap-2 flex">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-19"
                    value={"no-2"}
                    name="answer_second_1"
                />
                <label className="text-muted" htmlFor="no-19">No</label>
            </div>

            <div className="gap-2 flex">
                <input
                    defaultChecked={false}
                    onChange={(e) => setAnswer(e.target.value)}
                    type="radio"
                    id="no-10"
                    value={"no-2"}
                    name="answer_second_1"
                />
                <label className="text-muted" htmlFor="no-10">I'm not sure</label>
            </div>
        </div>
        
        <p onClick={() => setAnswer('')} className="font-[500] text-[14px] cursor-pointer text-muted">Need to start again?</p>
    </div>
  }

  function handleSubmit(e: any){
    setLoading(true)
    e.preventDefault()
    let data = {};
    let formData = new FormData(e.target)

    formData.forEach((res, key) => {
        data = {...data, [key]: res}
    })

    sendEmail(data)
    .then(() => {   
        e.target.reset()
        toast({
            title: 'Success',
            description: 'Thank You! We will call back soon with your status!',
        })
        setAnswer("")
        setLoading(false)
    }).catch(() => {
        setLoading(false)
    });
  }

  const form = (
    <div className="bg-white rounded-[8px] px-5 py-6 h-fit">
        <h3 className="text-[20px] text-center text-muted font-[500]">
            🎉 You have a claim, please enter your deposit details below and we will confirm the minimum and maximum value of your claim
        </h3>
        <form onSubmit={handleSubmit} className="mt-3">
            <h3 className="text-[20px] text-center text-muted font-[500]">
                How much was the deposit you paid?* (£)
            </h3>

            <input type="number" required name="deposit" placeholder="1000" className="form-control w-[100%] mt-6"/>
            <div className="grid grid-cols-2 gap-2 my-3">
                <input type="text" required name="first_name" placeholder="First Name" className="form-control w-[100%]"/>
                <input type="text" required name="last_name" placeholder="Last Name" className="form-control w-[100%]"/>
            </div>
            <input type="number" required name="phone" placeholder="07900 123456 (So we can send you updates via SMS)" className="form-control w-[100%] mb-3"/>
            <input type="number" name="phone_2" placeholder="0121 123 4567 (If you have one)" className="form-control w-[100%] mb-3"/>
            <input type="email" required name="email" placeholder="name@email.co.uk (So we can update you via email)" className="form-control w-[100%]"/>

            <button disabled={loading} className="btn-primary mt-4 flex justify-center m-auto gap-2">
                {loading && <div className="scale-[0.7]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-circle animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg></div>} Check my deposit
            </button>

         
            <p onClick={() => setAnswer('')} className="font-[500] cursor-pointer text-[14px] mt-6 text-muted">Need to start again?</p>
        </form>
    </div>
  )

  const renderView = () => {
    switch (answer) {
      case "yes":
        return yesContent();
      case "no":
        return (
          <div className="bg-white rounded-[8px] px-5 py-6 h-fit">
            <h3 className="text-[20px] text-center text-muted font-[500]">
              ☹️ Sorry, you don’t have a claim. Would you like to check again?
            </h3>

            <button onClick={() => setAnswer('')} className="bg-[#F1F1F1] rounded-lg px-2 py-1 my-4 text-muted">Yes</button>
            
            <p onClick={() => setAnswer('')} className="font-[500] cursor-pointer text-[14px] text-muted">Need to start again?</p>
          </div>
        );
      case 'yes-2':
        return yesContent2();
      case 'no-2':
        return form;
      default:
        return (
          <div className="bg-white rounded-[8px] px-5 py-6">
            <div
              className="text-[20px] text-muted font-[500]"
              dangerouslySetInnerHTML={{
                __html: data?.contact_info?.filter(
                  (res: any) => res.type === "text"
                )?.[1]?.data?.content,
              }}
            />

            <div className="flex gap-5 justify-center my-4">
              <div className="gap-2 flex">
                <input
                  onChange={(e) => setAnswer(e.target.value)}
                  type="radio"
                  value={"yes"}
                  id="yes"
                  name="answer_first"
                />
                <label className="text-muted" htmlFor="yes">Yes</label>
              </div>

              <div className="gap-2 flex">
                <input
                  onChange={(e) => setAnswer(e.target.value)}
                  type="radio"
                  id="no"
                  value={"no"}
                  name="answer_first"
                />
                <label className="text-muted" htmlFor="no">No</label>
              </div>
            </div>

            <h3
              className={`text-[14px] ${!hideContact ? 'text-center ' : 'text-left '}text-muted font-[400]`}
              dangerouslySetInnerHTML={{
                __html: data?.contact_info?.filter(
                  (res: any) => res.type === "text"
                )?.[2]?.data?.content,
              }}
            />

            <div className="flex gap-2 items-center justify-center pt-5">
              <Image
                width={18}
                src={require("@/assets/icons/lock.svg")}
                alt=""
              />
              <p className="font-[300] text-muted"> 100% Secure SSL Encryption </p>
            </div>
          </div>
        );
    }
  };

  return (
    <section className={`bg-[#8C51FF]/[0.2] ${!hideContact ? 'sm:px-11 py-10' : 'sm:py-20 pb-8'}`} id="form-claim">
      <div className="xl:container px-3 m-auto">
        <div className={`${hideContact && 'grid sm:grid-cols-2 gap-10'} sm:gap-0`}>
          {hideContact && <div className="mt-10 sm:my-auto mr-auto">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="text-center max-w-[60%] px-4">
                  <div>
                  <h3 className="text-[12px] sm:text-[14px] md:text-[19px] text-left font-[600] text-white">
                    ✔ Quick & Easy Process.<br />
                    ✔ 100% Confidential.<br />
                    ✔ Free Consultation.
                  </h3>
                  </div>

                  <Link href={`tel:${setting?.phone}`}>
                  <button className="mt-5 hover:opacity-[0.7] btn-primary-outlined btn-white w-[100%] font-[600] flex justify-center items-center gap-[5px]">
                      <Image width={18} alt="" src={require("@/assets/icons/phone.svg")} />
                      {setting?.phone}
                  </button>
                  </Link>

                  {/* <button className="btn-primary-outlined"> {setting?.phone}</button> */}
                  {/* <h3 className="text-[24px] sm:text-[32px] font-[600] text-white">
                   
                  </h3> */}
                </div>
              </div>
              <Image src={require("@/assets/contact-bg.svg")} alt="" />
            </div>
          </div>}

          <div className="items-center text-center">
            <div className="flex">
              <img
                className="w-[120px] h-[120px] m-auto"
                src={
                  fileURL +
                  data?.contact_info?.find((res: any) => res.type === "person")
                    ?.data?.image
                }
                alt=""
              />
            </div>
            <h4 className="font-[600] text-[17px] mt-3 text-muted">
              {
                data?.contact_info?.find((res: any) => res.type === "person")
                  ?.data?.name
              }
            </h4>
            <h3 className="text-[20px] text-muted">
              {
                data?.contact_info?.find((res: any) => res.type === "person")
                  ?.data?.designation
              }
            </h3>

            <h3
              className="text-[20px] text-primary py-5 font-[500]"
              dangerouslySetInnerHTML={{
                __html: data?.contact_info?.filter(
                  (res: any) => res.type === "text"
                )?.[0]?.data?.content,
              }}
            />

            {renderView()}
          </div>
        </div>
      </div>
    </section>
  );
}

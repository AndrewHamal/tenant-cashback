import Image from "next/image";

export default function ContactBox()
{
    return (
        <div className="border-[unset] bg-[#8C51FF]/[0.2] sm:mx-[40px] p-[20px] sm:p-[50px] rounded-[8px]">
            <h5 className="text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px] font-[600] text-center mb-2 text-muted">Got any other questions or prefer to speak to someone?</h5>
            
            <div className="flex gap-8 justify-center my-5">
                <Image className="w-[90px]" alt="" src={require('@/assets/one.png')}/>
                <Image className="w-[90px]" alt="" src={require('@/assets/two.png')}/>
                <Image className="w-[90px]" alt="" src={require('@/assets/three.png')}/>
            </div>
            <p className="text-center mb-2 text-[18px]">Call us at:</p>

            <div className="gap-3 flex mt-5 items-center">
            <button className="ml-auto btn-primary flex items-center gap-[5px] font-[600]">
                <Image width={18} alt="" src={require('@/assets/icons/phone.svg')}/>
                08XX-XXX-XXXX
            </button>

            <div>
                or
            </div>

            <button className="mr-auto btn-primary-outlined">Use our online  form</button>
            </div>
        </div>
    )
}
import Image from "next/image";
import Link from "next/link";

export default function ContactBox({phone}: any)
{
    return (
        <div className="border-[unset] bg-[#8C51FF]/[0.2] sm:mx-[40px] p-[20px] sm:p-[50px] rounded-[8px]">
            <h5 className="text-[18px] leading-[24px] sm:text-[24px] sm:leading-[30px] font-[600] text-center mb-2 text-muted">Got any other questions or prefer to speak to someone?</h5>

            <p className="text-center my-4 text-[18px] text-muted">Call us at:</p>

            <div className="gap-3 flex items-center">

            <Link className="ml-auto" href={`tel:${phone}`}>
                <button className="btn-primary flex items-center gap-[5px] font-[600]">
                    <Image width={18} alt="" src={require('@/assets/icons/phone.svg')}/>
                    08XX-XXX-XXXX
                </button>
            </Link>

            <div className="text-muted">
                or
            </div>

            <Link className="mr-auto" href={'/#form-claim'}>
                <button className="btn-primary-outlined">Use our online  form</button></Link>
            </div>
        </div>
    )
}
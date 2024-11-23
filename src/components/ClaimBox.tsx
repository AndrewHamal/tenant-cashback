import Image from "next/image";
import Link from "next/link";

export default function ClaimBox()
{
    return <section className="bg-[#8C51FF]">
    <div className="xl:container px-3 m-auto sm:flex gap-5 py-[30px] sm:py-[67px]">
      <h2 className="text-xl sm:text-4xl md:text-5xl font-[600] text-center sm:text-left text-white">
        Ready to Claim What’s Yours?
      </h2>

      <Link className="my-auto ml-auto mr-auto sm:mr-0 sm:ml-auto" href={"/eligibility"}>
        <button className="mt-3 m-auto hover:opacity-[0.7] transition duration-500 ease-in-out sm:mt-0 text-muted font-[600] text-[14px] sm:text-[16px] bg-white rounded-full flex items-center py-2 sm:w-auto px-5 sm:px-6">
          Get Started
          <Image width={18} alt="" className="ml-2 sm:ml-5" src={require('@/assets/icons/arrow-right.svg')}/>
        </button>
      </Link>
    </div>
  </section>
}
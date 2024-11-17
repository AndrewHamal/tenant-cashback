import Image from "next/image";
import Link from "next/link";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { fileURL } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar({ data }: any) {
    const route = usePathname()

    console.log(route)
  const Menu = () => (
    <>
      <li>
        <Link className={['/', ''].includes(route) ? "active" : ''} href={"/"}>
          Home
        </Link>
      </li>
      <li>
        <Link className={['/unprotected-deposits', '/unprotected-deposits/'].includes(route) ? "active" : ''} href={"/unprotected-deposits"}>Unprotected Deposits</Link>
      </li>
      <li>
        <Link className={['/faqs', '/faqs/'].includes(route) ? "active" : ''} href={"/faqs"}>FAQs</Link>
      </li>
      <li>
        <Link className={['/blogs', '/blogs/'].includes(route) ? "active" : ''} href={"/blogs"}>Blog</Link>
      </li>
      <li>
        <Link className={['/contact-us', '/contact-us/'].includes(route) ? "active" : ''} href={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="bg-white">
        <div className="navbar flex w-[100%] items-center xl:container px-3 m-auto py-[15px]">
        <div className="logo">
            <Link href={"/"}>
            <img
                className="md:sm:w-[228px] sm:w-[208px] w-[170px]"
                src={fileURL + data?.logo}
                alt="logo"
            />
            </Link>
        </div>

        {/* desktop menu  */}
        <div className="mx-auto block hidden md:block">
            <ul className="flex gap-6">
            <Menu />
            </ul>
        </div>

        {/* mobile menu */}
        <div className="md:hidden block ml-auto">
            <Drawer shouldScaleBackground={true} setBackgroundColorOnScale={true}>
            <DrawerTrigger className="ml-auto">
                <Image src={require("@/assets/icons/hammenu.svg")} alt="menu" />
            </DrawerTrigger>
            <DrawerContent className="bg-white">
                <Menu />
            </DrawerContent>
            </Drawer>
        </div>

        <div className="gap-3 hidden md:flex right-outer">
            <Link href={`tel:${data?.phone}`}>
                <button className="btn-primary-outlined flex items-center gap-[5px]">
                    <Image width={18} alt="" src={require("@/assets/icons/phone.svg")} />
                    {data?.phone}
                </button>
            </Link>

            <Link target="_blank" href={'https://mydepositclaims.co.uk'}>
              <button className="btn-primary font-[600]">
                  <div className="px-5">Can I Claim?</div>
              </button>
            </Link>
        </div>
        </div>
    </div>
  );
}

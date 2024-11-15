import { Fragment } from "react";

export default function SectionTable({data}: any)
{
    return ( <div className="bg-[#333333] deposit-claim py-2">
    <section className="xl:container m-auto px-3 py-[50px]">
      <div>
        <h2 className="text-white px-11 sm:px-0 text-3xl font-[700] text-center">
          {data?.title}
        </h2>
        <p
          className="text-[#A1A1AA] font-[400] text-[18px] text-center mt-5 sm:px-20"
          dangerouslySetInnerHTML={{ __html: data?.sub_title }}
        />

        <div className="pt-11 mx-20">
          <table className="w-full m-auto">
            <tbody>
              {data?.items?.map((res: any, key: number) => (
                <Fragment key={key}>
                  <tr className="">
                    <td className={key == 0 ? `text-[18px]` : ""}>
                      <p className="w-[104%]">{res?.item_col_1}</p>{" "}
                    </td>
                    <td className={key == 0 ? `text-[18px]` : ""}>
                      <p className="w-[104%]">{res?.item_col_2}</p>
                    </td>
                    <td className={key == 0 ? `text-[18px]` : ""}>
                      <p className="">{res?.item_col_3}</p>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>)
}
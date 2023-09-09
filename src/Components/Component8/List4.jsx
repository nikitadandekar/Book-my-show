import React from "react";

function List4() {
  return (
    <div className="mt-32">
      {/* <img
        className=" -z-50"
        src="https://assets-in.bmscdn.com/static/2021/06/security-imag.jpeg"
      ></img> */}
      <h1 className="text-[rgb(31,37,58)] text-[48px] font-bold leading-[56px] text-center">
        Sit back and watch
      </h1>
      <h1 className="text-[rgb(31,37,58)] text-[48px] font-bold leading-[56px] text-center">
        {" "}
        your event come to life
      </h1>
      <p className="text-[rgb(31,37,58)] text-[18px] leading-[20px] text-center font-normal font-sans mt-8">
        Events maybe all fun and games, but we take it seriously. We ensure our{" "}
      </p>
      <p className="text-[rgb(31,37,58)] text-[18px] leading-[20px] text-center font-normal font-sans">
        customer’s security so that you don’t have to.
      </p>
      <p className="text-[rgb(170,171,172)] cursor-pointer mt-16 ml-80 mb-8">
        <a href="/explore/home" className="">
          Online Tickets
        </a>
        <a href="/list-your-show" className="pl-5">
          List Your Show
        </a>
      </p>
      <div className="bg-[rgb(242,242,242)]">
        <div className="pt-6 ml-80 w-[65%]">
          <h1 className="text-[rgb(127,127,127)] text-[16px] font-medium text-left">
            Privacy Note
          </h1>
          <p className="text-[12px] text-justify leading-[16px] pt-4">
            By using www.bookmyshow.com(our website), you are fully accepting
            the Privacy Policy available at
            <a className="cursor-pointer text-red-400 pl-2" href="/privacy">
              https://bookmyshow.com/privacy
            </a>{" "}
            governing your access to Bookmyshow and provision of services by
            Bookmyshow to you. If you do not accept terms mentioned in the
            <a className="cursor-pointer text-red-400 pl-2" href="/privacy">
              Privacy Policy
            </a>
            , you must not share any of your personal information and
            immediately exit Bookmyshow.
          </p>
        </div>
      </div>
    </div>
  );
}

export default List4;

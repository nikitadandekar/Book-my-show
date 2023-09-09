import React from "react";
import Carporates7 from "./Carporates7";

function Carporates6() {
  return (
    <div className="bg-[rgb(245,245,245)]  border-t-8 ">
      <h1 className="pt-11  pl-12 text-[rgb(51,51,51)] pb-11 text-[16px] font-medium">
        OUR PRODUCT
      </h1>
      <div className="flex h-[500px]">
        <div className="bg-[url(https://in.bmscdn.com/webin/corporate/movie-voucher.png)] w-[600px] ">
          <div className="mt-12 mb-9 ml-14  mr-12">
            <h1 className="text-[34px] text-[rgb(255,255,255)] font-medium">
              Movie Vouchers
            </h1>
            <div className="text-[20px] leading-[32px] text-[rgb(255,255,255)] font-medium pt-5">
              <h2>Highly customizable, single usage,</h2>
              <h2> promotional codes in the form of</h2>
              <h2>set amount / value or a percentage</h2>
              <h2>of discount on the ticket cost.</h2>
              <h2>An ideal suit for movie and product</h2>
              <h2> promotions, consumer activation</h2>
              <h2> and countless more!</h2>
            </div>
            <button className="text-[16px] font-medium text-[rgb(220,53,75)] text-center bg-white rounded-md w-32 h-9 mt-14">
              Enquire
            </button>
          </div>
        </div>

        <div className="bg-[url(https://in.bmscdn.com/webin/corporate/gift-voucher.png)] w-[600px]">
          <div className="mt-12 mb-9 ml-14  mr-12">
            <h1 className="text-[34px] text-[rgb(255,255,255)] font-medium m-92px 0px 0px 120px">
              Gift Vouchers
            </h1>
            <div className="text-[20px] leading-[32px] text-[rgb(255,255,255)] font-medium pt-5">
              <h2>Amazing little pre-loaded cash cards</h2>

              <h2>which can be used to purchase tickets</h2>
              <h2>across all categories for 6 months.</h2>
              <h2>Be it employee rewards, trade channel</h2>
              <h2> incentive or consumer engagement,</h2>
              <h2> a gift voucher fits all.</h2>
            </div>
            <button className="text-[16px] font-medium text-[rgb(220,53,75)] text-center bg-white rounded-md   w-32 h-9 mt-14">
              Enquire
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[url(https://assets-in.bmscdn.com/webin/corporate/bulk-booking.png)] border-t-8 h-64  brightness-75">
        <div className="flex gap-12 mt-20">
          <div className=" pl-14">
            <h3 className="text-[18px] font-medium text-[rgb(255,255,255)]">
              Bulk Booking
            </h3>
            <h1 className="text-[32px] text-[rgb(255,255,255)] ">
              Exclusive corporate experiences
            </h1>
            <h1 className="text-[32px] text-[rgb(255,255,255)] ">
              from BookMyShow
            </h1>
          </div>

          <div className=" pl-32 pt-11">
            <button className="text-[18px] font-medium text-[rgb(255,255,255)] bg-[rgb(220,53,75)] w-80 h-12 rounded-sm">
              Explore now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14">
        <h1 className="text-center text-[18px] font-medium text-[rgb(51,51,51)]">
          Testimonials
        </h1>
      </div>
      <Carporates7 />
    </div>
  );
}

export default Carporates6;

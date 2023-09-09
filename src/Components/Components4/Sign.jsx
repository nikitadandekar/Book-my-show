import React, { useState } from "react";

function Sign({ Setisopen }) {
  return (
    <div
      className="page w-96 h-[500px] bg-[rgb(255,255,255)] rounded-md absolute  left-[30%] z-50 "
      data-aos="fade-down"
    >
      <div className="text-[16px] text-[rgb(51,51,51)] font-medium text-center pt-3 mt-4 ">
        Get Started
      </div>
      <div>
        <img
          className="w-6 absolute left-80 bottom-[450px] cursor-pointer"
          onClick={() => {
            Setisopen(false);
          }}
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACmCAMAAACIlG97AAAAY1BMVEX///8AAAD39/fe3t7b29vl5eXLy8uRkZEcHBxxcXHQ0NDHx8eUlJTh4eE3NzeLi4srKytlZWU8PDyDg4OampokJCRFRUVsbGy8vLwUFBShoaEwMDBfX19KSkpTU1Pv7+96enqOco1kAAAEaElEQVR4nO2c23aCMBBFBYNiqXexovXy/1/Z6rRVyEFDMiHpWrMfWzuczoaQoHEwEARBEARBEARBEARBEP4nmVJnrwc4K5U5FymWx9nqNPeX9Dw/rWbHZeFUJJ0kRLVjitVkV/0cYZI6VPmN+Y2foLv7ASb2VYp7lSR3M9NygPzhCPYHOCaP8Hd0V6t/si2TzWp1HP5hTFEvP7O96t/KeiFm9aO8Xr58s825SBpwqt81iy9sc55XzVKM6kda7ZX1IL3UapVcQYtSq720LjbUanGp16R/M7QvtwHlRgwxdelJsnEpCIIyqAfSk3e3knsP6pH0vWPNwTu7eiR97BoTqnca8ItcL+h0bv7Cqx5JZ4kJ1Ve26keVXoxBOsGn3pv01qBWt9AC1GGMCdXn3dU3Z0is0gkO9Z6lE2gc7RbU07hpELTson4EbpYeYrqqR+cmu3RiDMSZdrQn6YS9+uZSy2tMe/U9SifmQN/r5dcb+Ku5z5jwHH25ntXXrV6lE0B99Vw9mnp4lU50VR9AOgHUP3lEgKT3EhOrbxuekHTHJZs5aMDHHQ0mnQDn6EGB16lD0Jimq9Beb5YYE/UqfEwT9Wqmv2Tdd8zX6tEl1Hs3rwD11b2jyucCuBtA/ew3aCTSCaSeLqZopBNo9nTtqALT4l7HzSZYPZIeNCYeR9GjroDSCTTNi66bpkEjiGkSNIqYr4NGEhNfTBHGfN7RiGI+CxpVzHb1wcfNJmsYM9jUox0UNMKYaMmGF3dBmbacn9PQweoo/aMPxCqqjirwcOaHMqKgU7AW+qOKRn2r9LjUo0VGhOqHr2ImSe7wERW2mM+l/6gPHlSBdzKO+o/ywOrRgLRGt9BF0KBTIP16TwdBVwGHpyEYNy+334CgVbBzFEsftAUNpT4D0i9/v73Eoh59SPDy8HsQ1OWjftYxwXyzPi0G6g+9B30unUDq3XcedAJNi/UPwCP1vZ6jQ8OnxYHVI+l4O8FEf2F/V31mJL01aNLTOdp2s8QA9bNe1JtLJ5D6HjraRXprUP/q0bT48nzrUIrGUc/qm1tTXnfzCuio9aYTs5idpRNowPcYdLoFMU32iyH1W2/qMzD1MN0tBtQfPA34SPrF+K97U5/ZSidS0NGth45mYJHx0akCCFqyB83AOr3rTkYQNGdW7yid8K8+A8+QukknPHfUZUB6GXTBFhRJ/7DbDpx+APVMQdElZCOdAEErlqB2U4920J2JISijdMKP+gw86rLfaEno20Kd1aO1kFM3b6D5qNM4itZCS+eYgxR01GXNlIJx89M55ZVPvfDB/v8HO/jcpd9AF5P9Fk79DYFPnpjfQfWOHm1r6W9V80gntKDWb4Jrm1yYpBOaerbvEzhxxtTVW3+fQFq/FXFKJ+pBt9ZtqD3DYpVO1NXbf5jk7E86kZ4ejuDwHTr3K4lfOvGn3voquqHoDldufHTzSrqh2e3S8U2wVO3X453PL2A678brvfLVB0EQBEEQBEEQBEEQhP/KF6J5L6QLFtilAAAAAElFTkSuQmCC"
        ></img>
      </div>
      <div className=" w-[75%]  rounded-md  mt-8  border-solid border-2 hover:bg-gray-300   border-[rgb(153,153,153)] h-10 bg-[rgb(255,255,255)] ml-12">
        <button>
          <a href="https://www.goggle.com"></a>
          <h2 className="text-[rgb(89,89,89)] font-medium text-[14px]  pt-2 pl-10">
            Continue with Google
          </h2>
          <img
            src="https://cdn-teams-slug.flaticon.com/google.jpg"
            className="w-6 h-6 relative left-3 bottom-5"
          ></img>
        </button>
      </div>
      <div className=" w-[75%]  rounded-md  mt-8  border-solid border-2 hover:bg-gray-300   border-[rgb(153,153,153)] h-10 bg-[rgb(255,255,255)] ml-12">
        <button>
          <h2 className="text-[rgb(89,89,89)] font-medium text-[14px]  pt-2 pl-12">
            Continue with Email
          </h2>
          <img
            className="w-9 h-7 relative bottom-6 left-3"
            src="https://t4.ftcdn.net/jpg/05/25/22/63/360_F_525226337_x7lLRcnU08vDLkijRwgcbaIs8zCfDktC.jpg"
          ></img>
        </button>
      </div>
      <div className=" w-[75%]  rounded-md  mt-8  border-solid border-2 hover:bg-gray-300   border-[rgb(153,153,153)] h-10 bg-[rgb(255,255,255)] ml-12">
        <button>
          <h2 className="text-[rgb(89,89,89)] font-medium text-[14px]  pt-2 pl-12">
            Continue with Apple
          </h2>
          <img
            className="w-9 h-6 relative bottom-6 left-3"
            src="data:image/png;base64,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"
          ></img>
        </button>
      </div>
      <div className="text-[14px] text-[rgb(102,102,102)] font-normal text-center pt-6 pl-10">
        OR
      </div>
      <div className="flex justify-center mr-14 mt-10">
        <img
          className="w-5 h-4"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/800px-Flag_of_India.svg.png"
        ></img>

        <input
          type="number"
          className="text-[rgb(102,102,102)] text-[14px] cursor-text border-b-4 border-none ml-2 "
          placeholder=" +91 Continue with mobile number "
        />
      </div>
      <div className="text-center text-[rgb(102,102,102)] text-[12px] mt-24 decoration-slate-400">
        I agree to the Terms & Conditions Privacy Policy
      </div>
    </div>
  );
}

export default Sign;

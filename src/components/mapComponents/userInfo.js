import React from "react";
import Image from "next/image";
import Frame from "./frame";

const UserInfo = ({ data, isOpen, onToggle, showTimeLine, handleTimeLine }) => {
  return (
    <div className="relative w-[90%]">
      {/* Background Overlay */}
      <div
        className={`bg-white w-full h-auto p-2 ${
          isOpen ? "cursor-default" : "cursor-pointer"
        }`}
        onClick={onToggle}
      >
        {!isOpen ? (
          <div className="flex justify-between">
            <div className="gap-[1px]">
              <p className="text-black font-source-sans text-[8px] font-extralight">
                {data.name}
              </p>
              <p className="text-black font-source-sans text-[8px] font-extralight">
                {data.registration_number}
              </p>
              <div className="flex">
                <label className="text-[#9E9E9E] font-source-sans text-[8px] font-extralight">
                  IMEI:
                </label>
                <p className="text-black font-source-sans text-[8px] font-extralight">
                  #{data.imei}
                </p>
              </div>
            </div>
            <Image alt="user" src="/images/user.jpg" width={45} height={45} />
          </div>
        ) : (
          <div
            className="rounded-sm border-2 border-[#008407] bg-white shadow-md shadow-[rgba(0,0,0,0.25)] w-full h-auto p-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the expanded info
          >
            <div className="flex justify-between">
              <div className="gap-[1px]">
                <p className="text-black font-source-sans text-[8px] font-extralight">
                  {data.name}
                </p>
                <p className="text-black font-source-sans text-[8px] font-extralight">
                  {data.registration_number}
                </p>
                <div className="flex">
                  <label className="text-[#9E9E9E] font-source-sans text-[8px] font-extralight">
                    IMEI:
                  </label>
                  <p className="text-black font-source-sans text-[8px] font-extralight">
                    #{data.imei}
                  </p>
                </div>
                <div className="flex">
                  <label className="text-[#9E9E9E] font-source-sans text-[8px] font-extralight">
                    Number:
                  </label>
                  <p className="text-black font-source-sans text-[8px] font-extralight">
                    #{data.phone_number}
                  </p>
                </div>
              </div>
              <Image alt="user" src="/images/user.jpg" width={45} height={45} />
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <p className="text-[#008407] font-source-sans text-[8px] font-bold">
                  {data.status}
                </p>
                <p className="font-source-sans text-[6px] text-[#9E9E9E]">
                  {data.date_time}
                </p>
              </div>
              <div className="flex gap-2">
                <div className="flex gap-[1px] items-center">
                  <p className="text-black font-source-sans text-[8px] font-extralight">
                    GPS
                  </p>
                  {/* SVG for GPS */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Frame 5">
                      <g id="Vector">
                        <path
                          d="M11.5218 13.869C14.033 14.0825 15.8993 14.874 15.8993 15.8155C15.8993 16.923 13.3316 17.8185 10.1642 17.8185C6.99882 17.8185 4.42955 16.923 4.42955 15.8155C4.42955 14.8745 6.29381 14.0825 8.80657 13.869M3 15.8155C3 14.4225 5.14175 13.2435 8.08409 12.858L3 15.8155ZM12.2443 12.858C15.1866 13.2435 17.3283 14.423 17.3283 15.8175V17.4105C17.3283 19.117 14.1203 20.5005 10.1642 20.5005C6.208 20.5005 3 19.117 3 17.4105V15.8175C3 17.5235 6.208 18.907 10.1642 18.907C14.1203 18.907 17.3283 17.5245 17.3283 15.8175M12.66 6.31003C12.6583 6.95274 12.3946 7.56854 11.9266 8.02212C11.4586 8.4757 10.8247 8.72996 10.1642 8.72903C9.50365 8.72996 8.86975 8.4757 8.40178 8.02212C7.9338 7.56854 7.67001 6.95274 7.66838 6.31003C7.66735 4.97303 8.78396 3.88853 10.1621 3.88753H10.1642C11.5423 3.88753 12.66 4.97153 12.66 6.30803V6.31003ZM4.4352 6.54853C4.4352 7.26853 4.5688 7.95803 4.83292 8.58753C5.56928 10.3315 8.67862 12.718 10.1642 16.3975C11.6518 12.718 14.7591 10.3315 15.4954 8.58753C16.647 5.73003 15.2005 2.50453 12.2638 1.38403C11.595 1.1285 10.8827 0.998211 10.1642 1.00003C7.00961 0.990527 4.44496 3.47103 4.43468 6.54053L4.4352 6.54853Z"
                          fill="#B0B0B0"
                        />
                        <path
                          d="M11.5218 13.869C14.033 14.0825 15.8993 14.874 15.8993 15.8155C15.8993 16.923 13.3316 17.8185 10.1642 17.8185C6.99882 17.8185 4.42955 16.923 4.42955 15.8155C4.42955 14.8745 6.29381 14.0825 8.80657 13.869M3 15.8155C3 14.4225 5.14175 13.2435 8.08409 12.858M12.2443 12.858C15.1866 13.2435 17.3283 14.423 17.3283 15.8175M17.3283 15.8175V17.4105C17.3283 19.117 14.1203 20.5005 10.1642 20.5005C6.208 20.5005 3 19.117 3 17.4105V15.8175C3 17.5235 6.208 18.907 10.1642 18.907C14.1203 18.907 17.3283 17.5245 17.3283 15.8175ZM12.66 6.31003C12.6583 6.95274 12.3946 7.56854 11.9266 8.02212C11.4586 8.4757 10.8247 8. ```javascript
72996 10.1642 8.72903C9.50365 8.72996 8.86975 8.4757 8.40178 8.02212C7.9338 7.56854 7.67001 6.95274 7.66838 6.31003C7.66735 4.97303 8.78396 3.88853 10.1621 3.88753H10.1642C11.5423 3.88753 12.66 4.97153 12.66 6.30803V6.31003ZM4.4352 6.54853C4.4352 7.26853 4.5688 7.95803 4.83292 8.58753C5.56928 10.3315 8.67862 12.718 10.1642 16.3975C11.6518 12.718 14.7591 10.3315 15.4954 8.58753C16.647 5.73003 15.2005 2.50453 12.2638 1.38403C11.595 1.1285 10.8827 0.998211 10.1642 1.00003C7.00961 0.990527 4.44496 3.47103 4.43468 6.54053L4.4352 6.54853Z"
                          stroke="black"
                          strokeWidth="0.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="flex gap-[1px] items-center">
                  <p className="text-black font-source-sans text-[6px] font-extralight">
                    {data.battery_percentage}
                  </p>
                  <svg
                    width="15"
                    height="10"
                    viewBox="0 0 30 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Group">
                      <path
                        id="Vector"
                        d="M6 13.5C5.60218 13.5 5.22064 13.342 4.93934 13.0607C4.65804 12.7794 4.5 12.3978 4.5 12V6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5H15V13.5H6Z"
                        fill="#009002"
                      />
                      <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 0H4.5C3.30653 0 2.16193 0.474106 1.31802 1.31802C0.474106 2.16193 0 3.30653 0 4.5V13.5C0 14.6935 0.474106 15.8381 1.31802 16.682C2.16193 17.5259 3.30653 18 4.5 18H24C25.1935 18 26.3381 17.5259 27.182 16.682C28.0259 15.8381 28.5 14.6935 28.5 13.5C28.8978 13.5 29.2794 13.342 29.5607 13.0607C29.842 12.7794 30 12.3978 30 12V6C30 5.60218 29.842 5.22064 29.5607 4.93934C29.2794 4.65804 28.8978 4.5 28.5 4.5C28.5 3.30653 28.0259 2.16193 27.182 1.31802C26.3381 0.474106 25.1935 0 24 0ZM24 3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3  4.10218 3 4.5V13.5C3 13.8978 3.15804 14.2794 3.43934 14.5607C3.72064 14.842 4.10218 15 4.5 15H24C24.3978 15 24.7794 14.842 25.0607 14.5607C25.342 14.2794 25.5 13.8978 25.5 13.5V4.5C25.5 4.10218 25.342 3.72064 25.0607 3.43934C24.7794 3.15804 24.3978 3 24 3Z"
                        fill="#009002"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <button
                className="rounded-sm border-[0.2px] border-[#5C75F4] py-[1px] w-[20%] text-center font-source-sans text-[6px] font-bold"
                onClick={(e) => e.stopPropagation()}
              >
                Track
              </button>
              <button
                className="rounded-sm border-[0.2px] border-[#5C75F4] w-[20%] py-[1px] text-center font-source-sans text-[6px] font-bold"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTimeLine(e);
                }}
              >
                TimeLine
              </button>
              {showTimeLine && (
                <div className="fixed inset-0 flex justify-center items-center z-50">
                  <Frame onClose={handleTimeLine} />
                </div>
              )}
              <button
                className="rounded-sm border-[0.2px] border-[#5C75F4] w-[20%] py-[1px] text-center font-source-sans text-[6px] font-bold"
                onClick={(e) => e.stopPropagation()}
              >
                Off
              </button>
              <button
                className="rounded-sm border-[0.2px] border-[#5C75F4] w-[20%] py-[1px] text-center font-source-sans text-[6px] font-bold"
                onClick={(e) => e.stopPropagation()}
              >
                Refresh
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserInfo;

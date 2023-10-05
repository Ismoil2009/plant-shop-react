import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="container1">
        <div className="header-left">
          <img
            src="https://i5.walmartimages.com/asr/cdf0881f-bc96-4444-a47b-a5075b4643f0.a830f89ef0e032cabc0d4cb0c07014b9.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
            alt=""
          />
        </div>
        <div className="header-right">
          <div className="header-nav">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.5 17.5L13.875 13.875"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_0_102)">
                <path
                  d="M7.50002 18.3333C7.96026 18.3333 8.33335 17.9602 8.33335 17.5C8.33335 17.0397 7.96026 16.6666 7.50002 16.6666C7.03978 16.6666 6.66669 17.0397 6.66669 17.5C6.66669 17.9602 7.03978 18.3333 7.50002 18.3333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.6666 18.3333C17.1269 18.3333 17.5 17.9602 17.5 17.5C17.5 17.0397 17.1269 16.6666 16.6666 16.6666C16.2064 16.6666 15.8333 17.0397 15.8333 17.5C15.8333 17.9602 16.2064 18.3333 16.6666 18.3333Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0.833313 0.833374H4.16665L6.39998 11.9917C6.47618 12.3754 6.6849 12.72 6.9896 12.9653C7.2943 13.2106 7.67556 13.3409 8.06665 13.3334H16.1666C16.5577 13.3409 16.939 13.2106 17.2437 12.9653C17.5484 12.72 17.7571 12.3754 17.8333 11.9917L19.1666 5.00004H4.99998"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_0_102">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <a href="#">Sign Up</a>
            <button>Sign In</button>
          </div>
          <div className="header-titles">
            <h1>
              Kembang <br /> Flower Mantap
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="header-plants">
            <div>
              <div className="prc">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_0_85)">
                    <path
                      d="M25.3331 14.6666H9.51982L14.3598 8.85331C14.5861 8.58103 14.695 8.22998 14.6625 7.87742C14.63 7.52485 14.4588 7.19963 14.1865 6.97331C13.9142 6.747 13.5632 6.63811 13.2106 6.67062C12.858 6.70313 12.5328 6.87436 12.3065 7.14665L5.63982 15.1466C5.59497 15.2103 5.55486 15.2771 5.51982 15.3466C5.51982 15.4133 5.51982 15.4533 5.42649 15.52C5.36605 15.6729 5.33441 15.8356 5.33315 16C5.33441 16.1644 5.36605 16.3271 5.42649 16.48C5.42649 16.5466 5.42649 16.5866 5.51982 16.6533C5.55486 16.7228 5.59497 16.7897 5.63982 16.8533L12.3065 24.8533C12.4318 25.0038 12.5888 25.1249 12.7663 25.2078C12.9437 25.2908 13.1373 25.3336 13.3332 25.3333C13.6447 25.3339 13.9466 25.2254 14.1865 25.0266C14.3215 24.9147 14.4331 24.7772 14.5149 24.6221C14.5967 24.467 14.6471 24.2972 14.6632 24.1226C14.6793 23.948 14.6608 23.7719 14.6087 23.6044C14.5567 23.4369 14.4721 23.2814 14.3598 23.1466L9.51982 17.3333H25.3331C25.6868 17.3333 26.0259 17.1928 26.276 16.9428C26.526 16.6927 26.6665 16.3536 26.6665 16C26.6665 15.6464 26.526 15.3072 26.276 15.0572C26.0259 14.8071 25.6868 14.6666 25.3331 14.6666Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_85">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p>Previous</p>
              </div>
              <h2>Kaktus Plant</h2>
            </div>
            <div>
              <div className="prc">
                <p>Next</p>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.6666 17.3334H22.4799L17.6399 23.1467C17.4136 23.419 17.3047 23.77 17.3372 24.1226C17.3697 24.4752 17.541 24.8004 17.8133 25.0267C18.0856 25.253 18.4366 25.3619 18.7892 25.3294C19.1417 25.2969 19.4669 25.1256 19.6933 24.8534L26.3599 16.8534C26.4048 16.7897 26.4449 16.7229 26.4799 16.6534C26.4799 16.5867 26.4799 16.5467 26.5733 16.48C26.6337 16.3271 26.6653 16.1644 26.6666 16C26.6653 15.8356 26.6337 15.6729 26.5733 15.52C26.5733 15.4534 26.5733 15.4134 26.4799 15.3467C26.4449 15.2772 26.4048 15.2103 26.3599 15.1467L19.6933 7.14669C19.5679 6.99618 19.4109 6.87514 19.2335 6.79218C19.056 6.70921 18.8625 6.66637 18.6666 6.66669C18.3551 6.66608 18.0531 6.77458 17.8133 6.97335C17.6783 7.08529 17.5666 7.22275 17.4848 7.37788C17.403 7.53301 17.3526 7.70275 17.3365 7.87739C17.3204 8.05203 17.339 8.22812 17.391 8.39559C17.4431 8.56306 17.5277 8.71862 17.6399 8.85335L22.4799 14.6667H6.6666C6.31298 14.6667 5.97384 14.8072 5.72379 15.0572C5.47374 15.3073 5.33327 15.6464 5.33327 16C5.33327 16.3536 5.47374 16.6928 5.72379 16.9428C5.97384 17.1929 6.31298 17.3334 6.6666 17.3334Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </div>
              <h2>Rahasia Plant</h2>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

import React from 'react';

const Loader = () => {
    return (
        <svg
            width="200px"
            height="200px"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            style={{ background: "none" }}
            className="loader-svg"
            >
            <circle cx={75} cy={50} fill="#363a3c" r="6.39718">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.875s"
                />
            </circle>
            <circle cx="67.678" cy="67.678" fill="#363a3c" r="4.8">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.75s"
                />
            </circle>
            <circle cx={50} cy={75} fill="#363a3c" r="4.8">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.625s"
                />
            </circle>
            <circle cx="32.322" cy="67.678" fill="#363a3c" r="4.8">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.5s"
                />
            </circle>
            <circle cx={25} cy={50} fill="#363a3c" r="4.8">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.375s"
                />
            </circle>
            <circle cx="32.322" cy="32.322" fill="#363a3c" r="4.80282">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.25s"
                />
            </circle>
            <circle cx={50} cy={25} fill="#363a3c" r="6.40282">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="-0.125s"
                />
            </circle>
            <circle cx="67.678" cy="32.322" fill="#363a3c" r="7.99718">
                <animate
                attributeName="r"
                values="4.8;4.8;8;4.8;4.8"
                times="0;0.1;0.2;0.3;1"
                dur="1s"
                repeatCount="indefinite"
                begin="0s"
                />
            </circle>
         </svg>
        );
};

export default Loader;
import './animatedButtonStyle.css';

export const AnimatedButton = ({ url, buttonType, width, height, text, top, left }) => {
  const buttonTypes = {
    'aboutme': (
      <svg
        width="296"
        height="110"
        viewBox="0 0 296 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          id="l"
          d="M17.2479 109.484C17.0103 108.536 16.7275 107.589 16.5577 106.633C16.0033 103.61 15.381 100.587 14.9737 97.5465C14.6455 95.0832 14.5097 92.6019 14.7926 90.1116C15.0529 87.8198 15.0755 85.519 15.2113 83.2181C15.381 80.3759 15.5507 77.5337 15.7204 74.6915C15.9128 71.4072 16.207 68.1319 16.2409 64.8475C16.2636 62.4474 15.9354 60.0383 15.777 57.6382C15.7318 56.9796 15.777 56.3209 15.7318 55.6712C15.5733 53.4877 15.3357 51.3132 15.2226 49.1296C15.1208 47.1987 15.1434 45.2588 15.1321 43.3279C15.1208 41.2436 15.1773 39.1684 15.1208 37.0841C15.0189 33.7637 14.8152 30.4523 14.7134 27.1409C14.6455 25.1378 14.7021 23.1347 14.6568 21.1316C14.6116 19.0203 14.4984 16.9089 14.4419 14.7975C14.4192 14.1118 14.4984 13.417 14.4871 12.7313C14.4871 12.3343 14.3627 11.9373 14.3513 11.5403C14.2948 10.3041 14.2382 9.06801 14.2495 7.83187C14.2495 7.34463 14.4192 6.84837 14.5776 6.37016C15.2113 4.51145 15.8675 2.66175 16.5464 0.81206C16.6483 0.523327 16.8859 0.261664 17.0556 0C17.8476 0.0902289 17.7232 0.59551 17.7684 0.87522C18.0853 2.8783 18.9339 4.76409 19.7825 6.64987C20.1219 7.4078 20.2351 8.14767 20.1559 8.95973C19.9409 11.1794 19.8843 13.408 19.7712 15.6276C19.6693 17.6668 19.5901 19.715 19.4996 21.7542C19.3751 24.452 19.2507 27.1499 19.1489 29.8477C19.1262 30.5425 19.2394 31.2373 19.2167 31.923C19.1602 34.2509 19.0357 36.5878 19.0244 38.9157C19.0244 41.2797 19.1602 43.6437 19.1828 46.0077C19.1828 47.1717 18.9904 48.3266 19.0357 49.4906C19.1262 51.6651 19.3865 53.8396 19.4883 56.0141C19.5675 57.6202 19.5109 59.2263 19.5222 60.8323C19.5222 63.0971 19.477 65.3618 19.5675 67.6266C19.6693 70.1349 19.9748 72.6433 20.0314 75.1517C20.1106 78.6886 20.0201 82.2256 20.0314 85.7626C20.054 89.3808 20.1446 92.9899 20.1446 96.6081C20.1446 97.3119 19.8617 98.0247 19.6128 98.7195C18.9339 100.659 18.6397 102.635 18.436 104.629C18.2663 106.245 17.8929 107.842 17.61 109.448L17.2479 109.484Z"
          fill="#E8E8E8"
        />
        <path
          id="b"
          d="M5.04593 94.8638C16.3858 95.5414 26.8216 96.3232 38.7279 96.6098C49.7846 96.8704 61.3424 96.6967 72.4753 96.6272C96.5495 96.4882 120.635 96.2884 144.676 96.0278C168.107 95.7759 191.463 95.3242 214.872 95.0028C238.914 94.6727 263.075 94.6119 287.073 94.1949C288.631 94.1689 288.631 93.7346 287.073 93.7085C263.74 93.3002 240.254 93.2394 216.877 92.9267C192.803 92.6053 168.772 92.1362 144.676 91.8756C121.299 91.6237 97.8894 91.4413 74.4797 91.2936C63.3359 91.2241 51.6583 91.033 40.558 91.2502C28.0199 91.4934 16.9305 92.336 5.04593 93.0483C0.601468 93.3176 0.590574 94.5858 5.04593 94.8464V94.8638Z"
          fill="#E8E8E8"
        />
        <path
          id="t"
          d="M27.1374 18.56C29.6211 18.5165 32.0939 18.4557 34.5776 18.4383C45.7105 18.3515 56.8543 18.2646 67.9981 18.1777C77.7476 18.1604 87.508 18.1517 97.2575 18.1343L141.397 18.0301C154.741 17.9606 168.086 17.8563 181.408 17.6739C189.066 17.5697 196.691 17.2917 204.469 16.9356C203.064 16.8921 201.659 16.8226 200.253 16.8226L176.179 16.7966C147.584 16.7184 118.99 16.6141 90.4056 16.3796C76.7563 16.2754 63.1397 15.9713 49.5014 15.7802C41.6582 15.6499 33.7715 15.676 25.9174 15.5631C25.6015 15.5631 25.2856 15.5804 24.9806 15.5631C21.0808 15.398 17.1701 15.2503 13.2921 15.0245L7.46418 14.7118L6.00448 14.6336L4.62103 14.512L1.85414 14.2774C1.44019 14.2427 1.03714 14.1819 0.154785 14.0776C1.73431 14.1124 3.31384 14.1471 4.88247 14.1732L6.04805 14.2079H9.72998C12.998 14.2427 16.2442 14.2687 19.4686 14.2948C25.9501 14.3296 32.3771 14.4946 38.8259 14.6596C43.6517 14.7899 48.5536 14.7726 53.4229 14.7986C64.24 14.816 75.057 14.9029 85.8631 14.7986C97.1377 14.7031 108.39 14.399 119.665 14.2514C125.602 14.1819 131.582 14.2514 137.541 14.2861C153.401 14.3904 169.251 14.4859 185.101 14.5902C190.602 14.5728 196.103 14.5641 201.604 14.5467C213.805 14.5641 225.962 14.651 238.064 15.0158C245.591 15.2503 253.173 15.4501 260.929 15.3806C266.365 15.3285 271.844 15.5804 277.28 15.7455C282.52 15.9366 287.727 16.119 292.955 16.3101C294.949 16.3796 296.103 16.5881 295.602 17.1006C287.095 17.9432 278.642 18.8119 269.437 19.168C263.554 19.3939 257.607 19.5329 251.659 19.6545C244.6 19.7761 237.519 19.889 230.461 20.0106C224.36 20.1236 218.282 20.3147 212.182 20.3929C208.118 20.445 204.023 20.3929 199.97 20.3147C190.264 20.1323 180.58 20.332 170.874 20.3668C159.611 20.4102 148.347 20.2365 137.083 20.1583C133.151 20.1496 129.218 20.1323 125.297 20.1236C114.839 20.0193 104.36 20.167 93.9024 19.889C86.3642 19.6892 78.6844 19.7761 71.0592 19.6805C68.8914 19.6545 66.7345 19.5329 64.5668 19.5068L34.1636 19.1507C32.1375 19.1246 30.0895 19.0551 28.0961 18.9596C27.6712 18.9422 27.4207 18.7076 27.0939 18.5687L27.1374 18.56Z"
          fill="#E8E8E8"
        />
        <path
          id="r"
          d="M281.289 0.214025C281.79 3.098 282.574 5.9733 282.749 8.87465C283.141 15.6763 283.315 22.478 283.424 29.2884C283.566 38.2791 283.457 47.2698 283.631 56.2605C283.718 60.656 284.306 65.0514 284.535 69.4469C284.677 72.1224 284.448 74.8153 284.59 77.4908C284.895 83.1371 285.221 88.7834 285.777 94.4211C285.973 96.3669 285.646 98.1477 284.905 99.9545C284.306 101.396 283.892 102.891 283.25 104.315C283.065 104.732 282.389 105.019 281.692 105.54C281.3 104.88 280.951 104.454 280.777 103.985C279.513 100.519 278.947 97.001 278.892 93.37C278.849 90.4252 278.086 87.4891 277.879 84.5443C277.661 81.4258 277.694 78.2986 277.672 75.1801C277.672 74.0421 277.836 72.8955 277.868 71.7575C278.021 66.5629 278.119 61.3596 278.282 56.1649C278.577 47.374 278.925 38.5831 279.219 29.7922C279.426 23.6159 279.557 17.431 279.742 11.2548C279.829 8.20577 279.938 5.15675 280.102 2.10772C280.134 1.44753 280.396 0.796032 280.559 0.144531C280.799 0.170591 281.049 0.196651 281.289 0.222712V0.214025Z"
          fill="#E8E8E8"
        />
      </svg>
    ),
    'courses': (
      <svg
        width="265"
        height="108"
        viewBox="0 0 265 108"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          id="t"
          d="M262.261 13.4754C261.669 13.6503 261.309 13.8252 260.923 13.8585C254.475 14.3331 248.233 15.4823 242.005 16.5815C239.392 17.0395 236.908 17.1811 234.219 16.9645C231.259 16.7231 228.234 16.8063 225.236 16.773C218.917 16.7064 212.611 16.5898 206.292 16.6065C198.57 16.6231 190.836 16.798 183.114 16.8313C178.957 16.848 174.801 16.7064 170.644 16.6564C162.922 16.5648 155.2 16.4816 147.492 16.3983C143.927 16.3567 140.349 16.2567 136.784 16.29C130.144 16.3483 123.503 16.5565 116.862 16.5815C109.964 16.6065 103.054 16.3567 96.1556 16.4732C90.107 16.5815 84.0326 16.3733 78.0097 17.0312C75.8091 17.2727 73.5312 17.1977 71.279 17.2144C67.2123 17.2393 63.1456 17.1561 59.0917 17.231C53.2876 17.3476 47.4706 17.5058 41.6794 17.764C35.4506 18.0388 29.2733 17.7806 23.0831 17.306C17.9096 16.9146 12.6718 16.8813 7.47251 16.6564C5.91531 16.5898 4.37098 16.39 2.46631 16.2151C4.48681 15.3157 6.57165 15.2491 8.48919 15.0576C13.8171 14.533 19.1708 14.025 24.5373 13.8085C29.0931 13.6253 33.6746 13.8418 38.2561 13.9001C41.0874 13.9334 43.9058 14.0167 46.7371 14.0417C58.2037 14.1333 69.6832 14.2665 81.1499 14.2665C85.1137 14.2665 89.0774 13.9084 93.0541 13.8002C96.5288 13.7086 100.029 13.8002 103.504 13.7086C109.475 13.5587 115.447 13.2839 121.418 13.1673C124.147 13.109 126.888 13.2589 129.616 13.3921C140.915 13.9584 152.228 13.6087 163.54 13.6836C172.433 13.7419 181.338 13.9334 190.231 13.9001C195.958 13.8751 201.685 13.5504 207.412 13.3755C211.568 13.2506 215.725 13.184 219.869 13.0091C225.583 12.7676 231.284 12.4012 236.986 12.1597C243.691 11.8766 250.408 11.735 257.1 12.3429C257.834 12.4095 258.593 12.3929 259.34 12.4012C260.498 12.4095 261.399 12.7093 262.235 13.4921L262.261 13.4754Z"
          fill="#E8E8E8"
        />
        <path
          id="l"
          d="M17.2064 3.69584C17.4935 3.97867 17.7997 4.20594 17.9624 4.46352C18.4027 5.15039 19.0343 5.84231 19.1396 6.54938C19.2832 7.51908 19.9531 8.45343 19.6564 9.45848C19.3789 10.3777 19.3502 11.3171 19.1587 12.2464C18.7951 14.0646 18.3835 15.8827 18.0294 17.706C17.8667 18.5292 17.7232 19.3575 17.6753 20.1908C17.4361 23.8828 16.7087 27.5646 17.1777 31.2767C17.5892 34.6 17.4648 37.9485 17.5318 41.2818C17.5796 43.5798 17.5796 45.8828 17.5318 48.1808C17.503 49.5697 17.3212 50.9586 17.2734 52.3475C17.2255 53.8475 17.4169 55.3576 17.2064 56.8475C16.9001 58.9536 17.3308 61.0395 17.3116 63.1405C17.2925 65.0395 17.6275 66.9385 17.5988 68.8324C17.5605 71.7971 17.3308 74.7567 17.2255 77.7163C17.1681 79.2466 17.1968 80.7769 17.2064 82.3072C17.2351 84.8426 17.2734 87.3779 17.3308 89.9133C17.3404 90.3779 17.4648 90.8426 17.5413 91.3022C17.8093 92.9285 18.0007 94.5598 18.374 96.181C18.6898 97.5648 19.2449 98.9386 19.6277 100.317C19.733 100.696 19.7043 101.1 19.5703 101.474C19.1683 102.62 18.7089 103.757 18.2304 104.893C18.1443 105.095 17.8476 105.267 17.4552 105.641C17.0915 104.797 16.8523 104.161 16.546 103.535C16.0292 102.474 15.522 101.408 14.8999 100.363C14.4022 99.5194 14.3065 98.6911 14.4596 97.8174C14.6989 96.4638 15.0147 95.1103 14.7468 93.7365C14.5458 92.7113 14.7372 91.6709 14.6989 90.6406C14.6128 88.2113 14.4501 85.782 14.4022 83.3476C14.3352 79.8426 14.3735 76.3375 14.2874 72.8324C14.2299 70.2617 13.9907 67.696 13.962 65.1304C13.9237 62.1607 14.0385 59.191 14.0768 56.2213C14.1247 52.4889 14.1342 48.7566 14.2299 45.0243C14.2778 43.1606 14.5458 41.2919 14.5649 39.4283C14.6128 35.4283 14.6128 31.4232 14.5171 27.4232C14.4501 24.4939 14.1821 21.5696 14.0481 18.6403C14.0194 17.9484 14.2395 17.2514 14.1917 16.5545C14.1247 15.4231 13.9715 14.2918 13.7706 13.1656C13.6079 12.2363 13.2155 11.3171 13.1581 10.3878C13.1198 9.80697 13.3782 9.19586 13.7514 8.6403C14.8137 7.02413 15.9909 5.42817 17.2159 3.69584H17.2064Z"
          fill="#E8E8E8"
        />
        <path
          id="r"
          d="M247.231 0.412572C248.324 1.62685 249.276 2.62809 250.117 3.65596C250.448 4.06072 250.689 4.52405 250.699 4.96609C250.829 9.05095 250.909 13.1358 250.999 17.2207C251.13 23.1429 251.09 29.0652 251.45 34.9821C251.671 38.5344 251.38 42.0707 251.18 45.6123C251.07 47.4923 251.28 49.3723 251.25 51.2523C251.21 53.2015 251.1 55.1508 250.939 57.1C250.779 59.0119 250.418 60.9239 250.308 62.8412C250.208 64.5081 250.308 66.1751 250.358 67.8474C250.398 69.2694 250.498 70.6913 250.578 72.108C250.629 73.0666 250.729 74.0199 250.729 74.9786C250.729 76.784 250.649 78.5894 250.659 80.3949C250.659 81.5985 250.799 82.8021 250.829 84.0057C250.869 85.8911 251.15 87.787 250.829 89.651C250.518 91.4618 250.408 93.2566 250.548 95.062C250.729 97.3361 250.849 99.6049 251.029 101.879C251.07 102.412 251.12 102.955 251.38 103.466C251.741 104.185 251.571 104.84 251.09 105.516C250.669 106.113 250.438 106.741 250.067 107.349C249.957 107.535 249.646 107.689 249.356 107.913C248.244 107.434 247.752 106.832 247.442 106.204C247.071 105.453 246.74 104.696 246.55 103.929C246.349 103.136 246.219 102.326 246.249 101.527C246.329 99.3972 246.54 97.2669 246.64 95.1366C246.7 93.6826 246.6 92.2287 246.66 90.7748C246.73 89.0812 246.981 87.3823 246.971 85.6887C246.971 83.9205 246.74 82.1577 246.63 80.3895C246.43 77.1994 246.169 74.0093 246.059 70.8138C245.949 67.7355 245.999 64.6572 245.979 61.5736C245.969 59.4859 245.939 57.4036 245.949 55.3159C245.949 54.1176 246.039 52.9139 246.059 51.7156C246.119 48.8397 246.109 45.9638 246.249 43.0932C246.329 41.3996 246.71 39.7114 246.8 38.0178C246.901 35.9248 246.881 33.8317 246.83 31.7334C246.78 29.5711 246.68 27.4035 246.53 25.2413C246.4 23.4039 246.069 21.5665 245.969 19.7291C245.828 17.2793 245.899 14.8294 245.748 12.3796C245.618 10.2919 245.417 8.20416 245.037 6.12711C244.866 5.21108 245.277 4.36961 245.548 3.50151C245.818 2.62808 246.219 1.77064 246.62 0.913195C246.7 0.732119 247.031 0.577666 247.261 0.407241L247.231 0.412572Z"
          fill="#E8E8E8"
        />
        <path
          id="b"
          d="M264.505 88.0112C257.253 88.4175 250.041 89.0508 242.763 89.1827C225.69 89.4941 208.59 89.6419 191.504 89.721C168.923 89.8319 146.342 89.7421 123.762 89.8899C112.72 89.9638 101.692 90.4335 90.651 90.6182C83.9239 90.729 77.1707 90.5496 70.4437 90.6657C56.2684 90.9084 42.08 91.1723 27.9309 91.6209C23.0397 91.7739 18.5813 91.5206 14.0441 90.919C10.4249 90.4387 6.67458 90.101 3.08158 89.5838C2.01942 89.4308 1.31131 88.8872 0 88.3331C1.66537 88.0112 2.74064 87.7368 3.90771 87.5996C12.6017 86.581 21.4531 86.1219 30.5667 86.0744C37.9625 86.0375 45.332 85.4253 52.741 85.2564C60.5695 85.0823 68.4242 85.1087 76.2659 85.0876C79.1377 85.0823 81.9963 85.2142 84.8681 85.2406C97.9156 85.362 110.976 85.4411 124.024 85.5783C146.106 85.8158 168.176 86.0955 190.258 86.333C205.771 86.4966 221.297 86.6074 236.823 86.7605C244.481 86.8343 252.139 86.9241 259.797 87.0454C261.449 87.0718 263.075 87.2829 264.728 87.4096C264.662 87.6048 264.596 87.8054 264.531 88.0006L264.505 88.0112Z"
          fill="#E8E8E8"
        />
      </svg>
    ),

    'signin': (
      <svg
        width="217"
        height="107"
        viewBox="0 0 217 107"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          id="r"
          d="M197.638 0.661226C197.795 1.57333 197.983 2.48543 198.095 3.40622C198.462 6.31626 198.875 9.22629 199.145 12.1537C199.362 14.5252 199.452 16.914 199.265 19.3115C199.092 21.5179 199.077 23.733 198.987 25.9482C198.875 28.6845 198.762 31.4208 198.65 34.1571C198.522 37.319 198.327 40.4723 198.305 43.6342C198.29 45.9449 198.507 48.2642 198.612 50.5749C198.642 51.209 198.612 51.8432 198.642 52.4686C198.747 54.5708 198.905 56.6643 198.98 58.7664C199.047 60.6254 199.032 62.493 199.04 64.352C199.047 66.3586 199.01 68.3565 199.047 70.3632C199.115 73.5599 199.25 76.7479 199.317 79.9359C199.362 81.8643 199.325 83.7928 199.355 85.7212C199.385 87.7539 199.46 89.7866 199.497 91.8193C199.512 92.4795 199.46 93.1483 199.467 93.8085C199.467 94.1907 199.55 94.5729 199.557 94.9552C199.595 96.1452 199.632 97.3353 199.625 98.5254C199.625 98.9945 199.512 99.4722 199.407 99.9326C198.987 101.722 198.552 103.503 198.102 105.284C198.035 105.562 197.878 105.814 197.765 106.065C197.24 105.979 197.323 105.492 197.293 105.223C197.083 103.294 196.52 101.479 195.958 99.6633C195.733 98.9337 195.658 98.2214 195.711 97.4396C195.853 95.3026 195.891 93.157 195.966 91.0201C196.033 89.0569 196.086 87.085 196.146 85.1218C196.228 82.5245 196.311 79.9272 196.378 77.3299C196.393 76.661 196.318 75.9921 196.333 75.3319C196.37 73.0908 196.453 70.8409 196.46 68.5998C196.46 66.3239 196.37 64.0479 196.355 61.772C196.355 60.6515 196.483 59.5396 196.453 58.419C196.393 56.3255 196.221 54.232 196.153 52.1385C196.101 50.5923 196.138 49.046 196.131 47.4998C196.131 45.3195 196.161 43.1391 196.101 40.9587C196.033 38.5438 195.831 36.1289 195.793 33.714C195.741 30.3089 195.801 26.9037 195.793 23.4985C195.778 20.0151 195.718 16.5405 195.718 13.0571C195.718 12.3796 195.906 11.6933 196.071 11.0244C196.52 9.1568 196.715 7.25441 196.85 5.33465C196.963 3.77974 197.21 2.2422 197.398 0.695967L197.638 0.661226Z"
          fill="#E8E8E8"
        />
        <path
          id="t"
          d="M210.543 12.6831C202.194 12.078 194.51 11.3799 185.744 11.1239C177.603 10.8912 169.094 11.0463 160.897 11.1084C143.172 11.2325 125.439 11.4109 107.738 11.6436C90.4863 11.8686 73.2907 12.2719 56.055 12.5589C38.3541 12.8537 20.565 12.908 2.89614 13.2804C-1.42866 13.3715 -0.536465 14.071 3.11442 14.5548C14.5886 16.0752 37.3676 14.1336 54.5792 14.4129C72.3042 14.6999 89.9971 15.1188 107.738 15.3515C124.95 15.5765 142.185 15.7394 159.421 15.8712C167.626 15.9333 176.224 16.104 184.396 15.91C193.628 15.6928 201.793 14.9404 210.543 14.3043C213.815 14.0638 213.823 12.9313 210.543 12.6986V12.6831Z"
          fill="#E8E8E8"
        />
        <path
          id="l"
          d="M15.8999 106.326C15.555 103.442 15.0152 100.567 14.8952 97.6654C14.6253 90.8637 14.5053 84.062 14.4303 77.2517C14.3329 68.261 14.4078 59.2703 14.2879 50.2795C14.2279 45.8841 13.823 41.4886 13.6656 37.0932C13.5681 34.4177 13.7255 31.7248 13.6281 29.0493C13.4181 23.4029 13.1932 17.7566 12.8108 12.1189C12.6759 10.1731 12.9008 8.39235 13.4107 6.58552C13.823 5.14353 14.1079 3.64943 14.5503 2.22481C14.6778 1.80785 15.1426 1.52119 15.6225 0.999986C15.8924 1.66017 16.1323 2.08583 16.2523 2.55491C17.122 6.0209 17.5119 9.539 17.5494 13.17C17.5794 16.1148 18.1042 19.0509 18.2467 21.9957C18.3967 25.1142 18.3742 28.2414 18.3892 31.3599C18.3892 32.4979 18.2767 33.6445 18.2542 34.7825C18.1492 39.9771 18.0818 45.1805 17.9693 50.3751C17.7668 59.166 17.5269 67.9569 17.3245 76.7479C17.182 82.9241 17.0921 89.109 16.9646 95.2852C16.9046 98.3343 16.8296 101.383 16.7172 104.432C16.6947 105.093 16.5147 105.744 16.4023 106.396C16.2373 106.369 16.0648 106.343 15.8999 106.317V106.326Z"
          fill="#E8E8E8"
        />
        <path
          id="b"
          d="M216.335 87.3292C215.85 87.5524 215.555 87.7755 215.238 87.818C209.956 88.4236 204.843 89.8898 199.74 91.2923C197.6 91.8767 195.565 92.0573 193.361 91.7811C190.936 91.4729 188.459 91.5792 186.002 91.5367C180.826 91.4517 175.659 91.3029 170.483 91.3242C164.157 91.3454 157.82 91.5686 151.494 91.6111C148.089 91.6323 144.684 91.4517 141.278 91.3879C134.952 91.2711 128.626 91.1648 122.311 91.0586C119.391 91.0054 116.46 90.8779 113.539 90.9204C108.099 90.9948 102.658 91.2604 97.2182 91.2923C91.5671 91.3242 85.9054 91.0054 80.2543 91.1542C75.299 91.2923 70.3226 91.0267 65.3884 91.8661C63.5855 92.1742 61.7194 92.0786 59.8743 92.0998C56.5427 92.1317 53.211 92.0254 49.8899 92.1211C45.135 92.2698 40.3695 92.4717 35.625 92.801C30.5221 93.1517 25.4614 92.8223 20.3902 92.2167C16.1518 91.7173 11.8607 91.6748 7.60129 91.3879C6.32557 91.3029 5.06039 91.0479 3.5 90.8248C5.15528 89.6773 6.86327 89.5923 8.4342 89.348C12.7991 88.6786 17.185 88.0305 21.5815 87.7542C25.3138 87.5205 29.0672 87.7967 32.8206 87.8711C35.14 87.9136 37.449 88.0198 39.7685 88.0517C49.1625 88.1686 58.567 88.3386 67.9609 88.3386C71.2082 88.3386 74.4555 87.8817 77.7134 87.7436C80.56 87.6267 83.4278 87.7436 86.2744 87.6267C91.1664 87.4355 96.0585 87.0849 100.95 86.9361C103.186 86.8617 105.431 87.053 107.666 87.223C116.923 87.9455 126.191 87.4992 135.458 87.5949C142.744 87.6692 150.039 87.9136 157.325 87.8711C162.017 87.8392 166.708 87.4249 171.4 87.2017C174.805 87.0424 178.211 86.9574 181.606 86.7342C186.287 86.4261 190.958 85.9586 195.628 85.6505C201.121 85.2893 206.625 85.1086 212.107 85.8843C212.708 85.9692 213.33 85.948 213.942 85.9586C214.891 85.9693 215.629 86.3517 216.314 87.3505L216.335 87.3292Z"
          fill="#E8E8E8"
        />
      </svg>
    ),
  };

  return (
    <a className="btnContainer" href={url} style={{ width: `${width}px`, height: `${height}px` }}>
      <div className="btnStrokes">{buttonTypes[buttonType]}</div>
      <div className="strokeBtnText" style={{ top: `${top}%`, left: `${left}%` }}>
        {text}
      </div>
    </a>
  );
};

export default AnimatedButton;
// {buttonTypes[buttonType]}

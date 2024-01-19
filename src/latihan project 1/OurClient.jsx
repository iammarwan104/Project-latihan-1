import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";
import logo_makkode from "./img/linux.png";
import react from "./img/ubuntu.png";
import { useInView } from "framer-motion";
export default function () {
  const [showHeaderClient, setShowHeaderClient] = useState(false);
  const [showManage, setShowManage] = useState(false);
  const [community, setCommunity] = useState(false);
  // const client = document.getElementById('client');
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setShowHeaderClient(true);
    }
    if (window.scrollY > 600) {
      setShowManage(true);
      setCommunity(true);
    }
  });

  const ref = useRef(null);
  const isInView = useInView(ref, {once : true});

  return (
    <section ref={ref} id="client" className="px-8 md:px-16 lg:px-32 mb-12">
      <div
        className={`relative ${
          isInView ? "bottom-0 opacity-100" : "-bottom-52 opacity-0"
        } duration-700 ease-in-out mt-4 mb-4 md:mb-8 lg:mb-12 text-center`}
      >
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          Our Clients
        </h1>
        <p className="mb-8">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis.
        </p>
        <Marquee speed={90} pauseOnHover={true} direction="right">
          <div className="w-screen grid grid-cols-4 items-center justify-between">
            <img
              src={logo_makkode}
              alt="Logo Makkode"
              width={300}
              height={300}
              fetchpriority="low"
              loading="lazy"
              className="w-[4rem] h-auto mx-auto"
            />
            <img
              src={react}
              alt="Logo Makkode"
              width={300}
              height={300}
              fetchpriority="low"
              loading="lazy"
              className="w-[4rem] h-auto mx-auto"
            />
            <img
              src={logo_makkode}
              alt="Logo Makkode"
              width={300}
              height={300}
              fetchpriority="low"
              loading="lazy"
              className="w-[4rem] h-auto mx-auto"
            />
            <img
              src={react}
              alt="Logo Makkode"
              width={300}
              height={300}
              fetchpriority="low"
              loading="lazy"
              className="w-[4rem] h-auto mx-auto"
            />
          </div>
        </Marquee>
      </div>


      <div className={`relative ${
            isInView ? "bottom-0 opacity-100" : "-bottom-52 opacity-0"
          } duration-700 ease-in-out `}>
        <div
          className={`text-center my-8`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold w-full md:w-[60%] lg:max-w-[40%] mx-auto">
            Manage your entire community in a single system
          </h2>
          <p className="">Lorem ipsum dolor sit amet.</p>
        </div>
        <div
          className={` grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between`}
        >
          <div className={`relative ${isInView ? 'top-0 opacity-1' : 'top-52 opacity-0'} duration-700 delay-100 ease-in-out  text-center bg-slate-50 p-4 shadow-lg`}>
            <svg
              width="46"
              height="40"
              className="mx-auto"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.9187 2 border-26.8835C45.9187 33.8032 40.3092 39.4127 33.3894 39.4127L14.5956 39.4127C12.6734 39.4127 11.1152 37.8545 11.1152 35.9324L11.1152 12.266C11.1152 8.42172 14.2316 5.30531 18.0759 5.30531L42.4384 5.30532C44.3605 5.30532 45.9187 6.86352 45.9187 8.78566L45.9187 26.8835Z"
                fill="#E8F5E9"
              />
              <path
                d="M17.3729 7.39355C14.8871 7.39355 12.8634 9.43574 12.8634 11.9322C12.8634 13.5114 13.6743 14.9059 14.8989 15.7187C13.4199 16.2132 12.1401 17.1375 11.2014 18.3467C10.6824 17.9475 10.1025 17.6265 9.47742 17.3964C10.4254 16.6927 11.0448 15.5622 11.0448 14.2916C11.0448 12.1743 9.33245 10.4411 7.22801 10.4411C5.12358 10.4411 3.41119 12.1743 3.41119 14.2916C3.41119 15.5629 4.03118 16.6939 4.97993 17.3977C2.46811 18.3246 0.674194 20.7513 0.674194 23.6073V25.6135C0.674451 25.7664 0.735627 25.9129 0.844097 26.0206C0.952566 26.1286 1.09934 26.1887 1.25228 26.1882H10.0541C10.0754 26.1905 10.0967 26.1918 10.1181 26.1916H24.6282C24.6495 26.1918 24.6711 26.1905 24.6922 26.1882H33.4947C33.8111 26.1869 34.0673 25.9301 34.0681 25.6135V23.6073C34.0681 20.7513 32.2773 18.3246 29.7668 17.3974C30.7155 16.6939 31.3355 15.5626 31.3355 14.2913C31.3355 12.1741 29.6231 10.4408 27.5187 10.4408C25.4143 10.4408 23.7019 12.1741 23.7019 14.2913C23.7019 15.5619 24.3216 16.6926 25.2696 17.3962C24.6432 17.6267 24.063 17.9488 23.5433 18.349C22.6051 17.1391 21.3271 16.2135 19.8481 15.7187C21.0723 14.9059 21.8836 13.5114 21.8836 11.9322C21.8836 9.43574 19.8589 7.39355 17.373 7.39355H17.3729ZM17.3729 8.5451C19.2321 8.5451 20.7309 10.054 20.7309 11.9322C20.7309 13.7957 19.2554 15.2899 17.4168 15.3138C17.4022 15.3138 17.3878 15.3118 17.3729 15.3118C17.358 15.3118 17.3438 15.3138 17.3289 15.3138C15.4903 15.2902 14.0159 13.7958 14.0159 11.9322C14.0159 10.0537 15.5134 8.5451 17.3726 8.5451H17.3729ZM7.22808 11.5926C8.70325 11.5926 9.89335 12.7898 9.89335 14.2915C9.89335 15.7831 8.71864 16.9753 7.25736 16.9915C7.24759 16.9915 7.23808 16.9904 7.22806 16.9904C7.21829 16.9904 7.20878 16.9915 7.19876 16.9915C5.73748 16.9753 4.56277 15.7829 4.56277 14.2915C4.56277 12.7899 5.75287 11.5926 7.22804 11.5926H7.22808ZM27.5184 11.5926C28.9935 11.5926 30.1836 12.7898 30.1836 14.2915C30.1836 15.7831 29.0089 16.9753 27.5476 16.9915C27.5379 16.9915 27.5284 16.9904 27.5183 16.9904C27.5086 16.9904 27.4991 16.9915 27.489 16.9915C26.0277 16.9753 24.853 15.7829 24.853 14.2915C24.853 12.7899 26.0431 11.5926 27.5183 11.5926H27.5184ZM17.3288 16.4653C17.3435 16.4656 17.3578 16.4674 17.3728 16.4674C17.3874 16.4674 17.4018 16.4653 17.4167 16.4653C21.104 16.489 24.0549 19.4653 24.0549 23.191L24.0546 25.0397H10.6914V23.191C10.6914 19.4649 13.6415 16.489 17.3283 16.4653H17.3288ZM7.18399 18.1443C7.19864 18.1446 7.21304 18.1464 7.22795 18.1464C7.24286 18.1464 7.25699 18.1443 7.2719 18.1443C8.51906 18.1544 9.65725 18.5844 10.5636 19.3038C9.91503 20.4513 9.53999 21.7758 9.53999 23.1913V25.0356H1.82528V23.6072C1.82528 20.5792 4.20602 18.168 7.18386 18.1441L7.18399 18.1443ZM27.4743 18.1443C27.4892 18.1446 27.5033 18.1464 27.5182 18.1464C27.5331 18.1464 27.5473 18.1443 27.5622 18.1443C30.54 18.168 32.9208 20.5796 32.9208 23.6075V25.0356H25.2021L25.2018 23.1913C25.2018 21.7766 24.8278 20.4531 24.1806 19.3059C25.0871 18.5854 26.2261 18.1543 27.4743 18.1443H27.4743Z"
                fill="#103E13"
              />
            </svg>
            <h3 className="text-2xl text-center font-semibold w-full xl:w-[55%] mx-auto">
              Membership Organisations
            </h3>
            <p className="text-center mx-auto">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className={`relative ${isInView ? 'top-0 opacity-1' : 'top-52 opacity-0'} duration-700 delay-200 ease-in-out  text-center bg-slate-50 p-4 shadow-lg`}>
            <svg
              width="46"
              height="40"
              className="mx-auto"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.7923 26.8835C45.7923 33.8032 40.1828 39.4127 33.263 39.4127L14.4692 39.4127C12.547 39.4127 10.9888 37.8545 10.9888 35.9324L10.9888 12.266C10.9888 8.42172 14.1052 5.30531 17.9495 5.30531L42.312 5.30532C44.2341 5.30532 45.7923 6.86352 45.7923 8.78566L45.7923 26.8835Z"
                fill="#E8F5E9"
              />
              <path
                d="M19.2834 13.6657C19.0662 13.6657 18.8896 13.4895 18.8896 13.272V12.6029C18.8896 12.3857 19.0659 12.2091 19.2834 12.2091C19.5006 12.2091 19.6771 12.3854 19.6771 12.6029V13.272C19.6771 13.4895 19.5006 13.6657 19.2834 13.6657Z"
                fill="#103E13"
              />
              <path
                d="M17.628 13.6657C17.4108 13.6657 17.2343 13.4895 17.2343 13.272V12.6029C17.2343 12.3857 17.4105 12.2091 17.628 12.2091C17.8452 12.2091 18.0217 12.3854 18.0217 12.6029V13.272C18.0215 13.4895 17.8455 13.6657 17.628 13.6657Z"
                fill="#103E13"
              />
              <path
                d="M15.9727 13.6657C15.7555 13.6657 15.579 13.4895 15.579 13.272V12.6029C15.579 12.3857 15.7553 12.2091 15.9727 12.2091C16.1899 12.2091 16.3665 12.3854 16.3665 12.6029V13.272C16.3665 13.4895 16.1902 13.6657 15.9727 13.6657Z"
                fill="#103E13"
              />
              <path
                d="M19.2834 16.4021C19.0662 16.4021 18.8896 16.2258 18.8896 16.0084V15.3395C18.8896 15.1223 19.0659 14.9457 19.2834 14.9457C19.5006 14.9457 19.6771 15.122 19.6771 15.3395V16.0084C19.6771 16.2258 19.5006 16.4021 19.2834 16.4021Z"
                fill="#103E13"
              />
              <path
                d="M17.628 16.4021C17.4108 16.4021 17.2343 16.2258 17.2343 16.0084V15.3395C17.2343 15.1223 17.4105 14.9457 17.628 14.9457C17.8452 14.9457 18.0217 15.122 18.0217 15.3395V16.0084C18.0215 16.2258 17.8455 16.4021 17.628 16.4021Z"
                fill="#103E13"
              />
              <path
                d="M15.9727 16.4021C15.7555 16.4021 15.579 16.2258 15.579 16.0084V15.3395C15.579 15.1223 15.7553 14.9457 15.9727 14.9457C16.1899 14.9457 16.3665 15.122 16.3665 15.3395V16.0084C16.3665 16.2258 16.1902 16.4021 15.9727 16.4021Z"
                fill="#103E13"
              />
              <path
                d="M19.2834 19.1386C19.0662 19.1386 18.8896 18.9623 18.8896 18.7448V18.0757C18.8896 17.8585 19.0659 17.6819 19.2834 17.6819C19.5006 17.6819 19.6771 17.8582 19.6771 18.0757V18.7448C19.6771 18.9623 19.5006 19.1386 19.2834 19.1386Z"
                fill="#103E13"
              />
              <path
                d="M17.628 19.1386C17.4108 19.1386 17.2343 18.9623 17.2343 18.7448V18.0757C17.2343 17.8585 17.4105 17.6819 17.628 17.6819C17.8452 17.6819 18.0217 17.8582 18.0217 18.0757V18.7448C18.0215 18.9623 17.8455 19.1386 17.628 19.1386Z"
                fill="#103E13"
              />
              <path
                d="M15.9727 19.1386C15.7555 19.1386 15.579 18.9623 15.579 18.7448V18.0757C15.579 17.8585 15.7553 17.6819 15.9727 17.6819C16.1899 17.6819 16.3665 17.8582 16.3665 18.0757V18.7448C16.3665 18.9623 16.1902 19.1386 15.9727 19.1386Z"
                fill="#103E13"
              />
              <path
                d="M19.2834 21.8744C19.0662 21.8744 18.8896 21.6981 18.8896 21.4807V20.8115C18.8896 20.5943 19.0659 20.4178 19.2834 20.4178C19.5006 20.4178 19.6771 20.5941 19.6771 20.8115V21.4807C19.6771 21.6981 19.5006 21.8744 19.2834 21.8744Z"
                fill="#103E13"
              />
              <path
                d="M17.628 21.8744C17.4108 21.8744 17.2343 21.6981 17.2343 21.4807V20.8115C17.2343 20.5943 17.4105 20.4178 17.628 20.4178C17.8452 20.4178 18.0217 20.5941 18.0217 20.8115V21.4807C18.0215 21.6981 17.8455 21.8744 17.628 21.8744Z"
                fill="#103E13"
              />
              <path
                d="M15.9727 21.8744C15.7555 21.8744 15.579 21.6981 15.579 21.4807V20.8115C15.579 20.5943 15.7553 20.4178 15.9727 20.4178C16.1899 20.4178 16.3665 20.5941 16.3665 20.8115V21.4807C16.3665 21.6981 16.1902 21.8744 15.9727 21.8744Z"
                fill="#103E13"
              />
              <path
                d="M19.2834 24.6108C19.0662 24.6108 18.8896 24.4345 18.8896 24.217V23.5482C18.8896 23.331 19.0659 23.1544 19.2834 23.1544C19.5006 23.1544 19.6771 23.3307 19.6771 23.5482V24.217C19.6771 24.4342 19.5006 24.6108 19.2834 24.6108Z"
                fill="#103E13"
              />
              <path
                d="M17.628 24.6108C17.4108 24.6108 17.2343 24.4345 17.2343 24.217V23.5482C17.2343 23.331 17.4105 23.1544 17.628 23.1544C17.8452 23.1544 18.0217 23.3307 18.0217 23.5482V24.217C18.0215 24.4342 17.8455 24.6108 17.628 24.6108Z"
                fill="#103E13"
              />
              <path
                d="M15.9727 24.6108C15.7555 24.6108 15.579 24.4345 15.579 24.217L15.5793 23.5482C15.5793 23.331 15.7555 23.1544 15.973 23.1544C16.1902 23.1544 16.3668 23.3307 16.3668 23.5482V24.217C16.3665 24.4342 16.1902 24.6108 15.9727 24.6108Z"
                fill="#103E13"
              />
              <path
                d="M4.72451 27.334C4.72451 27.5512 4.90079 27.7277 5.11826 27.7277H29.0963C29.3135 27.7277 29.49 27.5514 29.49 27.334C29.49 27.1168 29.3138 26.9402 29.0963 26.9402H28.3684V15.6352C28.3684 15.418 28.1921 15.2414 27.9747 15.2414L21.546 15.2417V7.09132C21.546 6.95348 21.474 6.82608 21.3565 6.75468C21.2393 6.68302 21.0926 6.67863 20.9707 6.74205L13.6618 10.5475C13.5313 10.6153 13.4501 10.7498 13.4501 10.8967V18.0159H6.37657C6.15938 18.0159 5.98282 18.1922 5.98282 18.4097V26.9403H5.11738C4.90019 26.94 4.72418 27.1163 4.72418 27.3338L4.72451 27.334ZM21.5461 21.2051H27.5813V26.9406L21.5461 26.9403V21.2051ZM21.5461 18.469H27.5813V20.4179L21.5461 20.4177V18.469ZM21.5461 16.0288H27.5813V17.682H21.5461V16.0288ZM14.2371 11.1358L20.7583 7.74035V26.9399H14.2371V11.1358ZM8.71675 23.7954C8.71675 22.9783 9.3642 22.3132 10.1602 22.3132C10.9562 22.3132 11.6039 22.978 11.6039 23.7954V26.9404H8.71675V23.7954ZM6.77029 18.8033H13.4499V26.9403H12.3914V23.7953C12.3914 22.544 11.3909 21.5259 10.1602 21.5259C8.93009 21.5259 7.92955 22.5437 7.92955 23.7953V26.9403H6.77029V18.8033Z"
                fill="#103E13"
              />
            </svg>
            <h3 className="text-2xl  font-semibold w-full xl:w-[55%] mx-auto">
              Nactional Associations
            </h3>
            <p className="text-center mx-auto">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
          <div className={`relative ${isInView ? 'top-0 opacity-1' : 'top-52 opacity-0'} duration-700 delay-300 ease-in-out  text-center bg-slate-50 p-4 shadow-lg`}>
            <svg
              width="46"
              height="40"
              className="mx-auto"
              viewBox="0 0 46 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.666 26.8835C45.666 33.8032 40.0564 39.4127 33.1367 39.4127L14.3428 39.4127C12.4207 39.4127 10.8625 37.8545 10.8625 35.9324L10.8625 12.266C10.8625 8.42172 13.9789 5.30531 17.8232 5.30531L42.1856 5.30532C44.1078 5.30532 45.666 6.86352 45.666 8.78566L45.666 26.8835Z"
                fill="#E8F5E9"
              />
              <path
                d="M20.1283 16.8912C19.9607 16.8912 19.805 16.8451 19.6668 16.771V16.773C19.6668 17.0367 19.5643 17.2843 19.3783 17.4698C19.1924 17.6558 18.9449 17.7583 18.6815 17.7583C18.5115 17.7583 18.3539 17.711 18.2141 17.6349C18.2 17.8762 18.1036 18.1016 17.9316 18.2739C17.7456 18.4598 17.4982 18.5623 17.2346 18.5623C16.7109 18.5623 16.2857 18.1507 16.2551 17.6348C16.093 17.7223 15.9099 17.7683 15.7209 17.7561C15.2058 17.7223 14.8024 17.2773 14.8024 16.7426V12.311L14.2978 13.1852C14.1056 13.5196 13.7458 13.7272 13.3584 13.7272C13.1697 13.7272 12.9832 13.6777 12.8181 13.5831C12.6124 13.4639 12.4653 13.2725 12.4042 13.0435C12.3427 12.8144 12.3745 12.5748 12.4934 12.3695C12.4935 12.3695 14.1444 9.5106 14.2452 9.33499C14.2571 9.30859 14.2912 9.23201 14.3203 9.16674C14.348 9.10442 14.3718 9.04046 14.3946 8.97618C14.8924 7.57062 16.1252 6.69751 17.6119 6.69751C19.5426 6.69751 21.1133 8.40073 21.1133 10.4943L21.1135 15.9058C21.1135 16.1692 21.0112 16.4166 20.8254 16.6028C20.6394 16.7887 20.3919 16.8912 20.1282 16.8912L20.1283 16.8912ZM17.612 7.22106C16.3344 7.22106 15.3162 7.94265 14.888 9.15127C14.8606 9.22801 14.8321 9.30476 14.7988 9.37954C14.7022 9.59618 14.7022 9.59618 14.675 9.62733L14.6714 9.62422C14.5366 9.87857 14.1361 10.5721 12.9467 12.6315C12.8978 12.716 12.8849 12.814 12.9098 12.9078C12.935 13.0017 12.9956 13.0807 13.0794 13.1291C13.3395 13.2785 13.6957 13.182 13.8439 12.9238L14.8375 11.2035C14.8969 11.101 15.0169 11.0506 15.1321 11.0818C15.2465 11.1124 15.3261 11.2162 15.3261 11.3346V16.7428C15.3261 16.998 15.5186 17.2182 15.7552 17.2338C15.8917 17.241 16.0189 17.1952 16.1145 17.0998C16.2015 17.0129 16.2493 16.8971 16.2493 16.7733V13.2363C16.2493 13.0916 16.3666 12.9744 16.5112 12.9744C16.6559 12.9744 16.7731 13.0915 16.7731 13.2363L16.773 17.5772C16.773 17.8317 16.9801 18.0389 17.2346 18.0389C17.3583 18.0389 17.4744 17.991 17.5615 17.9041C17.6484 17.817 17.6963 17.7009 17.6963 17.5772V13.2363C17.6963 13.0916 17.8133 12.9744 17.9581 12.9744C18.1028 12.9744 18.22 13.0915 18.22 13.2363L18.2199 16.7326V16.7733C18.2199 17.0276 18.427 17.2347 18.6817 17.2347C18.8052 17.2347 18.9209 17.1867 19.0085 17.0994C19.0954 17.0127 19.1433 16.8969 19.1433 16.7731V13.2361C19.1433 13.0915 19.2604 12.9742 19.4052 12.9742C19.5499 12.9742 19.6671 13.0913 19.6671 13.2361L19.6668 15.9059C19.6668 16.1606 19.8739 16.3677 20.1283 16.3677C20.2521 16.3677 20.3678 16.3197 20.4548 16.2329C20.542 16.1457 20.5897 16.0296 20.5897 15.9059L20.5899 10.4944C20.5899 8.68969 19.254 7.22111 17.6119 7.22111L17.612 7.22106Z"
                fill="#103E13"
              />
              <path
                d="M9.83859 20.6523L13.6389 18.3725C14.0971 18.0973 14.6867 18.2142 14.9806 18.6388C15.0878 18.7934 15.1426 18.9737 15.1511 19.1572C15.2928 19.0832 15.4469 19.0431 15.6039 19.0431C15.6842 19.0431 15.7649 19.0531 15.8446 19.0729C16.1 19.1367 16.3151 19.2963 16.4504 19.5219C16.5859 19.7479 16.6254 20.0127 16.5616 20.2678C16.5027 20.5037 16.3592 20.7024 16.1597 20.8386C16.2992 20.921 16.4196 21.0333 16.5052 21.1763C16.6407 21.4023 16.6802 21.667 16.6165 21.9223C16.5528 22.1773 16.3932 22.3925 16.1672 22.5281L16.1659 22.5289C16.303 22.6111 16.4212 22.7223 16.5059 22.8631C16.6415 23.0891 16.681 23.354 16.6172 23.6093C16.5533 23.8645 16.3937 24.0796 16.168 24.2151L11.5278 26.9989C10.6617 27.5182 9.66053 27.6975 8.70905 27.5032C7.74904 27.307 6.95398 26.7552 6.47056 25.9493C5.70552 24.6743 5.82017 23.1679 6.76919 22.0181C6.81265 21.9656 6.85545 21.9122 6.89432 21.8567C6.93548 21.7982 6.98353 21.7293 6.99993 21.7057C7.09816 21.5302 8.70104 18.6423 8.70088 18.6426C8.86274 18.3506 9.16612 18.1852 9.47901 18.1854C9.62497 18.1854 9.77305 18.2213 9.90967 18.2971C10.0746 18.3892 10.2132 18.5236 10.3101 18.6854C10.5094 19.0175 10.5164 19.4331 10.3288 19.7694L9.83859 20.6523ZM9.86138 18.9546C9.81055 18.8699 9.74068 18.8023 9.65524 18.7544C9.47862 18.6567 9.25625 18.7203 9.15901 18.8963C8.01206 20.9626 7.62109 21.6667 7.4702 21.9173L7.47365 21.9182C7.46102 21.9601 7.46102 21.9601 7.32294 22.1574C7.27604 22.2242 7.22504 22.2883 7.17305 22.3514C6.357 23.3401 6.26225 24.5844 6.91935 25.68C7.32638 26.3586 7.99909 26.8238 8.81362 26.9901C9.63702 27.1575 10.5049 27.0017 11.2581 26.5498L15.8988 23.7659C16.0048 23.7024 16.0795 23.6016 16.1094 23.482C16.1392 23.3626 16.1207 23.2385 16.0571 23.1325C15.9262 22.9144 15.642 22.8428 15.4239 22.9741L13.1346 24.3476C13.0106 24.422 12.8495 24.382 12.7753 24.2579C12.7008 24.1339 12.741 23.973 12.865 23.8986L15.1545 22.5251L15.898 22.0791C16.0039 22.0154 16.0789 21.9146 16.1087 21.7954C16.1386 21.6758 16.12 21.5515 16.0564 21.4457C15.9254 21.2274 15.6412 21.1564 15.4232 21.2873L12.3902 23.1068C12.2659 23.1814 12.1053 23.1411 12.0309 23.0171C11.9564 22.8931 11.9968 22.7323 12.1206 22.6578L15.8431 20.4247C15.949 20.3611 16.0238 20.2604 16.0536 20.1409C16.0835 20.0215 16.0649 19.8973 16.0015 19.7914C15.938 19.6856 15.8372 19.6108 15.7176 19.581C15.5974 19.5511 15.4738 19.5697 15.3681 19.633L14.679 20.0464C14.6789 20.0464 14.6789 20.0466 14.6787 20.0466H14.6786L11.6457 21.8661C11.5214 21.9409 11.3607 21.9005 11.2864 21.7764C11.2119 21.6524 11.2523 21.4915 11.3761 21.4171L14.4091 19.5976C14.5151 19.5339 14.59 19.4331 14.6198 19.3139C14.6526 19.183 14.6277 19.0492 14.55 18.937C14.4152 18.742 14.1269 18.6902 13.9083 18.8215L9.27095 21.6035C9.16944 21.6642 9.0394 21.6494 8.95428 21.5673C8.86901 21.485 8.84982 21.3556 8.90722 21.2521L9.8715 19.5147C9.96826 19.3411 9.96448 19.1266 9.86133 18.9547L9.86138 18.9546Z"
                fill="#103E13"
              />
              <path
                d="M27.9983 25.9492C27.515 26.7552 26.7202 27.3069 25.76 27.503C24.8084 27.697 23.8075 27.5181 22.9413 26.9987L18.3006 24.2148C18.0748 24.0793 17.9151 23.8642 17.8511 23.6087C17.7876 23.3537 17.8273 23.0888 17.9626 22.8631C18.0471 22.7221 18.1655 22.6109 18.3027 22.5288L18.3014 22.528C18.0756 22.3925 17.9159 22.1773 17.8523 21.9221C17.7883 21.667 17.828 21.4019 17.9634 21.176C18.0507 21.0309 18.1702 20.9174 18.3067 20.8369C18.1086 20.7006 17.9659 20.5027 17.9072 20.2678C17.8432 20.0125 17.8829 19.7476 18.0184 19.5219C18.1537 19.2961 18.369 19.1366 18.6242 19.0728C18.7039 19.0528 18.7847 19.0429 18.8648 19.0429C19.0219 19.0431 19.176 19.0829 19.3177 19.1571C19.3264 18.9736 19.381 18.7933 19.4883 18.6387C19.7823 18.2144 20.3714 18.097 20.8302 18.3724L24.6304 20.6519L24.1406 19.7696C23.9527 19.4327 23.9595 19.0172 24.1588 18.6849C24.2559 18.5232 24.3946 18.3889 24.5604 18.2959C24.6967 18.2205 24.8443 18.1847 24.9899 18.1847C25.3026 18.1849 25.6063 18.3499 25.768 18.642C26.3315 19.6573 27.3948 21.572 27.4696 21.7057C27.4855 21.7288 27.5336 21.7977 27.5747 21.8562C27.6139 21.9118 27.6562 21.965 27.7 22.0178C28.6489 23.168 28.7633 24.6743 27.9983 25.9492L27.9983 25.9492ZM27.296 22.3515C27.2438 22.2884 27.1927 22.2239 27.1461 22.1575C27.0044 21.9565 27.0008 21.9512 26.9901 21.8986C26.8245 21.6245 26.4204 20.8971 25.3097 18.896C25.2123 18.7204 24.9909 18.6563 24.8146 18.7537C24.7279 18.8022 24.6582 18.8699 24.6073 18.9547C24.5044 19.1264 24.5004 19.3409 24.5977 19.5151L25.5616 21.2519C25.6192 21.3556 25.6 21.4848 25.5149 21.5671C25.4299 21.6496 25.3 21.664 25.198 21.6034L20.5607 18.8214C20.3421 18.6904 20.054 18.7417 19.9188 18.9368C19.8411 19.049 19.8163 19.1828 19.8488 19.3135C19.8787 19.4329 19.9536 19.5336 20.0597 19.5972C20.06 19.5974 20.0602 19.5977 20.0605 19.5979L23.0926 21.4169C23.2166 21.4913 23.2568 21.6521 23.1823 21.7762C23.1078 21.9 22.9473 21.9405 22.823 21.8659L19.1005 19.6328C18.9949 19.5695 18.8706 19.5508 18.7512 19.5808C18.6315 19.6107 18.5308 19.6855 18.4673 19.7916C18.4037 19.8974 18.3854 20.0215 18.4149 20.1409C18.4447 20.2603 18.5197 20.3611 18.6256 20.4248L19.35 20.8592L22.3479 22.6579C22.4719 22.7323 22.5121 22.893 22.4376 23.0172C22.3632 23.141 22.2026 23.1813 22.0783 23.1069L19.0456 21.2874C18.8275 21.1562 18.5434 21.2273 18.4123 21.4458C18.3486 21.5517 18.3303 21.6759 18.3598 21.7953C18.3896 21.9146 18.4646 22.0153 18.5707 22.0791L19.3142 22.5252L21.6034 23.8986C21.7273 23.9731 21.7675 24.1338 21.6931 24.2579C21.6186 24.3817 21.4581 24.4224 21.3338 24.3476L19.0446 22.9742C18.939 22.9109 18.8152 22.8922 18.6951 22.9222C18.5757 22.9521 18.4747 23.0268 18.4113 23.1326C18.3478 23.2385 18.3293 23.3629 18.3588 23.4821C18.3886 23.6015 18.4636 23.7022 18.5697 23.7659L23.2104 26.5499C23.9635 27.0017 24.8319 27.1581 25.6549 26.9902C26.4692 26.8239 27.142 26.3586 27.549 25.68C28.2068 24.5842 28.1121 23.3399 27.2963 22.3515L27.296 22.3515Z"
                fill="#103E13"
              />
            </svg>
            <h3 className="text-2xl  font-semibold w-full xl:w-[55%] mx-auto">
              Clubs dan groups
            </h3>
            <p className="text-center mx-auto">
              Our membership management software provides full automation of
              membership renewals and payments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

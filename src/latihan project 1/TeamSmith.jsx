import React from 'react';
import hero4 from './img/hero4.jpg';
export default function TeamSmith() {
    return (
        <section id='team' className="grid grid-cols-1 md:grid-cols-[1.5fr_2fr] items-center justify-between px-8 gap-12 md:px-16 lg:px-32">
            <img src={hero4} alt="hero 2" width={300} height={300} className='w-[70%] mx-auto md:w-[80%] rounded-lg h-auto mb-6' />
            <div className='w-full'>
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4">The unseen of spending three years at Pixelgrade</h2>
                <p className='text-sm md:text-base text-justify  mb-4 md:mb-8 lg:mb-12'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.</p>
                <h3 className='text-Primary font-semibold text-xl md:text-2xl'>Tim Smidth</h3>
                <p className='text-sm md:text-base'>British Dragon Boat Racing Association</p>
                <div className='grid gap-2 grid-cols-3 md:grid-cols-4 xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_2fr] justify-center items-center my-12'>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_212_1587)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.74931 0.958862C5.59319 0.958862 7.08798 2.45363 7.08798 4.29753V0.958862H10.4266C12.2705 0.958862 13.7653 2.45363 13.7653 4.29753C13.7653 6.14141 12.2705 7.63619 10.4266 7.63619C12.2705 7.63619 13.7653 9.13098 13.7653 10.9749C13.7653 11.8904 13.3968 12.7199 12.7999 13.3231L12.7874 13.3357L12.7764 13.3467C12.1731 13.9444 11.343 14.3135 10.4266 14.3135C9.51655 14.3135 8.6915 13.9494 8.08924 13.3588C8.08143 13.3512 8.07362 13.3434 8.06584 13.3357C8.05853 13.3284 8.05125 13.321 8.044 13.3136C7.45269 12.7113 7.08798 11.8856 7.08798 10.9749C7.08798 12.8187 5.59319 14.3135 3.74931 14.3135C1.90542 14.3135 0.410645 12.8187 0.410645 10.9749V7.63619H3.74931C1.90542 7.63619 0.410645 6.14141 0.410645 4.29753C0.410645 2.45363 1.90542 0.958862 3.74931 0.958862ZM6.42024 4.29753C6.42024 5.77265 5.22443 6.96846 3.74931 6.96846V1.6266C5.22443 1.6266 6.42024 2.82241 6.42024 4.29753ZM13.0976 10.9749C13.0976 9.49974 11.9018 8.30393 10.4266 8.30393C8.95152 8.30393 7.75571 9.49974 7.75571 10.9749H13.0976ZM1.07838 8.30393V10.9749C1.07838 12.45 2.27419 13.6458 3.74931 13.6458C5.22443 13.6458 6.42024 12.45 6.42024 10.9749V8.30393H1.07838ZM7.75571 6.96846V1.6266H10.4266C11.9018 1.6266 13.0976 2.82241 13.0976 4.29753C13.0976 5.77265 11.9018 6.96846 10.4266 6.96846H7.75571Z" fill="#5417D7" />
                        </g>
                        <defs>
                            <clipPath id="clip0_212_1587">
                                <rect width="13.3547" height="13.3547" fill="white" transform="translate(0.410645 0.958862)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.37823 1.55513L0.0443115 4.85553C0.711156 5.51568 1.47292 6.07204 2.30347 6.5073C2.53303 7.11013 2.89287 7.67547 3.38298 8.16064C5.22689 9.98599 8.21643 9.98599 10.0603 8.16064C10.5504 7.67547 10.9103 7.11013 11.1398 6.50727C11.9704 6.07204 12.7321 5.51568 13.399 4.85553L10.0678 1.55781C10.0653 1.55535 10.0628 1.55288 10.0603 1.55042C8.21643 -0.274943 5.22689 -0.274943 3.38298 1.55042C3.3814 1.55199 3.37981 1.55356 3.37823 1.55513ZM9.7413 7.10275C8.76975 7.42734 7.74985 7.59357 6.72164 7.59357C5.69343 7.59357 4.67357 7.42734 3.70202 7.10275C3.80729 7.241 3.92351 7.37368 4.05071 7.49962C5.52583 8.95992 7.91745 8.95992 9.39257 7.49962C9.51978 7.37368 9.63603 7.241 9.7413 7.10275ZM4.11919 2.14533C4.36969 2.30916 4.63604 2.44936 4.91476 2.56365C5.48761 2.79855 6.10159 2.91945 6.72164 2.91945C7.3417 2.91945 7.95568 2.79855 8.52853 2.56365C8.80724 2.44936 9.0736 2.30916 9.32413 2.14533C7.86741 0.773184 5.57588 0.773188 4.11919 2.14533Z" fill="#3B4158" />
                    </svg>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.71798 1.47447C7.73861 1.49275 7.75302 1.5168 7.75927 1.54337C7.76554 1.56994 7.76333 1.59774 7.75297 1.62304L6.03145 7.27675C6.00977 7.33847 5.96542 7.39008 5.90709 7.42153C5.85963 7.45266 5.80469 7.47103 5.74774 7.47487H0.276173C0.229445 7.47266 0.185176 7.45368 0.151817 7.42153C0.131973 7.40353 0.118045 7.38014 0.111814 7.35437C0.105584 7.32858 0.107339 7.30156 0.116844 7.27675L1.84226 1.62304C1.86214 1.56054 1.90509 1.50756 1.96272 1.47447C2.01097 1.44557 2.06564 1.42858 2.12205 1.42494H7.59362C7.63999 1.42537 7.68444 1.44308 7.71798 1.47447ZM4.86172 6.13763L5.89153 2.76216H3.00809L1.98215 6.13763H4.86172ZM12.9409 1.53161C12.9595 1.55288 12.9829 1.56974 13.0091 1.58096C13.0353 1.59217 13.0638 1.59744 13.0924 1.59637H13.8036C13.8307 1.59664 13.8573 1.59012 13.8812 1.57746C13.9049 1.56479 13.925 1.54639 13.9396 1.52399C13.9522 1.50649 13.9611 1.48668 13.9658 1.46574C13.9705 1.4448 13.9708 1.42315 13.9668 1.40208L13.8269 0.396298C13.8136 0.349749 13.7896 0.306765 13.7569 0.270575C13.7383 0.249306 13.7149 0.232439 13.6887 0.221226C13.6625 0.210013 13.634 0.204745 13.6054 0.205809H12.8942C12.8672 0.205551 12.8404 0.212062 12.8167 0.224727C12.7929 0.237392 12.7727 0.255794 12.7582 0.278197C12.731 0.331532 12.7194 0.36582 12.731 0.396298L12.8748 1.40208C12.8822 1.45105 12.9053 1.49643 12.9409 1.53161ZM15.1987 0.388679C15.1853 0.342127 15.1614 0.299143 15.1287 0.262955C15.1108 0.241764 15.0882 0.224902 15.0626 0.213669C15.037 0.202439 15.0091 0.19714 14.9811 0.198189H14.266C14.2394 0.197446 14.213 0.203781 14.1898 0.216524C14.1665 0.229267 14.1472 0.247946 14.1339 0.270575C14.108 0.304374 14.0968 0.346829 14.1028 0.388679L14.2466 1.39446C14.2556 1.44291 14.2785 1.48785 14.3126 1.52399C14.3316 1.54484 14.355 1.56143 14.3812 1.5726C14.4074 1.58378 14.4357 1.58929 14.4642 1.58875H15.1792C15.2058 1.5891 15.232 1.5826 15.2552 1.56989C15.2784 1.55718 15.2978 1.53873 15.3114 1.51637C15.3249 1.49933 15.3343 1.47953 15.339 1.45843C15.3438 1.43734 15.3436 1.41548 15.3386 1.39446L15.1987 0.388679ZM12.3152 1.91259L12.2452 1.41732H8.79832C8.7442 1.42024 8.69184 1.43735 8.64675 1.46684C8.61813 1.48215 8.59322 1.50335 8.57376 1.529C8.55432 1.55466 8.54078 1.58414 8.53407 1.61543L8.24649 2.56024C8.23502 2.58385 8.23109 2.61035 8.23525 2.63619C8.23943 2.66203 8.25147 2.68602 8.2698 2.70502C8.30258 2.73522 8.34535 2.75282 8.39028 2.75455H12.5795L11.5497 6.13002H7.37213C7.31826 6.13122 7.2658 6.14705 7.22058 6.17572C7.16562 6.20995 7.12548 6.26286 7.10788 6.3243L6.81643 7.26914C6.80691 7.29338 6.80441 7.31972 6.80921 7.34526C6.81403 7.37082 6.82591 7.39456 6.84361 7.41389C6.87536 7.44612 6.91847 7.4652 6.96409 7.46723H12.4512C12.508 7.46245 12.5627 7.44414 12.6105 7.41389C12.6679 7.38229 12.711 7.33059 12.731 7.26914L14.3087 2.10308H12.5328C12.5046 2.10362 12.4767 2.09849 12.4506 2.08801C12.4245 2.07752 12.4009 2.0619 12.3813 2.04212C12.3491 2.00757 12.3264 1.96564 12.3152 1.92021V1.91259Z" fill="white" />
                    </svg>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.21067 0.84711C1.52536 0.707622 1.91516 0.683527 2.22019 0.781602C2.29701 0.803079 2.36366 0.849531 2.40874 0.913015C2.45352 0.976103 2.47419 1.05213 2.46729 1.12813C2.46684 1.17747 2.45422 1.22601 2.43048 1.2698C2.40632 1.31438 2.37132 1.35272 2.32846 1.38159C2.2856 1.41043 2.23613 1.42898 2.18423 1.43561C2.13231 1.44225 2.07952 1.4368 2.03027 1.4197L2.02653 1.4184L2.02301 1.41662C1.99781 1.40396 1.97105 1.39444 1.94336 1.38823L1.94162 1.38786C1.72704 1.33315 1.52464 1.42379 1.45071 1.53516C1.41545 1.58826 1.41108 1.64186 1.44044 1.69062C1.4719 1.74284 1.54903 1.80144 1.70512 1.8432C1.74805 1.85451 1.79205 1.86543 1.83668 1.87652C1.96011 1.90719 2.08838 1.93906 2.21241 1.98322L2.21288 1.9834C2.78509 2.19235 2.99816 2.62512 2.92522 3.03217C2.85306 3.4347 2.5028 3.80104 1.97607 3.88745C1.78441 3.92823 1.58494 3.92028 1.39743 3.86441C1.20944 3.80837 1.03999 3.70611 0.905917 3.56774L0.90242 3.56414C0.860097 3.51201 0.831628 3.45077 0.819007 3.38579C0.807395 3.32714 0.813515 3.26654 0.836604 3.21111C0.859559 3.15601 0.898385 3.10833 0.948486 3.07358C1.00141 3.03419 1.06521 3.01056 1.13199 3.00563C1.19855 3.00072 1.26515 3.01461 1.32359 3.04555C1.38196 3.07261 1.43625 3.10714 1.48499 3.1482L1.48591 3.14895C1.57212 3.22462 1.67643 3.24434 1.77645 3.22608C1.87793 3.20755 1.97336 3.14992 2.03474 3.07345C2.09571 2.99747 2.12019 2.9072 2.09114 2.81958C2.0619 2.73132 1.97401 2.63243 1.78089 2.54976C1.73041 2.52918 1.67806 2.51259 1.62361 2.49644C1.60893 2.49208 1.594 2.48775 1.57889 2.48335C1.53863 2.47162 1.4972 2.45954 1.45658 2.44622C1.42861 2.43707 1.40086 2.4284 1.37337 2.4198C1.29825 2.39632 1.22502 2.37343 1.15454 2.34274C1.00114 2.29261 0.868615 2.19636 0.776684 2.06823C0.684372 1.93958 0.637925 1.78575 0.644246 1.62969C0.644739 1.24938 0.894305 0.987369 1.21067 0.84711Z" fill="#3A3B7B" />
                    </svg>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.71201 9.52972H6.09736L5.69405 9.13133C5.5871 9.02568 5.44202 8.96632 5.29076 8.96632H4.71201C2.50702 8.96632 0.719525 7.20062 0.719525 5.02252C0.719525 2.84441 2.50702 1.07872 4.71201 1.07872H9.27486C11.4798 1.07872 13.2673 2.84441 13.2673 5.02252C13.2673 7.20062 11.4798 8.96632 9.27486 8.96632H7.56799C7.34108 8.96632 7.12348 8.87728 6.96302 8.7188L6.49054 8.25206C6.22314 7.98792 5.86044 7.83952 5.48227 7.83952H4.71201C3.13701 7.83952 1.86024 6.57831 1.86024 5.02252C1.86024 3.46672 3.13701 2.20552 4.71201 2.20552H9.27486C10.8499 2.20552 12.1266 3.46672 12.1266 5.02252C12.1266 6.57831 10.8499 7.83952 9.27486 7.83952H8.17888C7.95197 7.83952 7.73437 7.75048 7.57392 7.592L7.10141 7.12526C6.83401 6.86112 6.47133 6.71272 6.09316 6.71272H4.71201C3.76703 6.71272 3.00095 5.95598 3.00095 5.02252C3.00095 4.08905 3.76703 3.33232 4.71201 3.33232H9.27486C10.2198 3.33232 10.9859 4.08905 10.9859 5.02252C10.9859 5.9446 10.2384 6.69424 9.30935 6.71238L9.30917 6.71272H8.89183C8.66492 6.71272 8.44732 6.62368 8.28686 6.4652L7.81436 5.99846C7.59495 5.78171 7.3114 5.64291 7.00776 5.60007L6.99343 5.58592H4.71201C4.39702 5.58592 4.14166 5.33367 4.14166 5.02252C4.14166 4.71136 4.39702 4.45912 4.71201 4.45912H9.27486C9.58985 4.45912 9.84521 4.71136 9.84521 5.02252C9.84521 5.33367 9.58985 5.58592 9.27486 5.58592H8.13415L8.53745 5.98431C8.64441 6.08996 8.78948 6.14932 8.94074 6.14932H9.27486C9.90485 6.14932 10.4156 5.64483 10.4156 5.02252C10.4156 4.40021 9.90485 3.89572 9.27486 3.89572H4.71201C4.08202 3.89572 3.5713 4.40021 3.5713 5.02252C3.5713 5.64483 4.08202 6.14932 4.71201 6.14932H6.80611C7.03302 6.14932 7.25062 6.23836 7.41107 6.39683L7.88358 6.86357C8.15098 7.12772 8.51366 7.27612 8.89183 7.27612H9.41745V7.27179C10.611 7.19909 11.5563 6.21983 11.5563 5.02252C11.5563 3.7779 10.5348 2.76892 9.27486 2.76892H4.71201C3.45203 2.76892 2.43059 3.7779 2.43059 5.02252C2.43059 6.26716 3.45203 7.27612 4.71201 7.27612H6.09316C6.32007 7.27612 6.53768 7.36516 6.69813 7.52363L7.17063 7.99037C7.43804 8.25452 7.80072 8.40292 8.17888 8.40292H9.27486C11.1649 8.40292 12.697 6.88947 12.697 5.02252C12.697 3.15557 11.1649 1.64212 9.27486 1.64212H4.71201C2.82202 1.64212 1.28988 3.15557 1.28988 5.02252C1.28988 6.88947 2.82202 8.40292 4.71201 8.40292H5.48227C5.70918 8.40292 5.92678 8.49196 6.08723 8.65043L6.55974 9.11717C6.82714 9.38132 7.18982 9.52972 7.56799 9.52972H9.27486C11.7948 9.52972 13.8377 7.51178 13.8377 5.02252C13.8377 2.53326 11.7948 0.51532 9.27486 0.51532L4.71201 0.515321C2.19202 0.515321 0.14917 2.53326 0.14917 5.02252C0.14917 7.51178 2.19203 9.52972 4.71201 9.52972Z" fill="#212326" />
                    </svg>
                    <svg width="40" height="40" className='mx-auto' viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_212_1617)">
                            <path d="M4.98424 0.516907C4.30625 0.516907 3.65603 0.786237 3.17662 1.26565L1.61202 2.83025C1.13261 3.30966 0.863281 3.95987 0.863281 4.63787C0.863281 6.04972 2.00781 7.19424 3.41965 7.19424C4.09765 7.19424 4.74786 6.9249 5.22727 6.44549L6.30951 5.36325C6.30951 5.36322 6.30954 5.36327 6.30951 5.36325L9.46279 2.20997C9.69176 1.981 10.0023 1.85237 10.3261 1.85237C10.8682 1.85237 11.3278 2.2057 11.4872 2.69462L12.4823 1.69945C12.0283 0.988402 11.2323 0.516907 10.3261 0.516907C9.64811 0.516907 8.9979 0.786237 8.51849 1.26565L4.28297 5.50118C4.054 5.73014 3.74346 5.85877 3.41965 5.85877C2.74536 5.85877 2.19875 5.31217 2.19875 4.63787C2.19875 4.31406 2.32738 4.00352 2.55634 3.77455L4.12093 2.20997C4.34989 1.981 4.66043 1.85237 4.98424 1.85237C5.52637 1.85237 5.98595 2.20571 6.1453 2.69465L7.14048 1.69948C6.68649 0.988415 5.89044 0.516907 4.98424 0.516907Z" fill="#394149" />
                            <path d="M9.62491 5.50118C9.39595 5.73014 9.08541 5.85877 8.7616 5.85877C8.21956 5.85877 7.76 5.50554 7.60061 5.01669L6.60547 6.01184C7.05948 6.7228 7.85549 7.19424 8.7616 7.19424C9.43959 7.19424 10.0898 6.9249 10.5692 6.44549L14.8047 2.20997C15.0337 1.981 15.3442 1.85237 15.6681 1.85237C16.3424 1.85237 16.889 2.39899 16.889 3.07328C16.889 3.39708 16.7603 3.70762 16.5314 3.93659L14.9668 5.50118C14.7378 5.73014 14.4273 5.85877 14.1035 5.85877C13.5614 5.85877 13.1018 5.50547 12.9424 5.01658L11.9473 6.01175C12.4013 6.72277 13.1973 7.19424 14.1035 7.19424C14.7815 7.19424 15.4317 6.9249 15.9111 6.44549L17.4757 4.8809C17.9551 4.40149 18.2244 3.75127 18.2244 3.07328C18.2244 1.66143 17.0799 0.516907 15.6681 0.516907C14.9901 0.516907 14.3398 0.786237 13.8604 1.26565L9.62491 5.50118Z" fill="#394149" />
                        </g>
                        <defs>
                            <clipPath id="clip0_212_1617">
                                <rect width="17.3611" height="6.67733" fill="white" transform="translate(0.863281 0.516907)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <a href="#" className='text-Primary text-xl font-semibold flex items-center gap-8'><span>Meet all customers</span> <span><svg width="17" height="10" viewBox="0 0 17 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 9L15.2929 5.70711C15.6834 5.31658 15.6834 4.68342 15.2929 4.29289L12 1M15 5L1 5" stroke="#28CB8B" stroke-width="2" stroke-linecap="round" />
                    </svg>
                    </span></a>
                </div>
            </div>
        </section>
    )
}
exports.id = 675;
exports.ids = [675];
exports.modules = {

/***/ 675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(9332);
// EXTERNAL MODULE: ./src/redux/playerSlice.js
var playerSlice = __webpack_require__(2872);
// EXTERNAL MODULE: external "react-icons/md"
var md_ = __webpack_require__(4041);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./src/components/MusicPlayer/Controls.js




const Controls = ({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs, handlePlayPause, handlePrevSong, handleNextSong })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex items-center space-x-10 md:space-x-0 justify-around md:w-36 lg:w-52 2xl:w-80",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsArrowRepeat, {
                size: 20,
                color: repeat ? "red" : "white",
                onClick: ()=>setRepeat((prev)=>!prev),
                className: "hidden sm:block cursor-pointer"
            }),
            currentSongs?.length && /*#__PURE__*/ jsx_runtime.jsx(md_.MdSkipPrevious, {
                size: 30,
                color: "#FFF",
                className: "cursor-pointer",
                onClick: handlePrevSong
            }),
            isPlaying ? /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillPauseFill, {
                size: 45,
                color: "#FFF",
                onClick: handlePlayPause,
                className: "cursor-pointer"
            }) : /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillPlayFill, {
                size: 45,
                color: "#FFF",
                onClick: handlePlayPause,
                className: "cursor-pointer"
            }),
            currentSongs?.length && /*#__PURE__*/ jsx_runtime.jsx(md_.MdSkipNext, {
                size: 30,
                color: "#FFF",
                className: "cursor-pointer",
                onClick: handleNextSong
            }),
            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsShuffle, {
                size: 20,
                color: shuffle ? "red" : "white",
                onClick: ()=>setShuffle((prev)=>!prev),
                className: "hidden sm:block cursor-pointer"
            })
        ]
    });
/* harmony default export */ const MusicPlayer_Controls = (Controls);

;// CONCATENATED MODULE: ./src/components/MusicPlayer/Player.js
/* eslint-disable jsx-a11y/media-has-caption */ 

const Player = ({ activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat })=>{
    const ref = (0,external_react_.useRef)(null);
    // eslint-disable-next-line no-unused-expressions
    if (ref.current) {
        if (isPlaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    }
    (0,external_react_.useEffect)(()=>{
        ref.current.volume = volume;
    }, [
        volume
    ]);
    // updates audio element only on seekTime change (and not on each rerender):
    (0,external_react_.useEffect)(()=>{
        ref.current.currentTime = seekTime;
    }, [
        seekTime
    ]);
    return /*#__PURE__*/ jsx_runtime.jsx("audio", {
        src: activeSong?.downloadUrl[2]?.link,
        ref: ref,
        loop: repeat,
        onEnded: onEnded,
        onTimeUpdate: onTimeUpdate,
        onLoadedData: onLoadedData
    });
};
/* harmony default export */ const MusicPlayer_Player = (Player);

;// CONCATENATED MODULE: ./src/components/MusicPlayer/Seekbar.js


const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime })=>{
    // converts the time to format 0:00
    const getTime = (time)=>`${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "sm:flex flex-row items-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                onClick: ()=>setSeekTime(appTime - 5),
                className: "hidden lg:mr-4 lg:block text-white",
                children: "-"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-white",
                children: value === 0 ? "0:00" : getTime(value)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                type: "range",
                step: "any",
                value: value,
                min: min,
                max: max,
                onInput: onInput,
                className: "w-full"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-white",
                children: max === 0 ? "0:00" : getTime(max)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                onClick: ()=>setSeekTime(appTime + 5),
                className: "hidden lg:ml-4 lg:block text-white",
                children: "+"
            })
        ]
    });
};
/* harmony default export */ const MusicPlayer_Seekbar = (Seekbar);

;// CONCATENATED MODULE: ./src/components/MusicPlayer/Track.js


const Track = ({ isPlaying, isActive, activeSong })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex-1 flex items-center justify-start",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: `${isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""} hidden sm:block h-16 w-16 mr-4`,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    src: activeSong?.image[2].link,
                    alt: "cover art",
                    className: "rounded-full"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "w-20",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "truncate text-white font-bold text-lg",
                        children: activeSong?.name ? activeSong?.name : "No active Song"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "truncate text-gray-300",
                        children: activeSong?.album.name ? activeSong?.album.name : "No active Song"
                    })
                ]
            })
        ]
    });
/* harmony default export */ const MusicPlayer_Track = (Track);

;// CONCATENATED MODULE: ./src/components/MusicPlayer/VolumeBar.js



const VolumeBar = ({ value, min, max, onChange, setVolume })=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "hidden lg:flex flex-1 items-center justify-end",
        children: [
            value <= 1 && value > 0.5 && /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillVolumeUpFill, {
                size: 25,
                color: "#FFF",
                onClick: ()=>setVolume(0)
            }),
            value <= 0.5 && value > 0 && /*#__PURE__*/ jsx_runtime.jsx(bs_.BsVolumeDownFill, {
                size: 25,
                color: "#FFF",
                onClick: ()=>setVolume(0)
            }),
            value === 0 && /*#__PURE__*/ jsx_runtime.jsx(bs_.BsFillVolumeMuteFill, {
                size: 25,
                color: "#FFF",
                onClick: ()=>setVolume(1)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                type: "range",
                step: "any",
                value: value,
                min: min,
                max: max,
                onChange: onChange,
                className: "2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
            })
        ]
    });
/* harmony default export */ const MusicPlayer_VolumeBar = (VolumeBar);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/MusicPlayer/SeekbarMobile.js


const SeekbarMobile = ({ value, min, max, onInput, setSeekTime, appTime })=>{
    // converts the time to format 0:00
    const getTime = (time)=>`${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-row items-center justify-center",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-white",
                children: value === 0 ? "0:00" : getTime(value)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                type: "range",
                step: "any",
                value: value,
                min: min,
                max: max,
                onInput: onInput,
                className: "w-60 h-1 mx-4 rounded-lg"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "text-white",
                children: max === 0 ? "0:00" : getTime(max)
            })
        ]
    });
};
/* harmony default export */ const MusicPlayer_SeekbarMobile = (SeekbarMobile);

;// CONCATENATED MODULE: ./src/components/MusicPlayer/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 












const MusicPlayer = ()=>{
    const router = (0,router_.useRouter)();
    const { activeSong, currentSongs, currentIndex, isActive, isPlaying, openPlayer } = (0,external_react_redux_.useSelector)((state)=>state.player);
    const [duration, setDuration] = (0,external_react_.useState)(0);
    const [seekTime, setSeekTime] = (0,external_react_.useState)(0);
    const [appTime, setAppTime] = (0,external_react_.useState)(0);
    const [volume, setVolume] = (0,external_react_.useState)(0.3);
    const [repeat, setRepeat] = (0,external_react_.useState)(false);
    const [shuffle, setShuffle] = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const pathname = (0,navigation.usePathname)();
    const searchParams = (0,navigation.useSearchParams)();
    (0,external_react_.useEffect)(()=>{
        if (pathname != "/song") {
            dispatch((0,playerSlice/* setopenPlayer */._k)(false));
        }
    }, [
        pathname,
        searchParams
    ]);
    (0,external_react_.useEffect)(()=>{
        if (currentSongs?.length) dispatch((0,playerSlice/* playPause */.A7)(true));
    }, [
        currentIndex
    ]);
    const handlePlayPause = ()=>{
        if (!isActive) return;
        if (isPlaying) {
            dispatch((0,playerSlice/* playPause */.A7)(false));
        } else {
            dispatch((0,playerSlice/* playPause */.A7)(true));
        }
    };
    const handleNextSong = ()=>{
        dispatch((0,playerSlice/* playPause */.A7)(false));
        if (!shuffle) {
            dispatch((0,playerSlice/* nextSong */.yI)((currentIndex + 1) % currentSongs?.length));
        } else {
            dispatch((0,playerSlice/* nextSong */.yI)(Math.floor(Math.random() * currentSongs?.length)));
        }
    };
    const handlePrevSong = ()=>{
        if (currentIndex === 0) {
            dispatch((0,playerSlice/* prevSong */.RP)(currentSongs?.length - 1));
        } else if (shuffle) {
            dispatch((0,playerSlice/* prevSong */.RP)(Math.floor(Math.random() * currentSongs?.length)));
        } else {
            dispatch((0,playerSlice/* prevSong */.RP)(currentIndex - 1));
        }
    };
    const handleClick = (openit, e)=>{
        e.stopPropagation();
        if (openit) {
            dispatch((0,playerSlice/* setopenPlayer */._k)(true));
            router.push({
                pathname: "/song/[id]",
                query: {
                    id: activeSong.id
                }
            }).then((r)=>console.log("hello"));
        }
    };
    const isMobileScreen = window.innerWidth <= 768;
    if (!isMobileScreen) return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative px-8 w-full flex items-center justify-between",
        onClick: (e)=>handleClick(openPlayer, e),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(bs_.BsArrowUpRightCircle, {
                onClick: (e)=>handleClick(true, e),
                className: "text-light-1 text-5xl mr-2"
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Track, {
                isPlaying: isPlaying,
                isActive: isActive,
                activeSong: activeSong
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex-1 flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Controls, {
                        isPlaying: isPlaying,
                        isActive: isActive,
                        repeat: repeat,
                        setRepeat: setRepeat,
                        shuffle: shuffle,
                        setShuffle: setShuffle,
                        currentSongs: currentSongs,
                        handlePlayPause: handlePlayPause,
                        handlePrevSong: handlePrevSong,
                        handleNextSong: handleNextSong
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Seekbar, {
                        value: appTime,
                        min: "0",
                        max: duration,
                        onInput: (event)=>setSeekTime(event.target.value),
                        setSeekTime: setSeekTime,
                        appTime: appTime
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Player, {
                        activeSong: activeSong,
                        volume: volume,
                        isPlaying: isPlaying,
                        seekTime: seekTime,
                        repeat: repeat,
                        currentIndex: currentIndex,
                        onEnded: handleNextSong,
                        onTimeUpdate: (event)=>setAppTime(event.target.currentTime),
                        onLoadedData: (event)=>setDuration(event.target.duration)
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_VolumeBar, {
                value: volume,
                min: "0",
                max: "1",
                onChange: (event)=>setVolume(event.target.value),
                setVolume: setVolume
            })
        ]
    });
    else {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "relative px-8 w-full flex-col flex items-center justify-between",
            onClick: (e)=>handleClick(openPlayer, e),
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "w-[20%] h-2 bg-dark-3 mt-2 rounded-full",
                    onClick: (e)=>handleClick(true, e)
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex-1 flex flex-row items-center  justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Track, {
                            isPlaying: isPlaying,
                            isActive: isActive,
                            activeSong: activeSong
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Controls, {
                            isPlaying: isPlaying,
                            isActive: isActive,
                            repeat: repeat,
                            setRepeat: setRepeat,
                            shuffle: shuffle,
                            setShuffle: setShuffle,
                            currentSongs: currentSongs,
                            handlePlayPause: handlePlayPause,
                            handlePrevSong: handlePrevSong,
                            handleNextSong: handleNextSong
                        })
                    ]
                }),
                "      ",
                /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_SeekbarMobile, {
                    value: appTime,
                    min: "0",
                    max: duration,
                    onInput: (event)=>setSeekTime(event.target.value),
                    setSeekTime: setSeekTime,
                    appTime: appTime
                }),
                /*#__PURE__*/ jsx_runtime.jsx(MusicPlayer_Player, {
                    activeSong: activeSong,
                    volume: volume,
                    isPlaying: isPlaying,
                    seekTime: seekTime,
                    repeat: repeat,
                    currentIndex: currentIndex,
                    onEnded: handleNextSong,
                    onTimeUpdate: (event)=>setAppTime(event.target.currentTime),
                    onLoadedData: (event)=>setDuration(event.target.duration)
                })
            ]
        });
    }
};
/* harmony default export */ const components_MusicPlayer = (MusicPlayer);

// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: external "react-icons/ri"
var ri_ = __webpack_require__(8098);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/fc"
var fc_ = __webpack_require__(178);
// EXTERNAL MODULE: external "react-useanimations"
var external_react_useanimations_ = __webpack_require__(4018);
// EXTERNAL MODULE: external "react-useanimations/lib/github"
var github_ = __webpack_require__(2389);
// EXTERNAL MODULE: external "react-useanimations/lib/infinity"
var infinity_ = __webpack_require__(6886);
// EXTERNAL MODULE: external "react-useanimations/lib/skipBack"
var skipBack_ = __webpack_require__(5511);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Sidebar.js












const links = [
    {
        name: "Home",
        href: "/",
        icon: hi_.HiOutlineHome
    },
    {
        name: "Trending",
        href: "/Trending",
        icon: fi_.FiTrendingUp
    },
    {
        name: "Top Playlists",
        href: "/playlists",
        icon: bi_.BiSolidPlaylist
    },
    {
        name: "Albums",
        href: "/Albums",
        icon: ri_.RiAlbumFill
    },
    {
        name: "Top Charts",
        href: "/Charts",
        icon: hi_.HiOutlineChartSquareBar
    },
    {
        name: "About",
        href: "/about",
        icon: fc_.FcAbout
    }
];
const NavLinks = ({ handleClick })=>/*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "mt-10 mr-5",
        children: links.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                href: item.href,
                className: "flex flex-row justify-start items-center my-8 text-sm font-medium text-light-1 hover:text-dark-2",
                onClick: ()=>handleClick && handleClick(),
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(item.icon, {
                        className: "w-6 h-6 mr-2"
                    }),
                    item.name
                ]
            }, item.name))
    });
const Sidebar = ()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "md:flex hidden flex-col w-[240px] py-10 px-4 bg-dark-1",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex justify-between"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(NavLinks, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute md:hidden block top-6 right-3",
                children: !mobileMenuOpen ? /*#__PURE__*/ jsx_runtime.jsx(hi_.HiOutlineMenu, {
                    className: "w-8 h-8 ml-2 text-light-1",
                    onClick: ()=>setMobileMenuOpen(true)
                }) : /*#__PURE__*/ jsx_runtime.jsx(ri_.RiCloseLine, {
                    className: "w-8 h-8 ml-2 text-light-1",
                    onClick: ()=>setMobileMenuOpen(false)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#8b863d] backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? "left-0" : "-left-full"}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex justify-between"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(NavLinks, {
                        handleClick: ()=>setMobileMenuOpen(false)
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Sidebar = (Sidebar);

;// CONCATENATED MODULE: ./src/components/Search.js




const Search = ()=>{
    const [query, setQuery] = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    function handleSearch(e) {
        e.preventDefault();
        if (!query.trim()) {
            console.error("Invalid search query.");
            return;
        }
        const encodedQuery = encodeURIComponent(query);
        if (encodedQuery != "") {
            router.push({
                pathname: "/search",
                query: {
                    searchTerm: encodedQuery
                }
            });
        }
    }
    return /*#__PURE__*/ jsx_runtime.jsx("form", {
        onSubmit: handleSearch,
        autoComplete: "off",
        className: "w-[90%] md:w-full p-2 text-gray-400 focus-within:text-gray-600",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "flex flex-row justify-start items-center",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(fi_.FiSearch, {
                    "aria-hidden": "true",
                    className: "w-5 h-5 ml-4"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("input", {
                    name: "search-field",
                    autoComplete: "on",
                    id: "search-field",
                    className: "flex-1  border-none placeholder-dark-1 bg-white/5 bg-opacity-80 backdrop-blur-sm outline-none text-base text-dark-1 p-4",
                    placeholder: "Search Music here.....",
                    type: "search",
                    value: query,
                    onChange: (e)=>setQuery(e.target.value)
                })
            ]
        })
    });
};
/* harmony default export */ const components_Search = (Search);

;// CONCATENATED MODULE: ./src/components/VideoPlayer.js


const VideoPlayer = ({ videoSrc })=>{
    const videoRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        const videoElement = videoRef.current;
        const handleVideoEnded = ()=>{
            videoElement.currentTime = 0;
            videoElement.play();
        };
        videoElement.addEventListener("ended", handleVideoEnded);
        return ()=>{
            videoElement.removeEventListener("ended", handleVideoEnded);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "flex justify-center items-center h-[100vh] preload",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("video", {
            ref: videoRef,
            autoPlay: true,
            muted: true,
            loop: true,
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("source", {
                    src: videoSrc,
                    type: "video/mp4"
                }),
                "Your browser does not support the video tag."
            ]
        })
    });
};
/* harmony default export */ const components_VideoPlayer = (VideoPlayer);

;// CONCATENATED MODULE: ./src/components/Layout.js








function Layout({ children }) {
    const { activeSong } = (0,external_react_redux_.useSelector)((state)=>state.player);
    const [isMobileScreen, setIsMobileScreen] = (0,external_react_.useState)(false);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const [loading, setloading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const response = await fetch(`${"https://saavn.me/"}playlists?id=110858205`);
                const data = await response.json();
                dispatch((0,playerSlice/* setTopCharts */.Ik)(data?.data));
                const response1 = await fetch(`${"https://saavn.me/"}modules?language=hindi,english,haryanvi`);
                const data1 = await response1.json();
                dispatch((0,playerSlice/* sethomepageData */.HO)(data1?.data));
                setTimeout(()=>{
                    setloading(false);
                }, 5000);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData().then((r)=>console.log(r));
    }, []);
    (0,external_react_.useEffect)(()=>{
        const handleResize = ()=>{
            setIsMobileScreen(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            loading && /*#__PURE__*/ jsx_runtime.jsx(components_VideoPlayer, {
                videoSrc: "/loader.mp4"
            }),
            !loading && /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative flex flex-row w-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex-1 flex flex-row bg-gradient-to-br from-white/30 to-light-1 dark:to-dark-2 backdrop-blur-lg",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(components_Sidebar, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "flex flex-col flex-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(components_Search, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row ",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "flex-1  h-fit pb-40",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("main", {
                                                children: children
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    activeSong?.name && (isMobileScreen ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "fixed bottom-0 left-0 right-0 h-32 z-10 animate-slideup bg-gradient-to-br from-white/10 to-light-1 backdrop-blur-lg rounded-t-3xl ",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_MusicPlayer, {})
                    }) : /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "absolute h-28  bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-light-1 backdrop-blur-lg rounded-t-3xl z-10",
                        children: /*#__PURE__*/ jsx_runtime.jsx(components_MusicPlayer, {})
                    }))
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/service.js
var service = __webpack_require__(6080);
;// CONCATENATED MODULE: ./src/redux/store.js



const store = (0,toolkit_.configureStore)({
    reducer: {
        [service/* Api */.V0.reducerPath]: service/* Api */.V0.reducer,
        player: playerSlice/* default */.ZP
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(service/* Api */.V0.middleware)
});

;// CONCATENATED MODULE: ./src/pages/_app.js






function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime.jsx(Layout, {
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...pageProps
                })
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 2872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A7: () => (/* binding */ playPause),
/* harmony export */   HO: () => (/* binding */ sethomepageData),
/* harmony export */   Ik: () => (/* binding */ setTopCharts),
/* harmony export */   RP: () => (/* binding */ prevSong),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   _k: () => (/* binding */ setopenPlayer),
/* harmony export */   c_: () => (/* binding */ setActiveSong),
/* harmony export */   yI: () => (/* binding */ nextSong)
/* harmony export */ });
/* unused harmony export selectGenreListId */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    openPlayer: false,
    homepageData: null,
    topCharts: [],
    currentSongs: [],
    currentIndex: 0,
    isActive: false,
    isPlaying: false,
    activeSong: {},
    genreListId: ""
};
const playerSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "player",
    initialState,
    reducers: {
        setopenPlayer: (state, action)=>{
            state.openPlayer = action.payload;
        },
        sethomepageData: (state, action)=>{
            state.homepageData = action.payload;
        },
        setTopCharts: (state, action)=>{
            state.topCharts = action.payload;
        },
        setActiveSong: (state, action)=>{
            state.activeSong = action.payload.song;
            if (action.payload?.data?.tracks?.hits) {
                state.currentSongs = action.payload.data.tracks.hits;
            } else if (action.payload?.data?.properties) {
                state.currentSongs = action.payload?.data?.tracks;
            } else {
                state.currentSongs = action.payload.data;
            }
            state.currentIndex = action.payload.i;
            state.isActive = true;
        },
        nextSong: (state, action)=>{
            const index = action.payload;
            if (typeof index === "number" && index >= 0 && index < state?.currentSongs?.length) {
                if (state?.currentSongs[index]?.track) {
                    state.activeSong = state?.currentSongs[index]?.track;
                } else {
                    state.activeSong = state?.currentSongs[index];
                }
                state.currentIndex = index;
                state.isActive = true;
            }
        },
        prevSong: (state, action)=>{
            if (state.currentSongs[action.payload]?.track) {
                state.activeSong = state.currentSongs[action.payload]?.track;
            } else {
                state.activeSong = state.currentSongs[action.payload];
            }
            state.currentIndex = action.payload;
            state.isActive = true;
        },
        playPause: (state, action)=>{
            state.isPlaying = action.payload;
        },
        selectGenreListId: (state, action)=>{
            state.genreListId = action.payload;
        }
    }
});
const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId, setTopCharts, sethomepageData, setopenPlayer } = playerSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerSlice.reducer);


/***/ }),

/***/ 6080:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cf: () => (/* binding */ useGetArtistSongsQuery),
/* harmony export */   EQ: () => (/* binding */ useGetAlbumDetailsQuery),
/* harmony export */   E_: () => (/* binding */ useGetSongDetailsQuery),
/* harmony export */   IA: () => (/* binding */ useGetArtistDetailsQuery),
/* harmony export */   J2: () => (/* binding */ useGetPlaylistDetailsQuery),
/* harmony export */   V0: () => (/* binding */ Api),
/* harmony export */   nN: () => (/* binding */ useGetArtistAlbumsQuery)
/* harmony export */ });
/* unused harmony exports useGetHomePageQuery, useGetTopChartsQuery, useGetSongsBySearchQuery, useGetAlbumsBySearchQuery, useGetArtistBySearchQuery, useGetPlaylistsBySearchQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const playlistDetailsBaseUrl = "https://musix-phi.vercel.app/";
const Api = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "Api",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://saavn.me/"
    }),
    endpoints: (builder)=>({
            getHomePage: builder.query({
                query: ()=>"modules?language=hindi,english,punjabi, tamil, telugu, marathi, gujarati, bengali, kannada, bhojpuri, malayalam, urdu, haryanvi, rajasthani, odia, assamese"
            }),
            getTopCharts: builder.query({
                query: ()=>"playlists?id=1108582051"
            }),
            getSongsBySearch: builder.query({
                query: (searchTerm, page)=>`search/songs?query=${searchTerm}&page=${page ? page : 1}&limit=20`
            }),
            getAlbumsBySearch: builder.query({
                query: (searchTerm, page)=>`search/albums?query=${searchTerm}&page=${page ? page : 1}&limit=20`
            }),
            getArtistBySearch: builder.query({
                query: (searchTerm, page)=>`search/artists?query=${searchTerm}&page=${page ? page : 1}&limit=20`
            }),
            getArtistDetails: builder.query({
                query: (artistId)=>`artists/?id=${artistId}`
            }),
            getSongDetails: builder.query({
                query: (songid)=>`${playlistDetailsBaseUrl}songs?id=${songid}`
            }),
            getArtistSongs: builder.query({
                query: (artistid)=>`artists/${artistid}/songs`
            }),
            getArtistAlbums: builder.query({
                query: (artistid)=>`artists/${artistid}/albums?page=1`
            }),
            getAlbumDetails: builder.query({
                query: (albumid)=>`albums/?id=${albumid}`
            }),
            getPlaylistsBySearch: builder.query({
                query: (searchTerm, page)=>`search/playlists?query=${searchTerm}&${page ? page : 1}&limit=20`
            }),
            getPlaylistDetails: builder.query({
                query: (albumid)=>`playlists/?id=${albumid}`
            })
        })
});
const { useGetHomePageQuery, useGetTopChartsQuery, useGetSongsBySearchQuery, useGetAlbumsBySearchQuery, useGetArtistBySearchQuery, useGetArtistDetailsQuery, useGetSongDetailsQuery, useGetArtistSongsQuery, useGetArtistAlbumsQuery, useGetAlbumDetailsQuery, useGetPlaylistsBySearchQuery, useGetPlaylistDetailsQuery } = Api;


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ })

};
;
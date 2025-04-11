(() => {
    // Main object with webpack modules
    var __webpack_modules__ = {
        144: function(module) {
            !function(e, t) {
                true ? module.exports = t() : 0; // If CommonJS is supported, export the module
            }(0, (function() {
                "use strict";
                // Check if window object is available (client-side)
                const e = "undefined" != typeof window, 
                // Check if it's not a browser (e.g., bot, script, etc.)
                t = e && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), 
                // Check for high-resolution screens (e.g., Retina displays)
                a = e && window.devicePixelRatio > 1, 
                // Default configuration for lazy load module
                n = {
                    elements_selector: ".lazy", // Selector for elements that should be lazily loaded
                    container: t || e ? document : null, // Container to search for elements
                    threshold: 300, // Threshold (in pixels) for starting the load
                    thresholds: null, // Custom threshold
                    data_src: "src", // Attribute for storing image URL
                    data_srcset: "srcset", // Attribute for srcset
                    data_sizes: "sizes", // Attribute for image sizes
                    data_bg: "bg", // Attribute for background images
                    data_bg_hidpi: "bg-hidpi", // Attribute for background images for hidpi screens
                    data_bg_multi: "bg-multi", // Attribute for multiple backgrounds
                    data_bg_multi_hidpi: "bg-multi-hidpi", // For multiple backgrounds on hidpi screens
                    data_bg_set: "bg-set", // Attribute for background set
                    data_poster: "poster", // Attribute for video posters
                    class_applied: "applied", // Class for applied elements
                    class_loading: "loading", // Class for loading state
                    class_loaded: "loaded", // Class for loaded state
                    class_error: "error", // Class for error state
                    class_entered: "entered", // Class when element enters view
                    class_exited: "exited", // Class when element exits view
                    unobserve_completed: !0, // Remove observer after completion
                    unobserve_entered: !1, // Do not remove observer after entering view
                    cancel_on_exit: !0, // Cancel load when element exits view
                    callback_enter: null, // Callback when element enters view
                    callback_exit: null, // Callback when element exits view
                    callback_applied: null, // Callback when classes are applied
                    callback_loading: null, // Callback when loading starts
                    callback_loaded: null, // Callback when loading is completed
                    callback_error: null, // Callback on load error
                    callback_finish: null, // Callback after all operations
                    callback_cancel: null, // Callback on load cancel
                    use_native: !1, // Use native loading
                    restore_on_error: !1 // Restore element on error
                }, 
                // Merge default config with user config
                s = e => Object.assign({}, n, e), 
                // Function to initialize lazy loading
                l = function(e, t) {
                    let a;
                    const n = "LazyLoad::Initialized", s = new e(t);
                    try {
                        a = new CustomEvent(n, {
                            detail: {
                                instance: s
                            }
                        });
                    } catch (e) {
                        a = document.createEvent("CustomEvent"), a.initCustomEvent(n, !1, !1, {
                            instance: s
                        });
                    }
                    window.dispatchEvent(a); // Dispatch event that initialization is complete
                }, 
                // Define various attributes for lazy loading
                o = "src", r = "srcset", i = "sizes", d = "poster", c = "llOriginalAttrs", _ = "data", u = "loading", g = "loaded", b = "applied", h = "error", m = "native", p = "data-", f = "ll-status", 
                // Get attribute with "data-" prefix
                v = (e, t) => e.getAttribute(p + t), 
                // Check the load status of an element
                E = e => v(e, f),
                // Set or remove status for an element 
                I = (e, t) => ((e, t, a) => {
                    const n = p + t;
                    null !== a ? e.setAttribute(n, a) : e.removeAttribute(n);
                })(e, f, t), 
                // Remove status
                y = e => I(e, null), 
                // Check if element has already been loaded
                k = e => null === E(e), 
                // Check if element is using native loading
                A = e => E(e) === m, 
                // Array of classes for different element states
                L = [ u, g, b, h ], 
                // Helper function to invoke callbacks
                w = (e, t, a, n) => {
                    e && "function" == typeof e && (void 0 === n ? void 0 === a ? e(t) : e(t, a) : e(t, a, n));
                }, 
                // Add class to an element
                x = (t, a) => {
                    e && "" !== a && t.classList.add(a);
                }, 
                // Remove class from an element
                C = (t, a) => {
                    e && "" !== a && t.classList.remove(a);
                }, 
                // Create a temporary image for an element
                O = e => e.llTempImage, 
                // Remove observer for an element
                M = (e, t) => {
                    if (!t) return;
                    const a = t._observer;
                    a && a.unobserve(e);
                }, z = (e, t) => {
                    e && (e.loadingCount += t);
                }, 
                // Update the counter of elements to load
                N = (e, t) => {
                    e && (e.toLoadCount = t);
                }, 
                // Process sources inside <picture> element
                T = e => {
                    let t = [];
                    for (let a, n = 0; a = e.children[n]; n += 1) "SOURCE" === a.tagName && t.push(a);
                    return t;
                }, R = (e, t) => {
                    const a = e.parentNode;
                    a && "PICTURE" === a.tagName && T(a).forEach(t);
                }, G = (e, t) => {
                    T(e).forEach(t);
                }, D = [ o ], H = [ o, d ], V = [ o, r, i ], F = [ _ ], j = e => !!e[c], B = e => e[c], J = e => delete e[c], S = (e, t) => {
                    if (j(e)) return;
                    const a = {};
                    t.forEach((t => {
                        a[t] = e.getAttribute(t);
                    })), e[c] = a;
                }, P = (e, t) => {
                    if (!j(e)) return;
                    const a = B(e);
                    t.forEach((t => {
                        ((e, t, a) => {
                            a ? e.setAttribute(t, a) : e.removeAttribute(t);
                        })(e, t, a[t]);
                    }));
                }, U = (e, t, a) => {
                    x(e, t.class_applied), I(e, b), a && (t.unobserve_completed && M(e, t), w(t.callback_applied, e, a));
                }, $ = (e, t, a) => {
                    x(e, t.class_loading), I(e, u), a && (z(a, 1), w(t.callback_loading, e, a));
                }, q = (e, t, a) => {
                    a && e.setAttribute(t, a);
                }, K = (e, t) => {
                    q(e, i, v(e, t.data_sizes)), q(e, r, v(e, t.data_srcset)), q(e, o, v(e, t.data_src));
                }, Q = {
                    IMG: (e, t) => {
                        R(e, (e => {
                            S(e, V), K(e, t);
                        })), S(e, V), K(e, t);
                    },
                    IFRAME: (e, t) => {
                        S(e, D), q(e, o, v(e, t.data_src));
                    },
                    VIDEO: (e, t) => {
                        G(e, (e => {
                            S(e, D), q(e, o, v(e, t.data_src));
                        })), S(e, H), q(e, d, v(e, t.data_poster)), q(e, o, v(e, t.data_src)), e.load();
                    },
                    OBJECT: (e, t) => {
                        S(e, F), q(e, _, v(e, t.data_src));
                    }
                }, W = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], X = (e, t) => {
                    !t || (e => e.loadingCount > 0)(t) || (e => e.toLoadCount > 0)(t) || w(e.callback_finish, t);
                }, Y = (e, t, a) => {
                    e.addEventListener(t, a), e.llEvLisnrs[t] = a;
                }, Z = (e, t, a) => {
                    e.removeEventListener(t, a);
                }, ee = e => !!e.llEvLisnrs, te = e => {
                    if (!ee(e)) return;
                    const t = e.llEvLisnrs;
                    for (let a in t) {
                        const n = t[a];
                        Z(e, a, n);
                    }
                    delete e.llEvLisnrs;
                }, ae = (e, t, a) => {
                    (e => {
                        delete e.llTempImage;
                    })(e), z(a, -1), (e => {
                        e && (e.toLoadCount -= 1);
                    })(a), C(e, t.class_loading), t.unobserve_completed && M(e, a);
                }, ne = (e, t, a) => {
                    const n = O(e) || e;
                    ee(n) || ((e, t, a) => {
                        ee(e) || (e.llEvLisnrs = {});
                        const n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                        Y(e, n, t), Y(e, "error", a);
                    })(n, (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_loaded), I(t, g), w(a.callback_loaded, t, n), s || X(a, n);
                        })(0, e, t, a), te(n);
                    }), (s => {
                        ((e, t, a, n) => {
                            const s = A(t);
                            ae(t, a, n), x(t, a.class_error), I(t, h), w(a.callback_error, t, n), a.restore_on_error && P(t, V), 
                            s || X(a, n);
                        })(0, e, t, a), te(n);
                    }));
                }, se = (e, t, n) => {
                    (e => W.indexOf(e.tagName) > -1)(e) ? ((e, t, a) => {
                        ne(e, t, a), ((e, t, a) => {
                            const n = Q[e.tagName];
                            n && (n(e, t), $(e, t, a));
                        })(e, t, a);
                    })(e, t, n) : ((e, t, n) => {
                        (e => {
                            e.llTempImage = document.createElement("IMG");
                        })(e), ne(e, t, n), (e => {
                            j(e) || (e[c] = {
                                backgroundImage: e.style.backgroundImage
                            });
                        })(e), ((e, t, n) => {
                            const s = v(e, t.data_bg), l = v(e, t.data_bg_hidpi), r = a && l ? l : s;
                            r && (e.style.backgroundImage = `url("${r}")`, O(e).setAttribute(o, r), $(e, t, n));
                        })(e, t, n), ((e, t, n) => {
                            const s = v(e, t.data_bg_multi), l = v(e, t.data_bg_multi_hidpi), o = a && l ? l : s;
                            o && (e.style.backgroundImage = o, U(e, t, n));
                        })(e, t, n), ((e, t, a) => {
                            const n = v(e, t.data_bg_set);
                            if (!n) return;
                            let s = n.split("|").map((e => `image-set(${e})`));
                            e.style.backgroundImage = s.join(), U(e, t, a);
                        })(e, t, n);
                    })(e, t, n);
                }, le = e => {
                    e.removeAttribute(o), e.removeAttribute(r), e.removeAttribute(i);
                }, oe = e => {
                    R(e, (e => {
                        P(e, V);
                    })), P(e, V);
                }, re = {
                    IMG: oe,
                    IFRAME: e => {
                        P(e, D);
                    },
                    VIDEO: e => {
                        G(e, (e => {
                            P(e, D);
                        })), P(e, H), e.load();
                    },
                    OBJECT: e => {
                        P(e, F);
                    }
                }, ie = (e, t) => {
                    (e => {
                        const t = re[e.tagName];
                        t ? t(e) : (e => {
                            if (!j(e)) return;
                            const t = B(e);
                            e.style.backgroundImage = t.backgroundImage;
                        })(e);
                    })(e), ((e, t) => {
                        k(e) || A(e) || (C(e, t.class_entered), C(e, t.class_exited), C(e, t.class_applied), 
                        C(e, t.class_loading), C(e, t.class_loaded), C(e, t.class_error));
                    })(e, t), y(e), J(e);
                }, de = [ "IMG", "IFRAME", "VIDEO" ], ce = e => e.use_native && "loading" in HTMLImageElement.prototype, _e = (e, t, a) => {
                    e.forEach((e => (e => e.isIntersecting || e.intersectionRatio > 0)(e) ? ((e, t, a, n) => {
                        const s = (e => L.indexOf(E(e)) >= 0)(e);
                        I(e, "entered"), x(e, a.class_entered), C(e, a.class_exited), ((e, t, a) => {
                            t.unobserve_entered && M(e, a);
                        })(e, a, n), w(a.callback_enter, e, t, n), s || se(e, a, n);
                    })(e.target, e, t, a) : ((e, t, a, n) => {
                        k(e) || (x(e, a.class_exited), ((e, t, a, n) => {
                            a.cancel_on_exit && (e => E(e) === u)(e) && "IMG" === e.tagName && (te(e), (e => {
                                R(e, (e => {
                                    le(e);
                                })), le(e);
                            })(e), oe(e), C(e, a.class_loading), z(n, -1), y(e), w(a.callback_cancel, e, t, n));
                        })(e, t, a, n), w(a.callback_exit, e, t, n));
                    })(e.target, e, t, a)));
                }, ue = e => Array.prototype.slice.call(e), ge = e => e.container.querySelectorAll(e.elements_selector), be = e => (e => E(e) === h)(e), he = (e, t) => (e => ue(e).filter(k))(e || ge(t)), me = function(t, a) {
                    const n = s(t);
                    this._settings = n, this.loadingCount = 0, ((e, t) => {
                        ce(e) || (t._observer = new IntersectionObserver((a => {
                            _e(a, e, t);
                        }), (e => ({
                            root: e.container === document ? null : e.container,
                            rootMargin: e.thresholds || e.threshold + "px"
                        }))(e)));
                    })(n, this), ((t, a) => {
                        e && (a._onlineHandler = () => {
                            ((e, t) => {
                                var a;
                                (a = ge(e), ue(a).filter(be)).forEach((t => {
                                    C(t, e.class_error), y(t);
                                })), t.update();
                            })(t, a);
                        }, window.addEventListener("online", a._onlineHandler));
                    })(n, this), this.update(a);
                };
                // Main lazy load method
                return me.prototype = {
                    // Method to update the loading state for all elements
                    update: function(e) {
                        const a = this._settings, n = he(e, a);
                        var s, l;
                        N(this, n.length), t ? this.loadAll(n) : ce(a) ? ((e, t, a) => {
                            e.forEach((e => {
                                -1 !== de.indexOf(e.tagName) && ((e, t, a) => {
                                    e.setAttribute("loading", "lazy"), ne(e, t, a), ((e, t) => {
                                        const a = Q[e.tagName];
                                        a && a(e, t);
                                    })(e, t), I(e, m);
                                })(e, t, a);
                            })), N(a, 0);
                        })(n, a, this) : (l = n, (e => {
                            e.disconnect();
                        })(s = this._observer), ((e, t) => {
                            t.forEach((t => {
                                e.observe(t);
                            }));
                        })(s, l));
                    },
                    // Method to destroy lazy load
                    destroy: function() {
                        this._observer && this._observer.disconnect(), e && window.removeEventListener("online", this._onlineHandler), 
                        ge(this._settings).forEach((e => {
                            J(e);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    // Method to load all elements
                    loadAll: function(e) {
                        const t = this._settings;
                        he(e, t).forEach((e => {
                            M(e, this), se(e, t, this);
                        }));
                    },
                    // Method to restore all elements
                    restoreAll: function() {
                        const e = this._settings;
                        ge(e).forEach((t => {
                            ie(t, e);
                        }));
                    }
                }, 
                // Export method for global access
                me.load = (e, t) => {
                    const a = s(t);
                    se(e, a);
                }, me.resetStatus = e => {
                    y(e);
                }, 
                // Initialize with lazyLoadOptions parameters
                e && ((e, t) => {
                    if (t) if (t.length) for (let a, n = 0; a = t[n]; n += 1) l(e, a); else l(e, t);
                })(me, window.lazyLoadOptions), me;
            }));
        }
    };
   // Cache for modules to avoid re-importing them
var __webpack_module_cache__ = {};

// Function to handle module import
function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    
    // If module is already cached, return the cached version
    if (cachedModule !== void 0) return cachedModule.exports;
    
    // If not cached, create a new module and cache it
    var module = __webpack_module_cache__[moduleId] = {
        exports: {}
    };
    
    // Call the module's function and pass exports, module, and the require function
    __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    
    return module.exports;
}

(() => {
    "use strict";
    
    // Object to store modules for the website
    const flsModules = {};

    // Function to get the current hash from the URL
    function getHash() {
        if (location.hash) return location.hash.replace("#", "");
    }

    // Function to set the hash in the URL
    function setHash(hash) {
        hash = hash ? `#${hash}` : window.location.href.split("#")[0];
        history.pushState("", "", hash); // Update the URL without refreshing the page
    }

    // Slide up function (hides elements)
    let _slideUp = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`; // Set current height
            target.offsetHeight;
            target.style.overflow = "hidden"; // Hide the overflow
            target.style.height = showmore ? `${showmore}px` : `0px`; // Set the target height to zero or showmore
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout((() => {
                target.hidden = !showmore ? true : false; // Hide the target if showmore is not set
                if (!showmore) target.style.removeProperty("height"); // Remove height property
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                if (!showmore) target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide"); // Remove the _slide class
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };

    // Slide down function (shows elements)
    let _slideDown = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null; // Show the target if hidden
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px"; // Set height to the original size
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout((() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };

    // Toggle between slide up and slide down based on visibility
    let _slideToggle = (target, duration = 500) => {
        if (target.hidden) return _slideDown(target, duration); 
        else return _slideUp(target, duration);
    };

    // Manage body locking (for preventing scrolling when a menu is open)
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); 
        else bodyLock(delay);
    };

    // Unlock the body scroll
    let bodyUnlock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
                lockPaddingElements.forEach((lockPaddingElement) => {
                    lockPaddingElement.style.paddingRight = "";
                });
                document.body.style.paddingRight = "";
                document.documentElement.classList.remove("lock");
            }, delay);
            bodyLockStatus = false;
            setTimeout(() => {
                bodyLockStatus = true;
            }, delay);
        }
    };

    // Lock the body scroll
    let bodyLock = (delay = 500) => {
        if (bodyLockStatus) {
            const lockPaddingElements = document.querySelectorAll("[data-lp]");
            const lockPaddingValue = window.innerWidth - document.body.offsetWidth + "px";
            lockPaddingElements.forEach((lockPaddingElement) => {
                lockPaddingElement.style.paddingRight = lockPaddingValue;
            });
            document.body.style.paddingRight = lockPaddingValue;
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout(() => {
                bodyLockStatus = true;
            }, delay);
        }
    };

    // Function to manage collapsible elements (spollers)
    function spollers() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            document.addEventListener("click", setSpollerAction);
            // Additional functions for managing spollers...
        }
    }

    // Function to manage tabs on the page
    function tabs() {
        const tabs = document.querySelectorAll("[data-tabs]");
        let tabsActiveHash = [];
        // Initialize and manage tabs
        if (tabs.length > 0) {
            const hash = getHash();
            if (hash && hash.startsWith("tab-")) tabsActiveHash = hash.replace("tab-", "").split("-");
            tabs.forEach((tabsBlock, index) => {
                tabsBlock.classList.add("_tab-init");
                tabsBlock.setAttribute("data-tabs-index", index);
                tabsBlock.addEventListener("click", setTabsAction);
                initTabs(tabsBlock);
            });
        }
    }

    // Initialize the menu toggle action
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (e) => {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        });
    }

    // Close the menu by unlocking the body
    function menuClose() {
        bodyUnlock();
        document.documentElement.classList.remove("menu-open");
    }
   function showMore() {
    // Event listener for when the window loads
    window.addEventListener("load", (function(e) {
        // Select all elements with the data-showmore attribute
        const showMoreBlocks = document.querySelectorAll("[data-showmore]");
        let showMoreBlocksRegular;
        let mdQueriesArray;
        
        // Check if there are any showMore blocks
        if (showMoreBlocks.length) {
            // Filter out blocks that have media queries associated with them
            showMoreBlocksRegular = Array.from(showMoreBlocks).filter((function(item, index, self) {
                return !item.dataset.showmoreMedia;
            }));
            
            // Initialize the regular blocks (those without media queries)
            showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;

            // Add event listeners for clicks and window resizing
            document.addEventListener("click", showMoreActions);
            window.addEventListener("resize", showMoreActions);
            
            // Handle blocks with media queries
            mdQueriesArray = dataMediaQueries(showMoreBlocks, "showmoreMedia");
            if (mdQueriesArray && mdQueriesArray.length) {
                // For each media query, add an event listener to re-initialize when the media query changes
                mdQueriesArray.forEach((mdQueriesItem => {
                    mdQueriesItem.matchMedia.addEventListener("change", (function() {
                        initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                    }));
                }));
                // Initialize items for media queries
                initItemsMedia(mdQueriesArray);
            }
        }

        // Initialize items for media queries
        function initItemsMedia(mdQueriesArray) {
            mdQueriesArray.forEach((mdQueriesItem => {
                initItems(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
        }

        // Initialize all items within the showMore blocks
        function initItems(showMoreBlocks, matchMedia) {
            showMoreBlocks.forEach((showMoreBlock => {
                initItem(showMoreBlock, matchMedia);
            }));
        }

        // Initialize an individual item (showMore block)
        function initItem(showMoreBlock, matchMedia = false) {
            // If matchMedia is provided, use the specific item from the matchMedia object
            showMoreBlock = matchMedia ? showMoreBlock.item : showMoreBlock;

            // Get the content and button for the showMore block
            let showMoreContent = showMoreBlock.querySelectorAll("[data-showmore-content]");
            let showMoreButton = showMoreBlock.querySelectorAll("[data-showmore-button]");
            
            // Filter the content and button to ensure they are from the current showMore block
            showMoreContent = Array.from(showMoreContent).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
            showMoreButton = Array.from(showMoreButton).filter((item => item.closest("[data-showmore]") === showMoreBlock))[0];
            
            // Calculate the hidden height (how much content is hidden)
            const hiddenHeight = calculateHiddenHeight(showMoreBlocks);
            
            // Check if the content should be shown or hidden based on media queries or default behavior
            if (matchMedia.matches || !matchMedia) {
                // If the hidden height is less than the original content height, show the button
                if (hiddenHeight < getOriginalHeight(showMoreContent)) {
                    _slideUp(showMoreContent, 0, showMoreBlock.classList.contains("_showmore-active") ? getOriginalHeight(showMoreContent) : hiddenHeight);
                    showMoreButton.hidden = false;
                } else {
                    // Otherwise, hide the content and button
                    _slideDown(showMoreContent, 0, hiddenHeight);
                    showMoreButton.hidden = true;
                }
            } else {
                _slideDown(showMoreContent, 0, hiddenHeight);
                showMoreButton.hidden = true;
            }
        }

        // Calculate the maximum height of hidden content across multiple blocks
        function calculateHiddenHeight(showMoreBlocks) {
            let maxHiddenHeight = 0;
            showMoreBlocks.forEach((showMoreBlock => {
                let showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                if (hiddenHeight > maxHiddenHeight) maxHiddenHeight = hiddenHeight;
            }));
            return maxHiddenHeight;
        }

        // Calculate the height of the hidden content in a showMore block
        function getHeight(showMoreBlock, showMoreContent) {
            let hiddenHeight = 0;
            const showMoreType = showMoreBlock.dataset.showmore ? showMoreBlock.dataset.showmore : "size";
            const rowGap = parseFloat(getComputedStyle(showMoreContent).rowGap) ? parseFloat(getComputedStyle(showMoreContent).rowGap) : 0;

            // Calculate height based on the type of showMore (items or size)
            if (showMoreType === "items") {
                const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 3;
                const showMoreItems = showMoreContent.children;
                for (let index = 1; index < showMoreItems.length; index++) {
                    const showMoreItem = showMoreItems[index - 1];
                    const marginTop = parseFloat(getComputedStyle(showMoreItem).marginTop) ? parseFloat(getComputedStyle(showMoreItem).marginTop) : 0;
                    const marginBottom = parseFloat(getComputedStyle(showMoreItem).marginBottom) ? parseFloat(getComputedStyle(showMoreItem).marginBottom) : 0;
                    hiddenHeight += showMoreItem.offsetHeight + marginTop;
                    if (index == showMoreTypeValue) break;
                    hiddenHeight += marginBottom;
                }
                // Add rowGap if necessary
                rowGap ? hiddenHeight += (showMoreTypeValue - 1) * rowGap : null;
            } else {
                const showMoreTypeValue = showMoreContent.dataset.showmoreContent ? showMoreContent.dataset.showmoreContent : 150;
                hiddenHeight = showMoreTypeValue;
            }
            return hiddenHeight;
        }

        // Get the original height of the content, before it is hidden
        function getOriginalHeight(showMoreContent) {
            let parentHidden;
            let hiddenHeight = showMoreContent.offsetHeight;
            showMoreContent.style.removeProperty("height");

            // If the content is inside a hidden parent, temporarily show it
            if (showMoreContent.closest(`[hidden]`)) {
                parentHidden = showMoreContent.closest(`[hidden]`);
                parentHidden.hidden = false;
            }
            let originalHeight = showMoreContent.offsetHeight;
            parentHidden ? parentHidden.hidden = true : null;
            showMoreContent.style.height = `${hiddenHeight}px`;
            return originalHeight;
        }

        // Event handler for "show more" button clicks and window resize events
        function showMoreActions(e) {
            const targetEvent = e.target;
            const targetType = e.type;
            
            // Handle click events on the "show more" button
            if (targetType === "click") {
                if (targetEvent.closest("[data-showmore-button]")) {
                    const showMoreButton = targetEvent.closest("[data-showmore-button]");
                    const showMoreBlock = showMoreButton.closest("[data-showmore]");
                    const showMoreContent = showMoreBlock.querySelector("[data-showmore-content]");
                    const showMoreSpeed = showMoreBlock.dataset.showmoreButton ? showMoreBlock.dataset.showmoreButton : "500";
                    const hiddenHeight = getHeight(showMoreBlock, showMoreContent);
                    
                    // Toggle the visibility of the content
                    if (!showMoreContent.classList.contains("_slide")) {
                        showMoreBlock.classList.contains("_showmore-active") ? _slideUp(showMoreContent, showMoreSpeed, hiddenHeight) : _slideDown(showMoreContent, showMoreSpeed, hiddenHeight);
                        showMoreBlock.classList.toggle("_showmore-active");
                    }
                }
            } else if (targetType === "resize") {
                // Re-initialize showMore blocks when the window is resized
                showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
                mdQueriesArray && mdQueriesArray.length ? initItemsMedia(mdQueriesArray) : null;
            }
        }
    }));
}

// Utility functions for debugging and data manipulation
function FLS(message) {
    setTimeout(() => {
        if (window.FLS) console.log(message);
    }, 0);
}

function getDigFormat(item, sepp = " ") {
    return item.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1${sepp}`);
}

function uniqArray(array) {
    return array.filter((item, index, self) => self.indexOf(item) === index);
}

// Function for handling media queries related to "show more" blocks
function dataMediaQueries(array, dataSetValue) {
    const media = Array.from(array).filter(item => {
        if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
    });

    if (media.length) {
        const breakpointsArray = [];
        media.forEach(item => {
            const params = item.dataset[dataSetValue];
            const breakpoint = {};
            const paramsArray = params.split(",");
            breakpoint.value = paramsArray[0];
            breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
            breakpoint.item = item;
            breakpointsArray.push(breakpoint);
        });

        // Generate unique media queries based on the breakpoints
        let mdQueries = breakpointsArray.map(item => `(${item.type}-width: ${item.value}px),${item.value},${item.type}`);
        mdQueries = uniqArray(mdQueries);

        const mdQueriesArray = [];
        if (mdQueries.length) {
            mdQueries.forEach(breakpoint => {
                const paramsArray = breakpoint.split(",");
                const mediaBreakpoint = paramsArray[1];
                const mediaType = paramsArray[2];
                const matchMedia = window.matchMedia(paramsArray[0]);
                const itemsArray = breakpointsArray.filter(item => item.value === mediaBreakpoint && item.type === mediaType);
                mdQueriesArray.push({
                    itemsArray,
                    matchMedia
                });
            });
            return mdQueriesArray;
        }
    }
}
// methods for opening, closing, and handling events related to popups
      class Popup {
    constructor(options) {
        // Default configuration settings for the popup
        let config = {
            logging: true, // Enable logging
            init: true, // Initialize popup immediately
            attributeOpenButton: "data-popup", // Custom attribute for open button
            attributeCloseButton: "data-close", // Custom attribute for close button
            fixElementSelector: "[data-lp]", // Element selector to lock scroll on
            youtubeAttribute: "data-popup-youtube", // Attribute for YouTube video link
            youtubePlaceAttribute: "data-popup-youtube-place", // Attribute to place the YouTube video
            setAutoplayYoutube: true, // Set YouTube video autoplay
            classes: {
                popup: "popup", // Class for the popup container
                popupContent: "popup__content", // Class for the popup content
                popupActive: "popup_show", // Class when the popup is active
                bodyActive: "popup-show" // Class for body when popup is active
            },
            focusCatch: true, // Enable focus trapping inside the popup
            closeEsc: true, // Enable closing popup with Esc key
            bodyLock: true, // Lock body scroll when popup is open
            hashSettings: {
                location: true, // Use URL hash for popup control
                goHash: true // Open popup based on hash in URL
            },
            on: {
                beforeOpen: function() {}, // Callback before opening
                afterOpen: function() {}, // Callback after opening
                beforeClose: function() {}, // Callback before closing
                afterClose: function() {} // Callback after closing
            }
        };

        // Initialize popup properties
        this.youTubeCode;
        this.isOpen = false; // Popup open state
        this.targetOpen = { selector: false, element: false }; // Target popup to open
        this.previousOpen = { selector: false, element: false }; // Last opened popup
        this.lastClosed = { selector: false, element: false }; // Last closed popup
        this._dataValue = false; // Popup data value
        this.hash = false; // Popup hash in URL
        this._reopen = false; // Flag for reopening popup
        this._selectorOpen = false; // Flag for selector-based popup opening
        this.lastFocusEl = false; // Last focused element before opening popup
        this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ]; // Focusable elements
        this.options = { ...config, ...options, classes: { ...config.classes, ...options?.classes }, hashSettings: { ...config.hashSettings, ...options?.hashSettings }, on: { ...config.on, ...options?.on } }; // Merge options
        this.bodyLock = false;
        this.options.init ? this.initPopups() : null; // Initialize popup on page load
    }

    // Initialize the popups and log the event
    initPopups() {
        this.popupLogging(`Popup initialized`);
        this.eventsPopup(); // Set up event listeners
    }

    // Set up event listeners for opening and closing popups
    eventsPopup() {
        document.addEventListener("click", function(e) {
            // Handle opening popup
            const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (buttonOpen) {
                e.preventDefault();
                this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                if (this._dataValue !== "error") {
                    if (!this.isOpen) this.lastFocusEl = buttonOpen;
                    this.targetOpen.selector = `${this._dataValue}`;
                    this._selectorOpen = true;
                    this.open();
                    return;
                } else this.popupLogging(`Error: attribute not filled in ${buttonOpen.classList}`);
                return;
            }

            // Handle closing popup
            const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
            if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                e.preventDefault();
                this.close();
                return;
            }
        }.bind(this));

        // Handle keyboard interactions
        document.addEventListener("keydown", function(e) {
            // Close popup on ESC key press
            if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                e.preventDefault();
                this.close();
                return;
            }
            // Focus trap on TAB key press
            if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                this._focusCatch(e);
                return;
            }
        }.bind(this));

        // Handle hash-based popup opening
        if (this.options.hashSettings.goHash) {
            window.addEventListener("hashchange", function() {
                if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
            }.bind(this));
            window.addEventListener("load", function() {
                if (window.location.hash) this._openToHash();
            }.bind(this));
        }
    }

    // Open the popup based on the selector or data attribute
    open(selectorValue) {
        if (bodyLockStatus) {
            this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
            if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                this.targetOpen.selector = selectorValue;
                this._selectorOpen = true;
            }
            if (this.isOpen) {
                this._reopen = true;
                this.close();
            }
            if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
            if (!this._reopen) this.previousActiveElement = document.activeElement;
            this.targetOpen.element = document.querySelector(this.targetOpen.selector);
            if (this.targetOpen.element) {
                // Embed YouTube video if specified
                if (this.youTubeCode) {
                    const codeVideo = this.youTubeCode;
                    const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                    const iframe = document.createElement("iframe");
                    iframe.setAttribute("allowfullscreen", "");
                    const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                    iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                    iframe.setAttribute("src", urlVideo);
                    if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                        this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                    }
                    this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                }

                // Handle URL hash settings
                if (this.options.hashSettings.location) {
                    this._getHash();
                    this._setHash();
                }

                // Trigger before open callback
                this.options.on.beforeOpen(this);
                document.dispatchEvent(new CustomEvent("beforePopupOpen", { detail: { popup: this } }));

                // Open popup and update state
                this.targetOpen.element.classList.add(this.options.classes.popupActive);
                document.documentElement.classList.add(this.options.classes.bodyActive);
                if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                this.targetOpen.element.setAttribute("aria-hidden", "false");
                this.previousOpen.selector = this.targetOpen.selector;
                this.previousOpen.element = this.targetOpen.element;
                this._selectorOpen = false;
                this.isOpen = true;
                setTimeout((() => { this._focusTrap(); }), 50);

                // Trigger after open callback
                this.options.on.afterOpen(this);
                document.dispatchEvent(new CustomEvent("afterPopupOpen", { detail: { popup: this } }));

                this.popupLogging(`Popup opened`);
            } else this.popupLogging(`Error: popup not found. Please check the input.`);
        }
    }

    // Close the popup
    close(selectorValue) {
        if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
        if (!this.isOpen || !bodyLockStatus) return;
        
        // Trigger before close callback
        this.options.on.beforeClose(this);
        document.dispatchEvent(new CustomEvent("beforePopupClose", { detail: { popup: this } }));

        // Remove embedded YouTube video
        if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";

        // Close popup and reset state
        this.previousOpen.element.classList.remove(this.options.classes.popupActive);
        this.previousOpen.element.setAttribute("aria-hidden", "true");
        if (!this._reopen) {
            document.documentElement.classList.remove(this.options.classes.bodyActive);
            !this.bodyLock ? bodyUnlock() : null;
            this.isOpen = false;
        }

        this._removeHash();

        // Update last closed popup
        if (this._selectorOpen) {
            this.lastClosed.selector = this.previousOpen.selector;
            this.lastClosed.element = this.previousOpen.element;
        }

        // Trigger after close callback
        this.options.on.afterClose(this);
        document.dispatchEvent(new CustomEvent("afterPopupClose", { detail: { popup: this } }));

        setTimeout((() => { this._focusTrap(); }), 50);
        this.popupLogging(`Popup closed`);
    }

    // Handle hash-related functionality
    _getHash() {
        if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
    }

    // Open popup based on hash in URL
    _openToHash() {
        let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
        const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
        if (buttons && classInHash) this.open(classInHash);
    }

    // Set the hash in the URL
    _setHash() {
        history.pushState("", "", this.hash);
    }

    // Remove the hash from the URL
    _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
    }

    // Handle focus trapping inside the popup
    _focusCatch(e) {
        const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
        const focusArray = Array.prototype.slice.call(focusable);
        const focusedIndex = focusArray.indexOf(document.activeElement);
        if (e.shiftKey && focusedIndex === 0) {
            focusArray[focusArray.length - 1].focus();
            e.preventDefault();
        }
        if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
            focusArray[0].focus();
            e.preventDefault();
        }
    }

    // Focus the first focusable element or last focused element
    _focusTrap() {
        const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
        if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
    }

    // Log messages if logging is enabled
    popupLogging(message) {
        this.options.logging ? FLS(`[Popup]: ${message}`) : null;
    }
}

flsModules.popup = new Popup({});

// Scroll to a target block with optional settings for speed, header offset, etc.
let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
    const targetBlockElement = document.querySelector(targetBlock);
    if (targetBlockElement) {
        let headerItem = "";
        let headerItemHeight = 0;

        // Handle header offset if necessary
        if (noHeader) {
            headerItem = "header.header";
            const headerElement = document.querySelector(headerItem);
            if (!headerElement.classList.contains("_header-scroll")) {
                headerElement.style.cssText = `transition-duration: 0s;`;
                headerElement.classList.add("_header-scroll");
                headerItemHeight = headerElement.offsetHeight;
                headerElement.classList.remove("_header-scroll");
                setTimeout((() => {
                    headerElement.style.cssText = ``;
                }), 0);
            } else headerItemHeight = headerElement.offsetHeight;
        }

        // Set options for scroll behavior
        let options = {
            speedAsDuration: true,
            speed,
            header: headerItem,
            offset: offsetTop,
            easing: "easeOutQuad"
        };

        // Close menu if it's open
        document.documentElement.classList.contains("menu-open") ? menuClose() : null;

        // Smooth scroll or fallback to normal scroll
        if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
            let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
            targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
            targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
            window.scrollTo({
                top: targetBlockElementPosition,
                behavior: "smooth"
            });
        }

        FLS(`[gotoBlock]: Scrolling to ${targetBlock}`);
    } else FLS(`[gotoBlock]: Error, block not found: ${targetBlock}`);
};

// Initialize form fields with given options (viewPass for password visibility toggle, autoHeight for auto-sizing textareas)
function formFieldsInit(options = {
    viewPass: false,
    autoHeight: false
}) {
    // Event listener for when an input or textarea element receives focus
    document.body.addEventListener("focusin", function(e) {
        const targetElement = e.target;
        if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
            if (!targetElement.hasAttribute("data-no-focus-classes")) {
                targetElement.classList.add("_form-focus"); // Add focus class to the input element
                targetElement.parentElement.classList.add("_form-focus"); // Add focus class to parent element
            }
            formValidate.removeError(targetElement); // Remove any existing validation errors
            targetElement.hasAttribute("data-validate") ? formValidate.removeError(targetElement) : null; // Remove error if validation attribute exists
        }
    });

    // Event listener for when an input or textarea element loses focus
    document.body.addEventListener("focusout", function(e) {
        const targetElement = e.target;
        if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
            if (!targetElement.hasAttribute("data-no-focus-classes")) {
                targetElement.classList.remove("_form-focus"); // Remove focus class from the input element
                targetElement.parentElement.classList.remove("_form-focus"); // Remove focus class from parent element
            }
            targetElement.hasAttribute("data-validate") ? formValidate.validateInput(targetElement) : null; // Validate input on focus out
        }
    });

    // Enable password visibility toggle if 'viewPass' option is true
    if (options.viewPass) {
        document.addEventListener("click", function(e) {
            let targetElement = e.target;
            if (targetElement.closest('[class*="__viewpass"]')) {
                let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                targetElement.parentElement.querySelector("input").setAttribute("type", inputType); // Toggle input type between password and text
                targetElement.classList.toggle("_viewpass-active"); // Toggle visibility state
            }
        });
    }

    // Enable auto-height functionality for textareas if 'autoHeight' option is true
    if (options.autoHeight) {
        const textareas = document.querySelectorAll("textarea[data-autoheight]");
        if (textareas.length) {
            textareas.forEach((textarea) => {
                const startHeight = textarea.hasAttribute("data-autoheight-min") ? Number(textarea.dataset.autoheightMin) : Number(textarea.offsetHeight); // Get starting height
                const maxHeight = textarea.hasAttribute("data-autoheight-max") ? Number(textarea.dataset.autoheightMax) : Infinity; // Get max height
                setHeight(textarea, Math.min(startHeight, maxHeight)); // Set initial height
                textarea.addEventListener("input", () => {
                    if (textarea.scrollHeight > startHeight) {
                        textarea.style.height = `auto`;
                        setHeight(textarea, Math.min(Math.max(textarea.scrollHeight, startHeight), maxHeight)); // Adjust height on input
                    }
                });
            });

            // Helper function to set textarea height
            function setHeight(textarea, height) {
                textarea.style.height = `${height}px`;
            }
        }
    }
}

// Validation helper object for handling form errors
let formValidate = {
    // Get all errors in the form
    getErrors(form) {
        let error = 0;
        let formRequiredItems = form.querySelectorAll("*[data-required]"); // Find all required fields
        if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem) => {
            if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) {
                error += this.validateInput(formRequiredItem); // Validate each required field
            }
        });
        return error; // Return total error count
    },

    // Validate a single input field
    validateInput(formRequiredItem) {
        let error = 0;
        if (formRequiredItem.dataset.required === "email") {
            formRequiredItem.value = formRequiredItem.value.replace(" ", "");
            if (this.emailTest(formRequiredItem)) {
                this.addError(formRequiredItem); // Add error if email is invalid
                error++;
            } else this.removeError(formRequiredItem); // Remove error if valid email
        } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
            this.addError(formRequiredItem); // Add error if checkbox is unchecked
            error++;
        } else if (!formRequiredItem.value.trim()) {
            this.addError(formRequiredItem); // Add error if field is empty
            error++;
        } else this.removeError(formRequiredItem); // Remove error if field has a value
        return error;
    },

    // Add error class and message to the input field
    addError(formRequiredItem) {
        formRequiredItem.classList.add("_form-error"); // Add error class to input element
        formRequiredItem.parentElement.classList.add("_form-error"); // Add error class to parent element
        let inputError = formRequiredItem.parentElement.querySelector(".form__error");
        if (inputError) formRequiredItem.parentElement.removeChild(inputError); // Remove existing error message
        if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`); // Add new error message
    },

    // Remove error class and message from the input field
    removeError(formRequiredItem) {
        formRequiredItem.classList.remove("_form-error"); // Remove error class from input element
        formRequiredItem.parentElement.classList.remove("_form-error"); // Remove error class from parent element
        if (formRequiredItem.parentElement.querySelector(".form__error")) {
            formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error")); // Remove error message
        }
    },

    // Reset form and clean up all validation errors
    formClean(form) {
        form.reset(); // Reset form fields
        setTimeout(() => {
            let inputs = form.querySelectorAll("input,textarea"); // Find all input and textarea elements
            for (let index = 0; index < inputs.length; index++) {
                const el = inputs[index];
                el.parentElement.classList.remove("_form-focus"); // Remove focus class from input elements
                el.classList.remove("_form-focus");
                formValidate.removeError(el); // Remove error from input elements
            }
            let checkboxes = form.querySelectorAll(".checkbox__input");
            if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                const checkbox = checkboxes[index];
                checkbox.checked = false; // Uncheck all checkboxes
            }
            if (flsModules.select) {
                let selects = form.querySelectorAll("div.select");
                if (selects.length) for (let index = 0; index < selects.length; index++) {
                    const select = selects[index].querySelector("select");
                    flsModules.select.selectBuild(select); // Rebuild custom selects
                }
            }
        }, 0);
    },

    // Email validation test
    emailTest(formRequiredItem) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value); // Simple email regex test
    }
};

// Form submit logic to handle form validation and submission
function formSubmit() {
    const forms = document.forms;
    if (forms.length) for (const form of forms) {
        form.addEventListener("submit", function(e) {
            const form = e.target;
            formSubmitAction(form, e); // Handle form submit
        });
        form.addEventListener("reset", function(e) {
            const form = e.target;
            formValidate.formClean(form); // Clean form on reset
        });
    }
    // Action to take on form submission
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Error");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    if (form.querySelector("._form-error") && form.hasAttribute("data-goto-error")) {
                        const formGoToErrorClass = form.dataset.gotoError ? form.dataset.gotoError : "._form-error";
                        gotoBlock(formGoToErrorClass, true, 1e3);
                    }
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форму відправлено!`);
            }
            function formLogging(message) {
                FLS(`[Форми]: ${message}`);
            }
        }
        function ssr_window_esm_isObject(obj) {
            return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
        }
        function extend(target, src) {
            if (target === void 0) target = {};
            if (src === void 0) src = {};
            Object.keys(src).forEach((key => {
                if (typeof target[key] === "undefined") target[key] = src[key]; else if (ssr_window_esm_isObject(src[key]) && ssr_window_esm_isObject(target[key]) && Object.keys(src[key]).length > 0) extend(target[key], src[key]);
            }));
        }
        const ssrDocument = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector() {
                return null;
            },
            querySelectorAll() {
                return [];
            },
            getElementById() {
                return null;
            },
            createEvent() {
                return {
                    initEvent() {}
                };
            },
            createElement() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName() {
                        return [];
                    }
                };
            },
            createElementNS() {
                return {};
            },
            importNode() {
                return null;
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            }
        };
        function ssr_window_esm_getDocument() {
            const doc = typeof document !== "undefined" ? document : {};
            extend(doc, ssrDocument);
            return doc;
        }
        const ssrWindow = {
            document: ssrDocument,
            navigator: {
                userAgent: ""
            },
            location: {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                protocol: "",
                search: ""
            },
            history: {
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function CustomEvent() {
                return this;
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle() {
                return {
                    getPropertyValue() {
                        return "";
                    }
                };
            },
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia() {
                return {};
            },
            requestAnimationFrame(callback) {
                if (typeof setTimeout === "undefined") {
                    callback();
                    return null;
                }
                return setTimeout(callback, 0);
            },
            cancelAnimationFrame(id) {
                if (typeof setTimeout === "undefined") return;
                clearTimeout(id);
            }
        };
        function ssr_window_esm_getWindow() {
            const win = typeof window !== "undefined" ? window : {};
            extend(win, ssrWindow);
            return win;
        }
        function utils_classesToTokens(classes) {
            if (classes === void 0) classes = "";
            return classes.trim().split(" ").filter((c => !!c.trim()));
        }
        function deleteProps(obj) {
            const object = obj;
            Object.keys(object).forEach((key => {
                try {
                    object[key] = null;
                } catch (e) {}
                try {
                    delete object[key];
                } catch (e) {}
            }));
        }
        // Executes a callback function after a specified delay (mimicking microtask or deferred execution).
function utils_nextTick(callback, delay) {
    if (delay === void 0) delay = 0;
    return setTimeout(callback, delay);
}

// Returns the current timestamp in milliseconds.
function utils_now() {
    return Date.now();
}

// Retrieves the computed style of a given element, supporting both modern and legacy browsers.
function utils_getComputedStyle(el) {
    const window = ssr_window_esm_getWindow();
    let style;
    if (window.getComputedStyle) style = window.getComputedStyle(el, null);
    if (!style && el.currentStyle) style = el.currentStyle;
    if (!style) style = el.style;
    return style;
}

// Fetches the translation value (i.e., position shift) of an element on the specified axis (either "x" or "y") using CSS transformations.
function utils_getTranslate(el, axis) {
    if (axis === void 0) axis = "x";
    const window = ssr_window_esm_getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = utils_getComputedStyle(el);
    if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
        if (curTransform.split(",").length > 6) curTransform = curTransform.split(", ").map((a => a.replace(",", "."))).join(", ");
        transformMatrix = new window.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
        matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); else curTransform = parseFloat(matrix[4]);
    if (axis === "y") if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); else curTransform = parseFloat(matrix[5]);
    return curTransform || 0;
}

// Checks if the provided value is a plain JavaScript object, excluding null and non-object types.
function utils_isObject(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
}

// Checks if the provided value is a DOM node, specifically an instance of HTMLElement or a node with nodeType 1 or 11.
function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") return node instanceof HTMLElement;
    return node && (node.nodeType === 1 || node.nodeType === 11);
}

// Performs a deep merge of properties from source objects to a target object, excluding certain properties like __proto__, constructor, and prototype. It also handles nested objects recursively.
function utils_extend() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = [ "__proto__", "constructor", "prototype" ];
    for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? void 0 : arguments[i];
        if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
            const keysArray = Object.keys(Object(nextSource)).filter((key => noExtend.indexOf(key) < 0));
            for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                const nextKey = keysArray[nextIndex];
                const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== void 0 && desc.enumerable) if (utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]); else if (!utils_isObject(to[nextKey]) && utils_isObject(nextSource[nextKey])) {
                    to[nextKey] = {};
                    if (nextSource[nextKey].__swiper__) to[nextKey] = nextSource[nextKey]; else utils_extend(to[nextKey], nextSource[nextKey]);
                } else to[nextKey] = nextSource[nextKey];
            }
        }
    }
    return to;
}

// Sets a custom CSS property on a DOM element (e.g., for CSS variables).
function utils_setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
}

// Animates smooth scrolling of an element from its current position to a target position.
function animateCSSModeScroll(_ref) {
    let {swiper, targetPosition, side} = _ref;
    const window = ssr_window_esm_getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => dir === "next" && current >= target || dir === "prev" && current <= target;
    const animate = () => {
        time = (new Date).getTime();
        if (startTime === null) startTime = time;
        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = .5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
        if (isOutOfBound(currentPosition, targetPosition)) currentPosition = targetPosition;
        swiper.wrapperEl.scrollTo({
            [side]: currentPosition
        });
        if (isOutOfBound(currentPosition, targetPosition)) {
            swiper.wrapperEl.style.overflow = "hidden";
            swiper.wrapperEl.style.scrollSnapType = "";
            setTimeout((() => {
                swiper.wrapperEl.style.overflow = "";
                swiper.wrapperEl.scrollTo({
                    [side]: currentPosition
                });
            }));
            window.cancelAnimationFrame(swiper.cssModeFrameID);
            return;
        }
        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };
    animate();
}

// Retrieves all child elements of a given DOM element that match a specified CSS selector.
function utils_elementChildren(element, selector) {
    if (selector === void 0) selector = "";
    return [ ...element.children ].filter((el => el.matches(selector)));
}

// Logs a warning message to the console.
function showWarning(text) {
    try {
        console.warn(text);
        return;
    } catch (err) {}
}

// Creates a new DOM element with the specified tag and optional class list.
function utils_createElement(tag, classes) {
    if (classes === void 0) classes = [];
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes) ? classes : utils_classesToTokens(classes));
    return el;
}

// Retrieves all previous sibling elements of a given element, optionally filtered by a CSS selector.
function elementPrevAll(el, selector) {
    const prevEls = [];
    while (el.previousElementSibling) {
        const prev = el.previousElementSibling;
        if (selector) {
            if (prev.matches(selector)) prevEls.push(prev);
        } else prevEls.push(prev);
        el = prev;
    }
    return prevEls;
}

// Retrieves all next sibling elements of a given element, optionally filtered by a CSS selector.
function elementNextAll(el, selector) {
    const nextEls = [];
    while (el.nextElementSibling) {
        const next = el.nextElementSibling;
        if (selector) {
            if (next.matches(selector)) nextEls.push(next);
        } else nextEls.push(next);
        el = next;
    }
    return nextEls;
}

// Retrieves the computed value of a specified CSS property for a DOM element.
function elementStyle(el, prop) {
    const window = ssr_window_esm_getWindow();
    return window.getComputedStyle(el, null).getPropertyValue(prop);
}

// Returns the index of a DOM element within its parent element's children.
function utils_elementIndex(el) {
    let child = el;
    let i;
    if (child) {
        i = 0;
        while ((child = child.previousSibling) !== null) if (child.nodeType === 1) i += 1;
        return i;
    }
    return;
}

// Retrieves all parent elements of a given DOM element, optionally filtered by a CSS selector.
function utils_elementParents(el, selector) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
        if (selector) {
            if (parent.matches(selector)) parents.push(parent);
        } else parents.push(parent);
        parent = parent.parentElement;
    }
    return parents;
}

// Returns the outer size (including margins) of a DOM element based on a specified dimension (width or height).
function utils_elementOuterSize(el, size, includeMargins) {
    const window = ssr_window_esm_getWindow();
    if (includeMargins) return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    return el.offsetWidth;
}

// Converts a given element or array of elements into an array of DOM elements, ensuring it is not empty or null.
function utils_makeElementsArray(el) {
    return (Array.isArray(el) ? el : [ el ]).filter((e => !!e));
}

// Detects certain browser and device features like smooth scroll behavior and touch support.
        function calcSupport() {
            const window = ssr_window_esm_getWindow();
            const document = ssr_window_esm_getDocument();
            return {
                smoothScroll: document.documentElement && document.documentElement.style && "scrollBehavior" in document.documentElement.style,
                touch: !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
            };
        }
       // Function to get the support information, calculates it if not already cached
function getSupport() {
    if (!support) support = calcSupport(); // Calculate support if not cached
    return support;
}

let deviceCached;

// Function to calculate device details (OS, device type)
function calcDevice(_temp) {
    let {userAgent} = _temp === void 0 ? {} : _temp; // Default to empty object if _temp is undefined
    const support = getSupport(); // Retrieve the support details
    const window = ssr_window_esm_getWindow(); // Get the window object
    const platform = window.navigator.platform; // Get platform (e.g., Win32, MacIntel)
    const ua = userAgent || window.navigator.userAgent; // Get user agent string
    const device = {
        ios: false,
        android: false
    };
    const screenWidth = window.screen.width; // Screen width
    const screenHeight = window.screen.height; // Screen height
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // Check for Android OS
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/); // Check for iPad OS
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/); // Check for iPod
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/); // Check for iPhone
    const windows = platform === "Win32"; // Check if platform is Windows
    let macos = platform === "MacIntel"; // Check if platform is MacOS
    const iPadScreens = [ "1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810" ]; // iPad screen resolutions

    // Special handling for iPad on MacOS
    if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/); // Check if it's an iPad device
        if (!ipad) ipad = [ 0, 1, "13_0_0" ]; // Default to iOS 13 if no match
        macos = false; // Mark as non-MacOS device
    }

    // Detect Android OS
    if (android && !windows) {
        device.os = "android";
        device.android = true;
    }
    
    // Detect iOS (iPad, iPhone, iPod)
    if (ipad || iphone || ipod) {
        device.os = "ios";
        device.ios = true;
    }
    return device;
}

// Function to get the cached device details or calculate if not available
function getDevice(overrides) {
    if (overrides === void 0) overrides = {}; // Default to empty object if overrides are not passed
    if (!deviceCached) deviceCached = calcDevice(overrides); // Cache device details if not already cached
    return deviceCached;
}

let browser;

// Function to calculate browser-related details like Safari, WebView, 3D fix requirement
function calcBrowser() {
    const window = ssr_window_esm_getWindow(); // Get window object
    const device = getDevice(); // Get device details
    let needPerspectiveFix = false;

    // Check if the browser is Safari
    function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase(); // Get user agent
        return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }

    // If Safari, check the version for perspective fix requirement
    if (isSafari()) {
        const ua = String(window.navigator.userAgent);
        if (ua.includes("Version/")) {
            const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num => Number(num)));
            needPerspectiveFix = major < 16 || major === 16 && minor < 2;
        }
    }

    // Check for WebView in iOS
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;

    return {
        isSafari: needPerspectiveFix || isSafariBrowser, // Determine if it's Safari browser
        needPerspectiveFix, // Whether perspective fix is needed
        need3dFix, // Whether 3D fix is needed
        isWebView // Check if it's a WebView
    };
}

// Function to get the cached browser details or calculate if not available
function getBrowser() {
    if (!browser) browser = calcBrowser(); // Cache browser details if not already cached
    return browser;
}

// Resize handler for updating layout when window is resized
function Resize(_ref) {
    let {swiper, on, emit} = _ref; // Destructure parameters
    const window = ssr_window_esm_getWindow(); // Get window object
    let observer = null;
    let animationFrame = null;

    // Resize event handler
    const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("beforeResize"); // Emit before resize event
        emit("resize"); // Emit resize event
    };

    // Create a ResizeObserver to detect element size changes
    const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver((entries => {
            animationFrame = window.requestAnimationFrame((() => {
                const {width, height} = swiper;
                let newWidth = width;
                let newHeight = height;
                entries.forEach((_ref2 => {
                    let {contentBoxSize, contentRect, target} = _ref2;
                    if (target && target !== swiper.el) return;
                    newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                    newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                }));
                if (newWidth !== width || newHeight !== height) resizeHandler(); // Trigger resize handler if dimensions change
            }));
        }));
        observer.observe(swiper.el); // Observe swiper element
    };

    // Remove the resize observer
    const removeObserver = () => {
        if (animationFrame) window.cancelAnimationFrame(animationFrame); // Cancel animation frame
        if (observer && observer.unobserve && swiper.el) {
            observer.unobserve(swiper.el); // Stop observing the swiper element
            observer = null;
        }
    };

    // Orientation change event handler
    const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit("orientationchange"); // Emit orientation change event
    };

    // Set up event listeners on initialization and destroy them on cleanup
    on("init", (() => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== "undefined") {
            createObserver(); // Use ResizeObserver if available
            return;
        }
        window.addEventListener("resize", resizeHandler); // Fallback to resize event listener
        window.addEventListener("orientationchange", orientationChangeHandler); // Fallback to orientation change listener
    }));
    on("destroy", (() => {
        removeObserver(); // Remove observer when destroyed
        window.removeEventListener("resize", resizeHandler); // Remove resize listener
        window.removeEventListener("orientationchange", orientationChangeHandler); // Remove orientation change listener
    }));
}

// Observer functionality for listening to changes in the DOM
function Observer(_ref) {
    let {swiper, extendParams, on, emit} = _ref; // Destructure parameters
    const observers = []; // List of observers
    const window = ssr_window_esm_getWindow(); // Get window object

    // Attach a mutation observer to a target element
    const attach = function(target, options) {
        if (options === void 0) options = {}; // Default to empty options if not provided
        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver; // Get appropriate MutationObserver constructor
        const observer = new ObserverFunc((mutations => {
            if (swiper.__preventObserver__) return;
            if (mutations.length === 1) {
                emit("observerUpdate", mutations[0]); // Emit update event on mutation
                return;
            }
            const observerUpdate = function observerUpdate() {
                emit("observerUpdate", mutations[0]); // Emit update event on mutation
            };
            if (window.requestAnimationFrame) window.requestAnimationFrame(observerUpdate); // Use requestAnimationFrame if available
            else window.setTimeout(observerUpdate, 0); // Fallback to setTimeout
        }));
        observer.observe(target, {
            attributes: typeof options.attributes === "undefined" ? true : options.attributes,
            childList: typeof options.childList === "undefined" ? true : options.childList,
            characterData: typeof options.characterData === "undefined" ? true : options.characterData
        });
        observers.push(observer); // Add observer to list
    };

    // Initialize observers based on parameters
    const init = () => {
        if (!swiper.params.observer) return;
        if (swiper.params.observeParents) {
            const containerParents = utils_elementParents(swiper.hostEl);
            for (let i = 0; i < containerParents.length; i += 1) attach(containerParents[i]); // Attach observers to parent elements
        }
        attach(swiper.hostEl, {
            childList: swiper.params.observeSlideChildren // Observe child elements of swiper
        });
        attach(swiper.wrapperEl, {
            attributes: false // Don't observe attributes of the wrapper element
        });
    };

    // Clean up observers on destroy
    const destroy = () => {
        observers.forEach((observer => {
            observer.disconnect(); // Disconnect each observer
        }));
        observers.splice(0, observers.length); // Clear observers list
    };

    extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
    });

    // Set up event listeners for initialization and cleanup
    on("init", init);
    on("destroy", destroy);
}

// Event emitter functionality to handle events
var eventsEmitter = {
    on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push"; // Use unshift for priority handlers
        events.split(" ").forEach((event => {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler); // Add handler to event listeners
        }));
        return self;
    },

    once(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;

        // Handler to ensure event is called only once
        function onceHandler() {
            self.off(events, onceHandler);
            if (onceHandler.__emitterProxy) delete onceHandler.__emitterProxy;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
            handler.apply(self, args); // Call the handler with arguments
        }
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority); // Register once event handler
    },

    onAny(handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== "function") return self;
        const method = priority ? "unshift" : "push"; // Use unshift for priority handlers
        if (self.eventsAnyListeners.indexOf(handler) < 0) self.eventsAnyListeners[method](handler); // Add handler to any listeners
        return self;
    },

    offAny(handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);
        if (index >= 0) self.eventsAnyListeners.splice(index, 1); // Remove handler from any listeners
        return self;
    },

    off(events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(" ").forEach((event => {
            if (typeof handler === "undefined") self.eventsListeners[event] = []; // Remove all listeners if no handler is specified
            else if (self.eventsListeners[event]) self.eventsListeners[event].forEach(((eventHandler, index) => {
                if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) self.eventsListeners[event].splice(index, 1); // Remove handler from listeners
            }));
        }));
        return self;
    },

    emit() {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
        if (typeof args[0] === "string" || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(" ");
        eventsArray.forEach((event => {
            if (self.eventsAnyListeners && self.eventsAnyListeners.length) self.eventsAnyListeners.forEach((eventHandler => {
                eventHandler.apply(context, [ event, ...data ]); // Call any listeners
            }));
            if (self.eventsListeners && self.eventsListeners[event]) self.eventsListeners[event].forEach((eventHandler => {
                eventHandler.apply(context, data); // Call specific event listeners
            }));
        }));
        return self;
    }
};

        function updateSize() {
            const swiper = this;
            let width;
            let height;
            const el = swiper.el;
            // Set the width of the swiper, either from params or the element's client width
            if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) width = swiper.params.width; else width = el.clientWidth;
            // Set the height of the swiper, either from params or the element's client height
            if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) height = swiper.params.height; else height = el.clientHeight;
            // If the width or height is zero and the swiper is either horizontal or vertical, exit the function
            if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) return;
            // Adjust width and height by removing padding
            width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
            height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
            if (Number.isNaN(width)) width = 0;
            if (Number.isNaN(height)) height = 0;
            Object.assign(swiper, {
                width,
                height,
                size: swiper.isHorizontal() ? width : height
            });
        }
       function updateSlides() {
    const swiper = this;

    // Helper function to get direction-based property values
    function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }

    const params = swiper.params;
    const { wrapperEl, slidesEl, size: swiperSize, rtlTranslate: rtl, wrongRTL } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = utils_elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;

    // Arrays for storing slide positions, sizes, and grids
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];

    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") offsetBefore = params.slidesOffsetBefore.call(swiper);

    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") offsetAfter = params.slidesOffsetAfter.call(swiper);

    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;

    // Ensure swiperSize is defined
    if (typeof swiperSize === "undefined") return;

    // Handle spaceBetween value
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0)
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    else if (typeof spaceBetween === "string") spaceBetween = parseFloat(spaceBetween);

    swiper.virtualSize = -spaceBetween;

    // Reset margins for slides
    slides.forEach((slideEl) => {
        if (rtl) slideEl.style.marginLeft = "";
        else slideEl.style.marginRight = "";
        slideEl.style.marginBottom = "";
        slideEl.style.marginTop = "";
    });

    // Handle centered slides for CSS mode
    if (params.centeredSlides && params.cssMode) {
        utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
        utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }

    // Handle grid configuration
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) swiper.grid.initSlides(slides);
    else if (swiper.grid) swiper.grid.unsetSlides();

    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => typeof params.breakpoints[key].slidesPerView !== "undefined").length > 0;

    // Loop through slides and calculate their sizes and positions
    for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        let slide;
        if (slides[i]) slide = slides[i];

        if (gridEnabled) swiper.grid.updateSlide(i, slide, slides);

        if (slides[i] && elementStyle(slide, "display") === "none") continue;

        // Calculate slide size when 'slidesPerView' is set to "auto"
        if (params.slidesPerView === "auto") {
            if (shouldResetSlideSize) slides[i].style[swiper.getDirectionLabel("width")] = ``;
            const slideStyles = getComputedStyle(slide);
            const currentTransform = slide.style.transform;
            const currentWebKitTransform = slide.style.webkitTransform;
            if (currentTransform) slide.style.transform = "none";
            if (currentWebKitTransform) slide.style.webkitTransform = "none";

            if (params.roundLengths) slideSize = swiper.isHorizontal() ? utils_elementOuterSize(slide, "width", true) : utils_elementOuterSize(slide, "height", true);
            else {
                const width = getDirectionPropertyValue(slideStyles, "width");
                const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
                const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
                const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
                const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
                const boxSizing = slideStyles.getPropertyValue("box-sizing");

                if (boxSizing && boxSizing === "border-box") slideSize = width + marginLeft + marginRight;
                else {
                    const { clientWidth, offsetWidth } = slide;
                    slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                }
            }

            if (currentTransform) slide.style.transform = currentTransform;
            if (currentWebKitTransform) slide.style.webkitTransform = currentWebKitTransform;

            if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
            slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
            if (params.roundLengths) slideSize = Math.floor(slideSize);
            if (slides[i]) slides[i].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }

        // Store slide size and position
        if (slides[i]) slides[i].swiperSlideSize = slideSize;
        slidesSizesGrid.push(slideSize);

        // Handle positioning for centered slides
        if (params.centeredSlides) {
            slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
            if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
            if (Math.abs(slidePosition) < 1 / 1e3) slidePosition = 0;
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);

            if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
        } else {
            if (params.roundLengths) slidePosition = Math.floor(slidePosition);
            if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
            slidesGrid.push(slidePosition);
            slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

    // Adjust wrapper size for rtl (right-to-left) support
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;

    // Update wrapper size if 'setWrapperSize' is enabled
    if (params.setWrapperSize) wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;

    // Handle grid updates for multiple rows
    if (gridEnabled) swiper.grid.updateWrapperSize(slideSize, snapGrid);

    // Update snap grid for centered slides and other cases
    if (!params.centeredSlides) {
        const newSlidesGrid = [];
        for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] <= swiper.virtualSize - swiperSize) newSlidesGrid.push(slidesGridItem);
        }
        snapGrid = newSlidesGrid;
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) snapGrid.push(swiper.virtualSize - swiperSize);
    }

    // Handle virtual slides for looping functionality
    if (isVirtual && params.loop) {
        const size = slidesSizesGrid[0] + spaceBetween;
        if (params.slidesPerGroup > 1) {
            const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
            const groupSize = size * params.slidesPerGroup;
            for (let i = 0; i < groups; i += 1) snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
        for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
            if (params.slidesPerGroup === 1) snapGrid.push(snapGrid[snapGrid.length - 1] + size);
            slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
            swiper.virtualSize += size;
        }
    }

    // Default snap grid if none exists
    if (snapGrid.length === 0) snapGrid = [0];

    // Apply space between slides for non-CSS mode
    if (spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
        slides.filter((_, slideIndex) => {
            if (!params.cssMode || params.loop) return true;
            if (slideIndex === slides.length - 1) return false;
            return true;
        }).forEach((slideEl) => {
            slideEl.style[key] = `${spaceBetween}px`;
        });
    }

    // Handle centered slides boundaries
    if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map((snap) => {
            if (snap <= 0) return -offsetBefore;
            if (snap > maxSnap) return maxSnap + offsetAfter;
            return snap;
        });
    }

    // Adjust for insufficient slides and center them
    if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach((slideSizeValue) => {
            allSlidesSize += slideSizeValue + (spaceBetween || 0);
        });
        allSlidesSize -= spaceBetween;
        if (allSlidesSize < swiperSize) {
            const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
            snapGrid.forEach((snap, snapIndex) => {
                snapGrid[snapIndex] = snap - allSlidesOffset;
            });
            slidesGrid.forEach((snap, snapIndex) => {
                slidesGrid[snapIndex] = snap + allSlidesOffset;
            });
        }
    }

    // Update swiper properties with the new grid and snap data
    Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
    });

    // Handle CSS-based centered slides
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
        utils_setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }

    // Emit events if certain properties have changed
    if (slidesLength !== previousSlidesLength) swiper.emit("slidesLengthChange");
    if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) swiper.emit("slidesGridLengthChange");

    // Update slides progress if necessary
    if (params.watchSlidesProgress) swiper.updateSlidesOffset();
    swiper.emit("slidesUpdated");

    // Handle backface hidden class when using specific effects
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
                const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
                const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
                if (slidesLength <= params.maxBackfaceHiddenSlides) {
                    if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
                } else if (hasClassBackfaceClassAdded) swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
        // Update the height of the swiper wrapper based on the active slide's height
function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i;

    // Set transition speed
    if (typeof speed === "number") swiper.setTransition(speed); 
    else if (speed === true) swiper.setTransition(swiper.params.speed);

    // Function to get slide by index
    const getSlideByIndex = index => {
        if (isVirtual) return swiper.slides[swiper.getSlideIndexByData(index)];
        return swiper.slides[index];
    };

    // Gather the active slides based on swiper settings (slidesPerView, centeredSlides)
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) 
        if (swiper.params.centeredSlides) (swiper.visibleSlides || []).forEach(slide => {
            activeSlides.push(slide);
        }); 
        else for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
        } 
    else activeSlides.push(getSlideByIndex(swiper.activeIndex));

    // Calculate the new height based on the height of active slides
    for (i = 0; i < activeSlides.length; i += 1) 
        if (typeof activeSlides[i] !== "undefined") {
            const height = activeSlides[i].offsetHeight;
            newHeight = height > newHeight ? height : newHeight;
        }

    // Apply the calculated height to the swiper wrapper element
    if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
}

// Update the offset for each slide based on swiper position
function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;

    // Calculate and set the offset for each slide
    for (let i = 0; i < slides.length; i += 1) 
        slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
}

// Update progress of the swiper based on the translate position
function updateSlidesProgress(translate) {
    if (translate === void 0) translate = this && this.translate || 0;
    const swiper = this;
    const params = swiper.params;
    const {slides, rtlTranslate: rtl, snapGrid} = swiper;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === "undefined") swiper.updateSlidesOffset();

    // Calculate the slide's progress and visibility based on the translate position
    let offsetCenter = -translate;
    if (rtl) offsetCenter = translate;
    slides.forEach(slideEl => {
        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass);
    });
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;

    // Adjust space between slides
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) 
        spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size; 
    else if (typeof spaceBetween === "string") 
        spaceBetween = parseFloat(spaceBetween);

    // Loop through each slide to calculate its progress and visibility
    for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;
        if (params.cssMode && params.centeredSlides) slideOffset -= slides[0].swiperSlideOffset;
        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);

        // Calculate visibility and fully visible state of the slide
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

        if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides[i].classList.add(params.slideVisibleClass);
        }
        if (isFullyVisible) slides[i].classList.add(params.slideFullyVisibleClass);
        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
}

// Update the overall progress of the swiper
function updateProgress(translate) {
    const swiper = this;
    if (typeof translate === "undefined") {
        const multiplier = swiper.rtlTranslate ? -1 : 1;
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }

    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {progress, isBeginning, isEnd, progressLoop} = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;

    // Calculate progress, beginning and end state
    if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
    } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
        const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
        isBeginning = isBeginningRounded || progress <= 0;
        isEnd = isEndRounded || progress >= 1;
        if (isBeginningRounded) progress = 0;
        if (isEndRounded) progress = 1;
    }

    // Handle looping behavior if enabled
    if (params.loop) {
        const firstSlideIndex = swiper.getSlideIndexByData(0);
        const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
        const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
        const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
        const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
        const translateAbs = Math.abs(translate);
        if (translateAbs >= firstSlideTranslate) progressLoop = (translateAbs - firstSlideTranslate) / translateMax; 
        else progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
        if (progressLoop > 1) progressLoop -= 1;
    }

    // Update swiper progress and emit events
    Object.assign(swiper, {
        progress,
        progressLoop,
        isBeginning,
        isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
    if (isBeginning && !wasBeginning) swiper.emit("reachBeginning toEdge");
    if (isEnd && !wasEnd) swiper.emit("reachEnd toEdge");
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) swiper.emit("fromEdge");
    swiper.emit("progress", progress);
}

// Toggle class on a slide based on a condition
const toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) slideEl.classList.add(className); 
    else if (!condition && slideEl.classList.contains(className)) slideEl.classList.remove(className);
};

// Update the classes for the slides (active, next, previous)
function updateSlidesClasses() {
    const swiper = this;
    const {slides, params, slidesEl, activeIndex} = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = selector => utils_elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
    let activeSlide;
    let prevSlide;
    let nextSlide;

    // Get the active slide and neighboring slides based on swiper settings
    if (isVirtual) if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
    } else activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
    else if (gridEnabled) {
        activeSlide = slides.filter(slideEl => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter(slideEl => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter(slideEl => slideEl.column === activeIndex - 1)[0];
    } else activeSlide = slides[activeIndex];

    // Find the previous and next slides
    if (activeSlide) if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) nextSlide = slides[0];
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) prevSlide = slides[slides.length - 1];
    }

    // Apply the appropriate classes to slides
    slides.forEach(slideEl => {
        toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
        toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
        toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
}

// Process lazy loading of images and remove the preloader class
const processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
        let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        if (!lazyEl && swiper.isElement) if (slideEl.shadowRoot) lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`); else requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
                lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                if (lazyEl) lazyEl.remove();
            }
        });
        if (lazyEl) lazyEl.remove();
    }
};

// Unload the lazy image for a given index
const unlazy = (swiper, index) => {
    if (!swiper.slides[index]) return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl) imageEl.removeAttribute("loading");
};

// Preload images for nearby slides based on the swiper configuration
const preload = swiper => {
    if (!swiper || swiper.destroyed || !swiper.params) return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0) return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;

    // Handle grid-based slide layouts
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
        const activeColumn = activeIndex;
        const preloadColumns = [ activeColumn - amount ];
        preloadColumns.push(...Array.from({ length: amount }).map((_, i) => activeColumn + slidesPerView + i));
        swiper.slides.forEach((slideEl, i) => {
            if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
        });
        return;
    }

    // Preload slides based on proximity to the active slide
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
        const realIndex = (i % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
    } else for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) 
        if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) unlazy(swiper, i);
};

 // Function to calculate the active slide index based on the current translation
function getActiveIndexByTranslate(swiper) {
    const { slidesGrid, params } = swiper;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate; // Adjust translation based on RTL
    let activeIndex;
    
    // Iterate through slidesGrid to find the active index based on translate value
    for (let i = 0; i < slidesGrid.length; i += 1) 
        if (typeof slidesGrid[i + 1] !== "undefined") {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) 
                activeIndex = i; 
            else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) 
                activeIndex = i + 1;
        } 
        else if (translate >= slidesGrid[i]) activeIndex = i;

    // Ensure active index is valid according to the parameters
    if (params.normalizeSlideIndex) 
        if (activeIndex < 0 || typeof activeIndex === "undefined") activeIndex = 0;
    
    return activeIndex;
}

// Function to update the active index in the swiper
function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const { snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;

    // Function to calculate the real index for virtual slides
    const getVirtualRealIndex = aIndex => {
        let realIndex = aIndex - swiper.virtual.slidesBefore;
        if (realIndex < 0) realIndex = swiper.virtual.slides.length + realIndex;
        if (realIndex >= swiper.virtual.slides.length) realIndex -= swiper.virtual.slides.length;
        return realIndex;
    };

    // If the active index is undefined, calculate it based on translate value
    if (typeof activeIndex === "undefined") activeIndex = getActiveIndexByTranslate(swiper);

    // Determine the snap index based on the current translation
    if (snapGrid.indexOf(translate) >= 0) 
        snapIndex = snapGrid.indexOf(translate); 
    else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    
    // Ensure snap index doesn't exceed grid limits
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    // Update active index if it hasn't changed (and handle looping)
    if (activeIndex === previousIndex && !swiper.params.loop) {
        if (snapIndex !== previousSnapIndex) {
            swiper.snapIndex = snapIndex;
            swiper.emit("snapIndexChange");
        }
        return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.realIndex = getVirtualRealIndex(activeIndex);
        return;
    }

    // Calculate real index for non-virtual slides
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) 
        realIndex = getVirtualRealIndex(activeIndex); 
    else if (gridEnabled) {
        const firstSlideInColumn = swiper.slides.filter((slideEl => slideEl.column === activeIndex))[0];
        let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
        if (Number.isNaN(activeSlideIndex)) 
            activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
        realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } 
    else if (swiper.slides[activeIndex]) {
        const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
        if (slideIndex) realIndex = parseInt(slideIndex, 10); 
        else realIndex = activeIndex;
    } 
    else realIndex = activeIndex;

    // Update swiper properties with new active index and real index
    Object.assign(swiper, {
        previousSnapIndex,
        snapIndex,
        previousRealIndex,
        realIndex,
        previousIndex,
        activeIndex
    });

    // Emit events related to active index change
    if (swiper.initialized) preload(swiper);
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        if (previousRealIndex !== realIndex) swiper.emit("realIndexChange");
        swiper.emit("slideChange");
    }
}

// Function to update the clicked slide based on user interaction
function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide = el.closest(`.${params.slideClass}, swiper-slide`);
    
    // If no slide found, look for the closest slide within the event path
    if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) 
        [ ...path.slice(path.indexOf(el) + 1, path.length) ].forEach((pathEl => {
            if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) slide = pathEl;
        }));
    
    let slideFound = false;
    let slideIndex;

    // Check if the slide is part of the swiper slides
    if (slide) 
        for (let i = 0; i < swiper.slides.length; i += 1) 
            if (swiper.slides[i] === slide) {
                slideFound = true;
                slideIndex = i;
                break;
            }

    // If a valid slide is clicked, update the clicked slide properties
    if (slide && slideFound) {
        swiper.clickedSlide = slide;
        if (swiper.virtual && swiper.params.virtual.enabled) 
            swiper.clickedIndex = parseInt(slide.getAttribute("data-swiper-slide-index"), 10); 
        else swiper.clickedIndex = slideIndex;
    } 
    else {
        swiper.clickedSlide = void 0;
        swiper.clickedIndex = void 0;
        return;
    }

    // If enabled, transition to the clicked slide
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) 
        swiper.slideToClickedSlide();
}

// Collection of methods related to updating swiper properties
var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
};

// Function to get the translation value (either X or Y axis)
function getSwiperTranslate(axis) {
    if (axis === void 0) axis = this.isHorizontal() ? "x" : "y"; // Default axis is horizontal
    const swiper = this;
    const { params, rtlTranslate: rtl, translate, wrapperEl } = swiper;
    
    // If virtual translation is enabled, return adjusted translate value
    if (params.virtualTranslate) return rtl ? -translate : translate;

    // If CSS mode is enabled, return the translate value directly
    if (params.cssMode) return translate;

    // Get the translate value from the wrapper element
    let currentTranslate = utils_getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
}

// Function to set translation value to the swiper wrapper element
function setTranslate(translate, byController) {
    const swiper = this;
    const { rtlTranslate: rtl, params, wrapperEl, progress } = swiper;
    let x = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) x = rtl ? -translate : translate; 
    else y = translate;

    // Round translation values if enabled
    if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
    }

    // Update translation properties in swiper
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y;
    if (params.cssMode) wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x : -y; 
    else if (!params.virtualTranslate) {
        if (swiper.isHorizontal()) x -= swiper.cssOverflowAdjustment(); 
        else y -= swiper.cssOverflowAdjustment();
        wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`; // Apply CSS transform
    }

    // Calculate and update progress based on translation
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) newProgress = 0; 
    else newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    if (newProgress !== progress) swiper.updateProgress(translate);

    // Emit translation change event
    swiper.emit("setTranslate", swiper.translate, byController);
}

// Other functions like `minTranslate`, `maxTranslate`, and `translateTo` perform similar actions and emit appropriate events.
        function minTranslate() {
            return -this.snapGrid[0];
        }
        function maxTranslate() {
            return -this.snapGrid[this.snapGrid.length - 1];
        }
        function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
            if (translate === void 0) translate = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            if (translateBounds === void 0) translateBounds = true;
            const swiper = this;
            const {params, wrapperEl} = swiper;
            if (swiper.animating && params.preventInteractionOnTransition) return false;
            const minTranslate = swiper.minTranslate();
            const maxTranslate = swiper.maxTranslate();
            let newTranslate;
            if (translateBounds && translate > minTranslate) newTranslate = minTranslate; else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate; else newTranslate = translate;
            swiper.updateProgress(newTranslate);
            if (params.cssMode) {
                const isH = swiper.isHorizontal();
                if (speed === 0) wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate; else {
                    if (!swiper.support.smoothScroll) {
                        animateCSSModeScroll({
                            swiper,
                            targetPosition: -newTranslate,
                            side: isH ? "left" : "top"
                        });
                        return true;
                    }
                    wrapperEl.scrollTo({
                        [isH ? "left" : "top"]: -newTranslate,
                        behavior: "smooth"
                    });
                }
                return true;
            }
            if (speed === 0) {
                swiper.setTransition(0);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionEnd");
                }
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(newTranslate);
                if (runCallbacks) {
                    swiper.emit("beforeTransitionStart", speed, internal);
                    swiper.emit("transitionStart");
                }
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onTranslateToWrapperTransitionEnd) swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) swiper.emit("transitionEnd");
                    };
                    swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
                }
            }
            return true;
        }
        var translate = {
            getTranslate: getSwiperTranslate,
            setTranslate,
            minTranslate,
            maxTranslate,
            translateTo
        };
        function setTransition(duration, byController) {
            const swiper = this;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
                swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
            }
            swiper.emit("setTransition", duration, byController);
        }
        function transitionEmit(_ref) {
            let {swiper, runCallbacks, direction, step} = _ref;
            const {activeIndex, previousIndex} = swiper;
            let dir = direction;
            if (!dir) if (activeIndex > previousIndex) dir = "next"; else if (activeIndex < previousIndex) dir = "prev"; else dir = "reset";
            swiper.emit(`transition${step}`);
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === "reset") {
                    swiper.emit(`slideResetTransition${step}`);
                    return;
                }
                swiper.emit(`slideChangeTransition${step}`);
                if (dir === "next") swiper.emit(`slideNextTransition${step}`); else swiper.emit(`slidePrevTransition${step}`);
            }
        }
        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            if (params.cssMode) return;
            if (params.autoHeight) swiper.updateAutoHeight();
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "Start"
            });
        }
        function transitionEnd(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            const swiper = this;
            const {params} = swiper;
            swiper.animating = false;
            if (params.cssMode) return;
            swiper.setTransition(0);
            transitionEmit({
                swiper,
                runCallbacks,
                direction,
                step: "End"
            });
        }
        var transition = {
            setTransition,
            transitionStart,
            transitionEnd
        };
        // Function to slide to a specific index
function slideTo(index, speed, runCallbacks, internal, initial) {
    // Default values for parameters
    if (index === void 0) index = 0;
    if (runCallbacks === void 0) runCallbacks = true;
    // Handle index as a string or number
    if (typeof index === "string") index = parseInt(index, 10);
    const swiper = this;
    let slideIndex = index;
    // Ensure slideIndex is not negative
    if (slideIndex < 0) slideIndex = 0;
    const {params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl, enabled} = swiper;
    // Prevent interaction if swiper is disabled, destroyed, or animating with the 'preventInteractionOnTransition' flag
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) return false;

    // Set speed to default if not provided
    if (typeof speed === "undefined") speed = swiper.params.speed;
    
    // Calculate the snap index based on the slide index
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
    const translate = -snapGrid[snapIndex];

    // Normalize the slide index based on the translate position
    if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
            const normalizedTranslate = -Math.floor(translate * 100);
            const normalizedGrid = Math.floor(slidesGrid[i] * 100);
            const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
            if (typeof slidesGrid[i + 1] !== "undefined") {
                if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) slideIndex = i; 
                else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) slideIndex = i + 1;
            } else if (normalizedTranslate >= normalizedGrid) slideIndex = i;
        }
    }

    // Handle cases where slide is outside allowed range, check if next/previous slides are allowed
    if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) return false;
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) if ((activeIndex || 0) !== slideIndex) return false;
    }
    
    // Emit before slide change event if slide index changes
    if (slideIndex !== (previousIndex || 0) && runCallbacks) swiper.emit("beforeSlideChangeStart");

    // Update progress and slide direction
    swiper.updateProgress(translate);
    let direction;
    if (slideIndex > activeIndex) direction = "next"; 
    else if (slideIndex < activeIndex) direction = "prev"; 
    else direction = "reset";
    
    // Handle direct translation for CSS mode and update active index and slides
    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex);
        if (params.autoHeight) swiper.updateAutoHeight();
        swiper.updateSlidesClasses();
        if (params.effect !== "slide") swiper.setTranslate(translate);
        if (direction !== "reset") {
            swiper.transitionStart(runCallbacks, direction);
            swiper.transitionEnd(runCallbacks, direction);
        }
        return false;
    }

    // Handle CSS mode and smooth scrolling
    if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;
        if (speed === 0) {
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            if (isVirtual) {
                swiper.wrapperEl.style.scrollSnapType = "none";
                swiper._immediateVirtual = true;
            }
            if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                swiper._cssModeVirtualInitialSet = true;
                requestAnimationFrame((() => {
                    wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
                }));
            } else wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t;
            if (isVirtual) requestAnimationFrame((() => {
                swiper.wrapperEl.style.scrollSnapType = "";
                swiper._immediateVirtual = false;
            }));
        } else {
            if (!swiper.support.smoothScroll) {
                animateCSSModeScroll({
                    swiper,
                    targetPosition: t,
                    side: isH ? "left" : "top"
                });
                return true;
            }
            wrapperEl.scrollTo({
                [isH ? "left" : "top"]: t,
                behavior: "smooth"
            });
        }
        return true;
    }

    // Set transition and slide translation
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    
    // Handle end of transition event
    if (speed === 0) swiper.transitionEnd(runCallbacks, direction); 
    else if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onSlideToWrapperTransitionEnd) swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
        };
        swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
}

// Function to handle looped slide transitions
function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) index = 0;
    if (runCallbacks === void 0) runCallbacks = true;
    // Check if swiper is destroyed
    const swiper = this;
    if (swiper.destroyed) return;
    if (typeof speed === "undefined") speed = swiper.params.speed;

    // Handle loop and grid-specific logic
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
        if (swiper.virtual && swiper.params.virtual.enabled) newIndex += swiper.virtual.slidesBefore; 
        else {
            let targetSlideIndex;
            if (gridEnabled) {
                const slideIndex = newIndex * swiper.params.grid.rows;
                targetSlideIndex = swiper.slides.filter((slideEl => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex))[0].column;
            } else targetSlideIndex = swiper.getSlideIndexByData(newIndex);
            const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
            const {centeredSlides} = swiper.params;
            let slidesPerView = swiper.params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            let needLoopFix = cols - targetSlideIndex < slidesPerView;
            if (centeredSlides) needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
            if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) needLoopFix = false;
            if (needLoopFix) {
                const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
                swiper.loopFix({
                    direction,
                    slideTo: true,
                    activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                    slideRealIndex: direction === "next" ? swiper.realIndex : void 0
                });
            }
        }
    }
    requestAnimationFrame((() => {
        swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }));
    return swiper;
}

// Function to go to next slide
function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const {enabled, params, animating} = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") speed = swiper.params.speed;
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "next"
        });
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
        if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
            requestAnimationFrame((() => {
                swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
            }));
            return true;
        }
    }
    if (params.rewind && swiper.isEnd) return swiper.slideTo(0, speed, runCallbacks, internal);
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
}

// Function to go to previous slide
function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) runCallbacks = true;
    const swiper = this;
    const {params, snapGrid, slidesGrid, rtlTranslate, enabled, animating} = swiper;
    if (!enabled || swiper.destroyed) return swiper;
    if (typeof speed === "undefined") speed = swiper.params.speed;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
        if (animating && !isVirtual && params.loopPreventsSliding) return false;
        swiper.loopFix({
            direction: "prev"
        });
        swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
    }
    const normalizedTranslate = normalize(translate);
    const normalizedSnapGrid = snapGrid.map((val => normalize(val)));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach(((snap, snapIndex) => {
            if (normalizedTranslate >= snap) prevSnapIndex = snapIndex;
        }));
        if (typeof prevSnapIndex !== "undefined") prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
        if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
            prevIndex = Math.max(prevIndex, 0);
        }
    }
    if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
        requestAnimationFrame((() => {
            swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }));
        return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
}

        function loopCreate(slideRealIndex) {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            const initSlides = () => {
                const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
                slides.forEach(((el, index) => {
                    el.setAttribute("data-swiper-slide-index", index);
                }));
            };
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
            const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
            const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
            const addBlankSlides = amountOfSlides => {
                for (let i = 0; i < amountOfSlides; i += 1) {
                    const slideEl = swiper.isElement ? utils_createElement("swiper-slide", [ params.slideBlankClass ]) : utils_createElement("div", [ params.slideClass, params.slideBlankClass ]);
                    swiper.slidesEl.append(slideEl);
                }
            };
            if (shouldFillGroup) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else if (shouldFillGrid) {
                if (params.loopAddBlankSlides) {
                    const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                    addBlankSlides(slidesToAdd);
                    swiper.recalcSlides();
                    swiper.updateSlides();
                } else showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                initSlides();
            } else initSlides();
            swiper.loopFix({
                slideRealIndex,
                direction: params.centeredSlides ? void 0 : "next"
            });
        }
        function loopFix(_temp) {
            let {slideRealIndex, slideTo = true, direction, setTranslate, activeSlideIndex, byController, byMousewheel} = _temp === void 0 ? {} : _temp;
            const swiper = this;
            if (!swiper.params.loop) return;
            swiper.emit("beforeLoopFix");
            const {slides, allowSlidePrev, allowSlideNext, slidesEl, params} = swiper;
            const {centeredSlides} = params;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            if (swiper.virtual && params.virtual.enabled) {
                if (slideTo) if (!params.centeredSlides && swiper.snapIndex === 0) swiper.slideTo(swiper.virtual.slides.length, 0, false, true); else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true); else if (swiper.snapIndex === swiper.snapGrid.length - 1) swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                swiper.allowSlidePrev = allowSlidePrev;
                swiper.allowSlideNext = allowSlideNext;
                swiper.emit("loopFix");
                return;
            }
            let slidesPerView = params.slidesPerView;
            if (slidesPerView === "auto") slidesPerView = swiper.slidesPerViewDynamic(); else {
                slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
                if (centeredSlides && slidesPerView % 2 === 0) slidesPerView += 1;
            }
            const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
            let loopedSlides = slidesPerGroup;
            if (loopedSlides % slidesPerGroup !== 0) loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
            loopedSlides += params.loopAdditionalSlides;
            swiper.loopedSlides = loopedSlides;
            const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
            if (slides.length < slidesPerView + loopedSlides) showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"); else if (gridEnabled && params.grid.fill === "row") showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const prependSlidesIndexes = [];
            const appendSlidesIndexes = [];
            let activeIndex = swiper.activeIndex;
            if (typeof activeSlideIndex === "undefined") activeSlideIndex = swiper.getSlideIndex(slides.filter((el => el.classList.contains(params.slideActiveClass)))[0]); else activeIndex = activeSlideIndex;
            const isNext = direction === "next" || !direction;
            const isPrev = direction === "prev" || !direction;
            let slidesPrepended = 0;
            let slidesAppended = 0;
            const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
            const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
            const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === "undefined" ? -slidesPerView / 2 + .5 : 0);
            if (activeColIndexWithShift < loopedSlides) {
                slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
                for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) {
                        const colIndexToPrepend = cols - index - 1;
                        for (let i = slides.length - 1; i >= 0; i -= 1) if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    } else prependSlidesIndexes.push(cols - index - 1);
                }
            } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
                slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
                for (let i = 0; i < slidesAppended; i += 1) {
                    const index = i - Math.floor(i / cols) * cols;
                    if (gridEnabled) slides.forEach(((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    })); else appendSlidesIndexes.push(index);
                }
            }
            swiper.__preventObserver__ = true;
            requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
            if (isPrev) prependSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            if (isNext) appendSlidesIndexes.forEach((index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            }));
            swiper.recalcSlides();
            if (params.slidesPerView === "auto") swiper.updateSlides(); else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) swiper.slides.forEach(((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            }));
            if (params.watchSlidesProgress) swiper.updateSlidesOffset();
            if (slideTo) if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === "undefined") {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else if (setTranslate) {
                    const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                    swiper.touchEventsData.currentTranslate = swiper.translate;
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) if (typeof slideRealIndex === "undefined") {
                const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                const diff = newSlideTranslate - currentSlideTranslate;
                if (byMousewheel) swiper.setTranslate(swiper.translate - diff); else {
                    swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                    if (setTranslate) {
                        swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                        swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                    }
                }
            } else {
                const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.controller && swiper.controller.control && !byController) {
                const loopParams = {
                    slideRealIndex,
                    direction,
                    setTranslate,
                    activeSlideIndex,
                    byController: true
                };
                if (Array.isArray(swiper.controller.control)) swiper.controller.control.forEach((c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                })); else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
            swiper.emit("loopFix");
        }
        function loopDestroy() {
            const swiper = this;
            const {params, slidesEl} = swiper;
            if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
            swiper.recalcSlides();
            const newSlidesOrder = [];
            swiper.slides.forEach((slideEl => {
                const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
                newSlidesOrder[index] = slideEl;
            }));
            swiper.slides.forEach((slideEl => {
                slideEl.removeAttribute("data-swiper-slide-index");
            }));
            newSlidesOrder.forEach((slideEl => {
                slidesEl.append(slideEl);
            }));
            swiper.recalcSlides();
            swiper.slideTo(swiper.realIndex, 0);
        }
        var loop = {
            loopCreate,
            loopFix,
            loopDestroy
        };
        function setGrabCursor(moving) {
            const swiper = this;
            if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            el.style.cursor = "move";
            el.style.cursor = moving ? "grabbing" : "grab";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        function unsetGrabCursor() {
            const swiper = this;
            if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
            if (swiper.isElement) swiper.__preventObserver__ = true;
            swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
            if (swiper.isElement) requestAnimationFrame((() => {
                swiper.__preventObserver__ = false;
            }));
        }
        var grabCursor = {
            setGrabCursor,
            unsetGrabCursor
        };
        function closestElement(selector, base) {
            if (base === void 0) base = this;
            function __closestFrom(el) {
                if (!el || el === ssr_window_esm_getDocument() || el === ssr_window_esm_getWindow()) return null;
                if (el.assignedSlot) el = el.assignedSlot;
                const found = el.closest(selector);
                if (!found && !el.getRootNode) return null;
                return found || __closestFrom(el.getRootNode().host);
            }
            return __closestFrom(base);
        }
        function preventEdgeSwipe(swiper, event, startX) {
            const window = ssr_window_esm_getWindow();
            const {params} = swiper;
            const edgeSwipeDetection = params.edgeSwipeDetection;
            const edgeSwipeThreshold = params.edgeSwipeThreshold;
            if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
                if (edgeSwipeDetection === "prevent") {
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return true;
        }
        function onTouchStart(event) {
            const swiper = this;
            const document = ssr_window_esm_getDocument();
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            const data = swiper.touchEventsData;
            if (e.type === "pointerdown") {
                if (data.pointerId !== null && data.pointerId !== e.pointerId) return;
                data.pointerId = e.pointerId;
            } else if (e.type === "touchstart" && e.targetTouches.length === 1) data.touchId = e.targetTouches[0].identifier;
            if (e.type === "touchstart") {
                preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
                return;
            }
            const {params, touches, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (swiper.animating && params.preventInteractionOnTransition) return;
            if (!swiper.animating && params.cssMode && params.loop) swiper.loopFix();
            let targetEl = e.target;
            if (params.touchEventsTarget === "wrapper") if (!swiper.wrapperEl.contains(targetEl)) return;
            if ("which" in e && e.which === 3) return;
            if ("button" in e && e.button > 0) return;
            if (data.isTouched && data.isMoved) return;
            const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
            const eventPath = e.composedPath ? e.composedPath() : e.path;
            if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) targetEl = eventPath[0];
            const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
            const isTargetShadow = !!(e.target && e.target.shadowRoot);
            if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
                swiper.allowClick = true;
                return;
            }
            if (params.swipeHandler) if (!targetEl.closest(params.swipeHandler)) return;
            touches.currentX = e.pageX;
            touches.currentY = e.pageY;
            const startX = touches.currentX;
            const startY = touches.currentY;
            if (!preventEdgeSwipe(swiper, e, startX)) return;
            Object.assign(data, {
                isTouched: true,
                isMoved: false,
                allowTouchCallbacks: true,
                isScrolling: void 0,
                startMoving: void 0
            });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = utils_now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = void 0;
            if (params.threshold > 0) data.allowThresholdMove = false;
            let preventDefault = true;
            if (targetEl.matches(data.focusableElements)) {
                preventDefault = false;
                if (targetEl.nodeName === "SELECT") data.isTouched = false;
            }
            if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl) document.activeElement.blur();
            const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
            if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) e.preventDefault();
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) swiper.freeMode.onTouchStart();
            swiper.emit("touchStart", e);
        }
        function onTouchMove(event) {
            const document = ssr_window_esm_getDocument();
            const swiper = this;
            const data = swiper.touchEventsData;
            const {params, touches, rtlTranslate: rtl, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && event.pointerType === "mouse") return;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            if (e.type === "pointermove") {
                if (data.touchId !== null) return;
                const id = e.pointerId;
                if (id !== data.pointerId) return;
            }
            let targetTouch;
            if (e.type === "touchmove") {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            } else targetTouch = e;
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) swiper.emit("touchMoveOpposite", e);
                return;
            }
            const pageX = targetTouch.pageX;
            const pageY = targetTouch.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                if (!e.target.matches(data.focusableElements)) swiper.allowClick = false;
                if (data.isTouched) {
                    Object.assign(touches, {
                        startX: pageX,
                        startY: pageY,
                        currentX: pageX,
                        currentY: pageY
                    });
                    data.touchStartTime = utils_now();
                }
                return;
            }
            if (params.touchReleaseOnEdges && !params.loop) if (swiper.isVertical()) {
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) return;
            if (document.activeElement) if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
            if (data.allowTouchCallbacks) swiper.emit("touchMove", e);
            touches.previousX = touches.currentX;
            touches.previousY = touches.currentY;
            touches.currentX = pageX;
            touches.currentY = pageY;
            const diffX = touches.currentX - touches.startX;
            const diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
            if (typeof data.isScrolling === "undefined") {
                let touchAngle;
                if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) data.isScrolling = false; else if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
            if (data.isScrolling) swiper.emit("touchMoveOpposite", e);
            if (typeof data.startMoving === "undefined") if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) data.startMoving = true;
            if (data.isScrolling || e.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
                data.isTouched = false;
                return;
            }
            if (!data.startMoving) return;
            swiper.allowClick = false;
            if (!params.cssMode && e.cancelable) e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) e.stopPropagation();
            let diff = swiper.isHorizontal() ? diffX : diffY;
            let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
            if (params.oneWayMovement) {
                diff = Math.abs(diff) * (rtl ? 1 : -1);
                touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
            }
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) {
                diff = -diff;
                touchesDiff = -touchesDiff;
            }
            const prevTouchesDirection = swiper.touchesDirection;
            swiper.swipeDirection = diff > 0 ? "prev" : "next";
            swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
            const isLoop = swiper.params.loop && !params.cssMode;
            const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
            if (!data.isMoved) {
                if (isLoop && allowLoopFix) swiper.loopFix({
                    direction: swiper.swipeDirection
                });
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) {
                    const evt = new window.CustomEvent("transitionend", {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(true);
                swiper.emit("sliderFirstMove", e);
            }
            let loopFixed;
            (new Date).getTime();
            if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY,
                    startTranslate: data.currentTranslate
                });
                data.loopSwapReset = true;
                data.startTranslate = data.currentTranslate;
                return;
            }
            swiper.emit("sliderMove", e);
            data.isMoved = true;
            data.currentTranslate = diff + data.startTranslate;
            let disableParentSwiper = true;
            let resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) resistanceRatio = 0;
            if (diff > 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] : swiper.minTranslate())) swiper.loopFix({
                    direction: "prev",
                    setTranslate: true,
                    activeSlideIndex: 0
                });
                if (data.currentTranslate > swiper.minTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            } else if (diff < 0) {
                if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] : swiper.maxTranslate())) swiper.loopFix({
                    direction: "next",
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
                if (data.currentTranslate < swiper.maxTranslate()) {
                    disableParentSwiper = false;
                    if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
            if (disableParentSwiper) e.preventedByNestedSwiper = true;
            if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) data.currentTranslate = data.startTranslate;
            if (!swiper.allowSlidePrev && !swiper.allowSlideNext) data.currentTranslate = data.startTranslate;
            if (params.threshold > 0) if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
            if (!params.followFinger || params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode && params.freeMode.enabled && swiper.freeMode) swiper.freeMode.onTouchMove();
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }
        function onTouchEnd(event) {
            const swiper = this;
            const data = swiper.touchEventsData;
            let e = event;
            if (e.originalEvent) e = e.originalEvent;
            let targetTouch;
            const isTouchEvent = e.type === "touchend" || e.type === "touchcancel";
            if (!isTouchEvent) {
                if (data.touchId !== null) return;
                if (e.pointerId !== data.pointerId) return;
                targetTouch = e;
            } else {
                targetTouch = [ ...e.changedTouches ].filter((t => t.identifier === data.touchId))[0];
                if (!targetTouch || targetTouch.identifier !== data.touchId) return;
            }
            if ([ "pointercancel", "pointerout", "pointerleave", "contextmenu" ].includes(e.type)) {
                const proceed = [ "pointercancel", "contextmenu" ].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
                if (!proceed) return;
            }
            data.pointerId = null;
            data.touchId = null;
            const {params, touches, rtlTranslate: rtl, slidesGrid, enabled} = swiper;
            if (!enabled) return;
            if (!params.simulateTouch && e.pointerType === "mouse") return;
            if (data.allowTouchCallbacks) swiper.emit("touchEnd", e);
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) swiper.setGrabCursor(false);
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) swiper.setGrabCursor(false);
            const touchEndTime = utils_now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                const pathTree = e.path || e.composedPath && e.composedPath();
                swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
                swiper.emit("tap click", e);
                if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) swiper.emit("doubleTap doubleClick", e);
            }
            data.lastClickTime = utils_now();
            utils_nextTick((() => {
                if (!swiper.destroyed) swiper.allowClick = true;
            }));
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            let currentPos;
            if (params.followFinger) currentPos = rtl ? swiper.translate : -swiper.translate; else currentPos = -data.currentTranslate;
            if (params.cssMode) return;
            if (params.freeMode && params.freeMode.enabled) {
                swiper.freeMode.onTouchEnd({
                    currentPos
                });
                return;
            }
            const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
            let stopIndex = 0;
            let groupSize = swiper.slidesSizesGrid[0];
            for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
                const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
                if (typeof slidesGrid[i + increment] !== "undefined") {
                    if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + increment] - slidesGrid[i];
                    }
                } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            let rewindFirstIndex = null;
            let rewindLastIndex = null;
            if (params.rewind) if (swiper.isBeginning) rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1; else if (swiper.isEnd) rewindFirstIndex = 0;
            const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                if (swiper.swipeDirection === "next") if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment); else swiper.slideTo(stopIndex);
                if (swiper.swipeDirection === "prev") if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment); else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) swiper.slideTo(rewindLastIndex); else swiper.slideTo(stopIndex);
            } else {
                if (!params.shortSwipes) {
                    swiper.slideTo(swiper.activeIndex);
                    return;
                }
                const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
                if (!isNavButtonTarget) {
                    if (swiper.swipeDirection === "next") swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                    if (swiper.swipeDirection === "prev") swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                } else if (e.target === swiper.navigation.nextEl) swiper.slideTo(stopIndex + increment); else swiper.slideTo(stopIndex);
            }
        }
       // Function to handle resizing of the swiper
function onResize() {
    const swiper = this;
    const {params, el} = swiper;
    
    // Prevent resize logic if the element width is 0
    if (el && el.offsetWidth === 0) return;

    // Check if breakpoints are defined and update them
    if (params.breakpoints) swiper.setBreakpoint();
    
    const {allowSlideNext, allowSlidePrev, snapGrid} = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    
    // Update swiper size, slides, and their classes
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();

    // Adjust slide based on settings like loop and slidesPerView
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) 
        swiper.slideTo(swiper.slides.length - 1, 0, false, true); 
    else if (swiper.params.loop && !isVirtual) 
        swiper.slideToLoop(swiper.realIndex, 0, false, true); 
    else 
        swiper.slideTo(swiper.activeIndex, 0, false, true);

    // Autoplay logic for pausing and resuming based on resize
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        clearTimeout(swiper.autoplay.resizeTimeout);
        swiper.autoplay.resizeTimeout = setTimeout(() => {
            if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) swiper.autoplay.resume();
        }, 500);
    }

    // Restore the original slide navigation settings
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    // Check for overflow if enabled
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
}

// Function to handle click events in the swiper
function onClick(e) {
    const swiper = this;
    if (!swiper.enabled) return;
    
    // Prevent click if swiper is not allowed to click
    if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
        if (swiper.params.preventClicksPropagation && swiper.animating) {
            e.stopPropagation();
            e.stopImmediatePropagation();
        }
    }
}

// Function to handle scroll events in the swiper
function onScroll() {
    const swiper = this;
    const {wrapperEl, rtlTranslate, enabled} = swiper;
    if (!enabled) return;

    swiper.previousTranslate = swiper.translate;

    // Adjust translate based on scroll direction (horizontal or vertical)
    if (swiper.isHorizontal()) swiper.translate = -wrapperEl.scrollLeft;
    else swiper.translate = -wrapperEl.scrollTop;

    if (swiper.translate === 0) swiper.translate = 0;

    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    // Calculate new progress based on translation
    if (translatesDiff === 0) newProgress = 0;
    else newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;

    if (newProgress !== swiper.progress) swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    
    swiper.emit("setTranslate", swiper.translate, false);
}

// Function to handle load events in the swiper
function onLoad(e) {
    const swiper = this;
    processLazyPreloader(swiper, e.target);
    
    // Skip update if certain params are set
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) return;

    swiper.update();
}

// Function to handle the touch start event
function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded) return;
    swiper.documentTouchHandlerProceeded = true;

    // Enable touch action if required
    if (swiper.params.touchReleaseOnEdges) swiper.el.style.touchAction = "auto";
}

// Utility function to manage the attachment and detachment of events
const events = (swiper, method) => {
    const document = ssr_window_esm_getDocument();
    const {params, el, wrapperEl, device} = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    
    // Attach various touch and pointer events for swiper functionality
    document[domMethod]("touchstart", swiper.onDocumentTouchStart, {passive: false, capture});
    el[domMethod]("touchstart", swiper.onTouchStart, {passive: false});
    el[domMethod]("pointerdown", swiper.onTouchStart, {passive: false});
    document[domMethod]("touchmove", swiper.onTouchMove, {passive: false, capture});
    document[domMethod]("pointermove", swiper.onTouchMove, {passive: false, capture});
    document[domMethod]("touchend", swiper.onTouchEnd, {passive: true});
    document[domMethod]("pointerup", swiper.onTouchEnd, {passive: true});
    document[domMethod]("pointercancel", swiper.onTouchEnd, {passive: true});
    document[domMethod]("touchcancel", swiper.onTouchEnd, {passive: true});
    document[domMethod]("pointerout", swiper.onTouchEnd, {passive: true});
    document[domMethod]("pointerleave", swiper.onTouchEnd, {passive: true});
    document[domMethod]("contextmenu", swiper.onTouchEnd, {passive: true});
    
    // Handle click event if clicks are prevented
    if (params.preventClicks || params.preventClicksPropagation) el[domMethod]("click", swiper.onClick, true);
    
    // Scroll event if cssMode is enabled
    if (params.cssMode) wrapperEl[domMethod]("scroll", swiper.onScroll);
    
    // Resize observer update for swiper
    if (params.updateOnWindowResize) swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    else swiper[swiperMethod]("observerUpdate", onResize, true);
    
    el[domMethod]("load", swiper.onLoad, {capture: true});
};

// Function to attach all necessary events
function attachEvents() {
    const swiper = this;
    const {params} = swiper;
    
    // Bind the swiper methods to their corresponding events
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) swiper.onScroll = onScroll.bind(swiper);
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    
    events(swiper, "on");
}

// Function to detach all events
function detachEvents() {
    const swiper = this;
    events(swiper, "off");
}

// Event handling module
var events$1 = {
    attachEvents,
    detachEvents
};

// Helper function to check if the grid is enabled
const isGridEnabled = (swiper, params) => swiper.grid && params.grid && params.grid.rows > 1;

// Function to set breakpoints for responsiveness
function setBreakpoint() {
    const swiper = this;
    const {realIndex, initialized, params, el} = swiper;
    const breakpoints = params.breakpoints;
    
    // Check if breakpoints are defined and update accordingly
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
    
    const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    
    // Get breakpoint parameters and handle changes
    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;

    // Handle grid changes and class updates
    if (wasMultiRow && !isMultiRow) {
        el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
        el.classList.add(`${params.containerModifierClass}grid`);
        if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") 
            el.classList.add(`${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
    }
    
    // Handle grab cursor changes
    if (wasGrabCursor && !isGrabCursor) swiper.unsetGrabCursor();
    else if (!wasGrabCursor && isGrabCursor) swiper.setGrabCursor();
    
    // Update module states like navigation, pagination, etc.
    [ "navigation", "pagination", "scrollbar" ].forEach(prop => {
        if (typeof breakpointParams[prop] === "undefined") return;
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
        if (wasModuleEnabled && !isModuleEnabled) swiper[prop].disable();
        if (!wasModuleEnabled && isModuleEnabled) swiper[prop].enable();
    });

    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    
    // Change direction if needed and update params
    if (directionChanged && initialized) swiper.changeDirection();
    utils_extend(swiper.params, breakpointParams);
    
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;

    // Update swiper's internal state based on the new params
    Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
    });

    // Enable or disable swiper based on the updated parameters
    if (wasEnabled && !isEnabled) swiper.disable();
    else if (!wasEnabled && isEnabled) swiper.enable();

    // Update current breakpoint and emit events
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    
    // Handle loop reinitialization if necessary
            if (initialized) if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) swiper.loopDestroy();
            swiper.emit("breakpoint", breakpointParams);
        }
        function getBreakpoint(breakpoints, base, containerEl) {
            if (base === void 0) base = "window";
            if (!breakpoints || base === "container" && !containerEl) return;
            let breakpoint = false;
            const window = ssr_window_esm_getWindow();
            const currentHeight = base === "window" ? window.innerHeight : containerEl.clientHeight;
            const points = Object.keys(breakpoints).map((point => {
                if (typeof point === "string" && point.indexOf("@") === 0) {
                    const minRatio = parseFloat(point.substr(1));
                    const value = currentHeight * minRatio;
                    return {
                        value,
                        point
                    };
                }
                return {
                    value: point,
                    point
                };
            }));
            points.sort(((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10)));
            for (let i = 0; i < points.length; i += 1) {
                const {point, value} = points[i];
                if (base === "window") {
                    if (window.matchMedia(`(min-width: ${value}px)`).matches) breakpoint = point;
                } else if (value <= containerEl.clientWidth) breakpoint = point;
            }
            return breakpoint || "max";
        }
        var breakpoints = {
            setBreakpoint,
            getBreakpoint
        };
        function prepareClasses(entries, prefix) {
            const resultClasses = [];
            entries.forEach((item => {
                if (typeof item === "object") Object.keys(item).forEach((classNames => {
                    if (item[classNames]) resultClasses.push(prefix + classNames);
                })); else if (typeof item === "string") resultClasses.push(prefix + item);
            }));
            return resultClasses;
        }
        function addClasses() {
            const swiper = this;
            const {classNames, params, rtl, el, device} = swiper;
            const suffixes = prepareClasses([ "initialized", params.direction, {
                "free-mode": swiper.params.freeMode && params.freeMode.enabled
            }, {
                autoheight: params.autoHeight
            }, {
                rtl
            }, {
                grid: params.grid && params.grid.rows > 1
            }, {
                "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
            }, {
                android: device.android
            }, {
                ios: device.ios
            }, {
                "css-mode": params.cssMode
            }, {
                centered: params.cssMode && params.centeredSlides
            }, {
                "watch-progress": params.watchSlidesProgress
            } ], params.containerModifierClass);
            classNames.push(...suffixes);
            el.classList.add(...classNames);
            swiper.emitContainerClasses();
        }
        function swiper_core_removeClasses() {
            const swiper = this;
            const {el, classNames} = swiper;
            el.classList.remove(...classNames);
            swiper.emitContainerClasses();
        }
        var classes = {
            addClasses,
            removeClasses: swiper_core_removeClasses
        };
        function checkOverflow() {
            const swiper = this;
            const {isLocked: wasLocked, params} = swiper;
            const {slidesOffsetBefore} = params;
            if (slidesOffsetBefore) {
                const lastSlideIndex = swiper.slides.length - 1;
                const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
                swiper.isLocked = swiper.size > lastSlideRightEdge;
            } else swiper.isLocked = swiper.snapGrid.length === 1;
            if (params.allowSlideNext === true) swiper.allowSlideNext = !swiper.isLocked;
            if (params.allowSlidePrev === true) swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked && wasLocked !== swiper.isLocked) swiper.isEnd = false;
            if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? "lock" : "unlock");
        }
        var checkOverflow$1 = {
            checkOverflow
        };
        var defaults = {
            init: true,
            direction: "horizontal",
            oneWayMovement: false,
            swiperElementNodeName: "SWIPER-CONTAINER",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: false,
            updateOnWindowResize: true,
            resizeObserver: true,
            nested: false,
            createElements: false,
            eventsPrefix: "swiper",
            enabled: true,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: false,
            userAgent: null,
            url: null,
            edgeSwipeDetection: false,
            edgeSwipeThreshold: 20,
            autoHeight: false,
            setWrapperSize: false,
            virtualTranslate: false,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: true,
            centerInsufficientSlides: false,
            watchOverflow: true,
            roundLengths: false,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: true,
            shortSwipes: true,
            longSwipes: true,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: true,
            allowTouchMove: true,
            threshold: 5,
            touchMoveStopPropagation: false,
            touchStartPreventDefault: true,
            touchStartForcePreventDefault: false,
            touchReleaseOnEdges: false,
            uniqueNavElements: true,
            resistance: true,
            resistanceRatio: .85,
            watchSlidesProgress: false,
            grabCursor: false,
            preventClicks: true,
            preventClicksPropagation: true,
            slideToClickedSlide: false,
            loop: false,
            loopAddBlankSlides: true,
            loopAdditionalSlides: 0,
            loopPreventsSliding: true,
            rewind: false,
            allowSlidePrev: true,
            allowSlideNext: true,
            swipeHandler: null,
            noSwiping: true,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: true,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-blank",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideFullyVisibleClass: "swiper-slide-fully-visible",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            lazyPreloaderClass: "swiper-lazy-preloader",
            lazyPreloadPrevNext: 0,
            runCallbacksOnInit: true,
            _emitClasses: false
        };
        function moduleExtendParams(params, allModulesParams) {
            return function extendParams(obj) {
                if (obj === void 0) obj = {};
                const moduleParamName = Object.keys(obj)[0];
                const moduleParams = obj[moduleParamName];
                if (typeof moduleParams !== "object" || moduleParams === null) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (params[moduleParamName] === true) params[moduleParamName] = {
                    enabled: true
                };
                if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) params[moduleParamName].auto = true;
                if ([ "pagination", "scrollbar" ].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) params[moduleParamName].auto = true;
                if (!(moduleParamName in params && "enabled" in moduleParams)) {
                    utils_extend(allModulesParams, obj);
                    return;
                }
                if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) params[moduleParamName].enabled = true;
                if (!params[moduleParamName]) params[moduleParamName] = {
                    enabled: false
                };
                utils_extend(allModulesParams, obj);
            };
        }
        const prototypes = {
            eventsEmitter,
            update,
            translate,
            transition,
            slide,
            loop,
            grabCursor,
            events: events$1,
            breakpoints,
            checkOverflow: checkOverflow$1,
            classes
        };
        const extendedDefaults = {};

        // Create touch-based sliders for websites or applications
class swiper_core_Swiper {
    constructor() {
        let el;
        let params;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
        
        // Check if params is provided as a single object argument or as two separate arguments (el, params)
        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") params = args[0];
        else [el, params] = args;

        // Default params initialization if not provided
        if (!params) params = {};
        params = utils_extend({}, params);

        // Assigning element (el) to params if not provided
        if (el && !params.el) params.el = el;
        
        const document = ssr_window_esm_getDocument();
        
        // If multiple elements are selected by the same selector, create multiple Swipers
        if (params.el && typeof params.el === "string" && document.querySelectorAll(params.el).length > 1) {
            const swipers = [];
            document.querySelectorAll(params.el).forEach((containerEl => {
                const newParams = utils_extend({}, params, {
                    el: containerEl
                });
                swipers.push(new swiper_core_Swiper(newParams));
            }));
            return swipers;
        }

        const swiper = this;
        swiper.__swiper__ = true;
        
        // Initialize support, device, and browser information
        swiper.support = getSupport();
        swiper.device = getDevice({ userAgent: params.userAgent });
        swiper.browser = getBrowser();
        
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        
        // Merge modules provided in params with the default ones
        swiper.modules = [...swiper.__modules__];
        if (params.modules && Array.isArray(params.modules)) swiper.modules.push(...params.modules);

        const allModulesParams = {};
        
        // Initialize all modules with the given params
        swiper.modules.forEach((mod => {
            mod({
                params,
                swiper,
                extendParams: moduleExtendParams(params, allModulesParams),
                on: swiper.on.bind(swiper),
                once: swiper.once.bind(swiper),
                off: swiper.off.bind(swiper),
                emit: swiper.emit.bind(swiper)
            });
        }));
        
        // Extend default parameters with the ones from the modules and user input
        const swiperParams = utils_extend({}, defaults, allModulesParams);
        swiper.params = utils_extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = utils_extend({}, swiper.params);
        swiper.passedParams = utils_extend({}, params);

        // Set up event listeners for initialization if any
        if (swiper.params && swiper.params.on) Object.keys(swiper.params.on).forEach((eventName => {
            swiper.on(eventName, swiper.params.on[eventName]);
        }));
        if (swiper.params && swiper.params.onAny) swiper.onAny(swiper.params.onAny);

        // Set up the swiper's state and properties
        Object.assign(swiper, {
            enabled: swiper.params.enabled,
            el,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return swiper.params.direction === "horizontal";
            },
            isVertical() {
                return swiper.params.direction === "vertical";
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: true,
            isEnd: false,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: false,
            cssOverflowAdjustment() {
                return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
            },
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: swiper.params.focusableElements,
                lastClickTime: 0,
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                pointerId: null,
                touchId: null
            },
            allowClick: true,
            allowTouchMove: swiper.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        });

        // Emit the '_swiper' event
        swiper.emit("_swiper");
        
        // Initialize swiper if the init param is true
        if (swiper.params.init) swiper.init();

        return swiper;
    }

    // Method to get direction-specific label for layout properties
    getDirectionLabel(property) {
        if (this.isHorizontal()) return property;
        return {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[property];
    }

    // Method to get the index of a slide
    getSlideIndex(slideEl) {
        const {slidesEl, params} = this;
        const slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        const firstSlideIndex = utils_elementIndex(slides[0]);
        return utils_elementIndex(slideEl) - firstSlideIndex;
    }

    // Recalculate slides when needed
    recalcSlides() {
        const swiper = this;
        const {slidesEl, params} = swiper;
        swiper.slides = utils_elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }

    // Enable swiper
    enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;
        if (swiper.params.grabCursor) swiper.setGrabCursor();
        swiper.emit("enable");
    }

    // Disable swiper
    disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;
        if (swiper.params.grabCursor) swiper.unsetGrabCursor();
        swiper.emit("disable");
    }

    // Set the progress of the swiper
    setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
    }

    // Emit the container classes event
    emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(" ").filter((className => className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0));
        swiper.emit("_containerClasses", cls.join(" "));
    }

    // Get the class names of a slide
    getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return "";
        return slideEl.className.split(" ").filter((className => className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0)).join(" ");
    }

    // Emit the slide classes event
    emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.forEach((slideEl => {
            const classNames = swiper.getSlideClasses(slideEl);
            updates.push({
                slideEl,
                classNames
            });
            swiper.emit("_slideClass", slideEl, classNames);
        }));
        swiper.emit("_slideClasses", updates);
    }

    // Get the number of slides per view dynamically based on current settings
    slidesPerViewDynamic(view, exact) {
        if (view === void 0) view = "current";
        if (exact === void 0) exact = false;
        const swiper = this;
        const {params, slides, slidesGrid, slidesSizesGrid, size: swiperSize, activeIndex} = swiper;
        let spv = 1;
        
        // If the slidesPerView is a fixed number, return it directly
        if (typeof params.slidesPerView === "number") return params.slidesPerView;

        // Logic to calculate dynamic slides per view based on centeredSlides setting
        if (params.centeredSlides) {
            let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
            let breakLoop;
            for (let i = activeIndex + 1; i < slides.length; i += 1) if (slides[i] && !breakLoop) {
                slideSize += Math.ceil(slides[i].swiperSlideSize);
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
            for (let i = activeIndex - 1; i >= 0; i -= 1) if (slides[i] && !breakLoop) {
                slideSize += slides[i].swiperSlideSize;
                spv += 1;
                if (slideSize > swiperSize) breakLoop = true;
            }
        } else if (view === "current") {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
                const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                if (slideInView) spv += 1;
            }
        } else {
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
                const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                if (slideInView) spv += 1;
            }
        }
        return spv;
    }

    // Update the swiper state and slides
    update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const {snapGrid, params} = swiper;

        // Handle breakpoints and lazy loading of images
        if (params.breakpoints) swiper.setBreakpoint();
        [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl => {
            if (imageEl.complete) processLazyPreloader(swiper, imageEl);
        }));
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        // Function to set swiper translation (scrolling)
                function setTranslate() {
                    const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                let translated;
                if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                    setTranslate();
                    if (params.autoHeight) swiper.updateAutoHeight();
                } else {
                    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                        const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                        translated = swiper.slideTo(slides.length - 1, 0, false, true);
                    } else translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                    if (!translated) setTranslate();
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) swiper.checkOverflow();
                swiper.emit("update");
            }
            changeDirection(newDirection, needUpdate) {
                if (needUpdate === void 0) needUpdate = true;
                const swiper = this;
                const currentDirection = swiper.params.direction;
                if (!newDirection) newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
                if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") return swiper;
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
                swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
                swiper.emitContainerClasses();
                swiper.params.direction = newDirection;
                swiper.slides.forEach((slideEl => {
                    if (newDirection === "vertical") slideEl.style.width = ""; else slideEl.style.height = "";
                }));
                swiper.emit("changeDirection");
                if (needUpdate) swiper.update();
                return swiper;
            }
            changeLanguageDirection(direction) {
                const swiper = this;
                if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr") return;
                swiper.rtl = direction === "rtl";
                swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
                if (swiper.rtl) {
                    swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "rtl";
                } else {
                    swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                    swiper.el.dir = "ltr";
                }
                swiper.update();
            }
            mount(element) {
                const swiper = this;
                if (swiper.mounted) return true;
                let el = element || swiper.params.el;
                if (typeof el === "string") el = document.querySelector(el);
                if (!el) return false;
                el.swiper = swiper;
                if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) swiper.isElement = true;
                const getWrapperSelector = () => `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
                const getWrapper = () => {
                    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                        const res = el.shadowRoot.querySelector(getWrapperSelector());
                        return res;
                    }
                    return utils_elementChildren(el, getWrapperSelector())[0];
                };
                let wrapperEl = getWrapper();
                if (!wrapperEl && swiper.params.createElements) {
                    wrapperEl = utils_createElement("div", swiper.params.wrapperClass);
                    el.append(wrapperEl);
                    utils_elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl => {
                        wrapperEl.append(slideEl);
                    }));
                }
                Object.assign(swiper, {
                    el,
                    wrapperEl,
                    slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                    hostEl: swiper.isElement ? el.parentNode.host : el,
                    mounted: true,
                    rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
                    rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
                    wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
                });
                return true;
            }
            init(el) {
                const swiper = this;
                if (swiper.initialized) return swiper;
                const mounted = swiper.mount(el);
                if (mounted === false) return swiper;
                swiper.emit("beforeInit");
                if (swiper.params.breakpoints) swiper.setBreakpoint();
                swiper.addClasses();
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) swiper.checkOverflow();
                if (swiper.params.grabCursor && swiper.enabled) swiper.setGrabCursor();
                if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true); else swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
                if (swiper.params.loop) swiper.loopCreate();
                swiper.attachEvents();
                const lazyElements = [ ...swiper.el.querySelectorAll('[loading="lazy"]') ];
                if (swiper.isElement) lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
                lazyElements.forEach((imageEl => {
                    if (imageEl.complete) processLazyPreloader(swiper, imageEl); else imageEl.addEventListener("load", (e => {
                        processLazyPreloader(swiper, e.target);
                    }));
                }));
                preload(swiper);
                swiper.initialized = true;
                preload(swiper);
                swiper.emit("init");
                swiper.emit("afterInit");
                return swiper;
            }
            destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                const swiper = this;
                const {params, el, wrapperEl, slides} = swiper;
                if (typeof swiper.params === "undefined" || swiper.destroyed) return null;
                swiper.emit("beforeDestroy");
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) swiper.loopDestroy();
                if (cleanStyles) {
                    swiper.removeClasses();
                    el.removeAttribute("style");
                    wrapperEl.removeAttribute("style");
                    if (slides && slides.length) slides.forEach((slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute("style");
                        slideEl.removeAttribute("data-swiper-slide-index");
                    }));
                }
                swiper.emit("destroy");
                Object.keys(swiper.eventsListeners).forEach((eventName => {
                    swiper.off(eventName);
                }));
                if (deleteInstance !== false) {
                    swiper.el.swiper = null;
                    deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            }
            static extendDefaults(newDefaults) {
                utils_extend(extendedDefaults, newDefaults);
            }
            static get extendedDefaults() {
                return extendedDefaults;
            }
            static get defaults() {
                return defaults;
            }
            static installModule(mod) {
                if (!swiper_core_Swiper.prototype.__modules__) swiper_core_Swiper.prototype.__modules__ = [];
                const modules = swiper_core_Swiper.prototype.__modules__;
                if (typeof mod === "function" && modules.indexOf(mod) < 0) modules.push(mod);
            }
            static use(module) {
                if (Array.isArray(module)) {
                    module.forEach((m => swiper_core_Swiper.installModule(m)));
                    return swiper_core_Swiper;
                }
                swiper_core_Swiper.installModule(module);
                return swiper_core_Swiper;
            }
        }
        Object.keys(prototypes).forEach((prototypeGroup => {
            Object.keys(prototypes[prototypeGroup]).forEach((protoMethod => {
                swiper_core_Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }));
        }));
        swiper_core_Swiper.use([ Resize, Observer ]);
// This function creates elements if they are not already defined in the swiper instance.
function create_element_if_not_defined_createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    // If createElements option is enabled, we check each property
    if (swiper.params.createElements) Object.keys(checkProps).forEach((key => {
        // If the parameter is not defined and auto is true, create the element
        if (!params[key] && params.auto === true) {
            let element = utils_elementChildren(swiper.el, `.${checkProps[key]}`)[0];
            // If the element does not exist, create and append it to the swiper container
            if (!element) {
                element = utils_createElement("div", checkProps[key]);
                element.className = checkProps[key];
                swiper.el.append(element);
            }
            // Assign the created element to params and originalParams
            params[key] = element;
            originalParams[key] = element;
        }
    }));
    return params;
}

// Navigation module for controlling navigation buttons and behavior.
function Navigation(_ref) {
    let {swiper, extendParams, on, emit} = _ref;
    // Default navigation parameters
    extendParams({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: false,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
        }
    });
    swiper.navigation = {
        nextEl: null,
        prevEl: null
    };
    
    // Helper function to get the navigation elements
    function getEl(el) {
        let res;
        if (el && typeof el === "string" && swiper.isElement) {
            res = swiper.el.querySelector(el);
            if (res) return res;
        }
        if (el) {
            if (typeof el === "string") res = [...document.querySelectorAll(el)];
            if (swiper.params.uniqueNavElements && typeof el === "string" && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) res = swiper.el.querySelector(el); 
            else if (res && res.length === 1) res = res[0];
        }
        return res;
    }
    
    // Toggle navigation elements (enable or disable)
    function toggleEl(el, disabled) {
        const params = swiper.params.navigation;
        el = utils_makeElementsArray(el);
        el.forEach((subEl => {
            if (subEl) {
                // Toggle the disabled class and the button's disabled state
                subEl.classList[disabled ? "add" : "remove"](...params.disabledClass.split(" "));
                if (subEl.tagName === "BUTTON") subEl.disabled = disabled;
                // If swiper is locked, add the lock class
                if (swiper.params.watchOverflow && swiper.enabled) subEl.classList[swiper.isLocked ? "add" : "remove"](params.lockClass);
            }
        }));
    }

    // Update the navigation button state (next/prev)
    function update() {
        const {nextEl, prevEl} = swiper.navigation;
        if (swiper.params.loop) {
            toggleEl(prevEl, false);
            toggleEl(nextEl, false);
            return;
        }
        toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
    }

    // Event handler for previous button click
    function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit("navigationPrev");
    }

    // Event handler for next button click
    function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit("navigationNext");
    }

    // Initialize navigation buttons
    function init() {
        const params = swiper.params.navigation;
        // Create elements if not defined for next and prev buttons
        swiper.params.navigation = create_element_if_not_defined_createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
            nextEl: "swiper-button-next",
            prevEl: "swiper-button-prev"
        });
        if (!(params.nextEl || params.prevEl)) return;
        let nextEl = getEl(params.nextEl);
        let prevEl = getEl(params.prevEl);
        Object.assign(swiper.navigation, {
            nextEl,
            prevEl
        });
        nextEl = utils_makeElementsArray(nextEl);
        prevEl = utils_makeElementsArray(prevEl);
        const initButton = (el, dir) => {
            if (el) el.addEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            if (!swiper.enabled && el) el.classList.add(...params.lockClass.split(" "));
        };
        nextEl.forEach((el => initButton(el, "next")));
        prevEl.forEach((el => initButton(el, "prev")));
    }

    // Destroy navigation buttons and event listeners
    function destroy() {
        let {nextEl, prevEl} = swiper.navigation;
        nextEl = utils_makeElementsArray(nextEl);
        prevEl = utils_makeElementsArray(prevEl);
        const destroyButton = (el, dir) => {
            el.removeEventListener("click", dir === "next" ? onNextClick : onPrevClick);
            el.classList.remove(...swiper.params.navigation.disabledClass.split(" "));
        };
        nextEl.forEach((el => destroyButton(el, "next")));
        prevEl.forEach((el => destroyButton(el, "prev")));
    }

    // Event listeners for different swiper events
    on("init", (() => {
        if (swiper.params.navigation.enabled === false) disable(); else {
            init();
            update();
        }
    }));
    on("toEdge fromEdge lock unlock", (() => {
        update();
    }));
    on("destroy", (() => {
        destroy();
    }));
    on("enable disable", (() => {
        let {nextEl, prevEl} = swiper.navigation;
        nextEl = utils_makeElementsArray(nextEl);
        prevEl = utils_makeElementsArray(prevEl);
        if (swiper.enabled) {
            update();
            return;
        }
        [...nextEl, ...prevEl].filter((el => !!el)).forEach((el => el.classList.add(swiper.params.navigation.lockClass)));
    }));
    on("click", ((_s, e) => {
        let {nextEl, prevEl} = swiper.navigation;
        nextEl = utils_makeElementsArray(nextEl);
        prevEl = utils_makeElementsArray(prevEl);
        const targetEl = e.target;
        // Hide or show navigation buttons when clicked
        if (swiper.params.navigation.hideOnClick && !prevEl.includes(targetEl) && !nextEl.includes(targetEl)) {
            if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
            let isHidden;
            if (nextEl.length) isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass); else if (prevEl.length) isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
            if (isHidden === true) emit("navigationShow"); else emit("navigationHide");
            [...nextEl, ...prevEl].filter((el => !!el)).forEach((el => el.classList.toggle(swiper.params.navigation.hiddenClass)));
        }
    }));

    // Methods to enable and disable navigation buttons
    const enable = () => {
        swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(" "));
        init();
        update();
    };

    const disable = () => {
        swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(" "));
        destroy();
    };

    // Expose methods
    Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
    });
}

// Autoplay module for automatic slide transitions.
function Autoplay(_ref) {
    let {swiper, extendParams, on, emit, params} = _ref;
    swiper.autoplay = {
        running: false,
        paused: false,
        timeLeft: 0
    };
    // Default autoplay parameters
    extendParams({
        autoplay: {
            enabled: false,
            delay: 3e3,
            waitForTransition: true,
            disableOnInteraction: false,
            stopOnLastSlide: false,
            reverseDirection: false,
            pauseOnMouseEnter: false
        }
    });
    let timeout;
    let raf;
    let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3e3;
    let autoplayTimeLeft;
    let autoplayStartTime = (new Date).getTime();
    let wasPaused;
    let isTouched;
    let pausedByTouch;
    let touchStartTimeout;
    let slideChanged;
    let pausedByInteraction;
    let pausedByPointerEnter;
    
    // Function to handle transition end
    function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
        if (e.target !== swiper.wrapperEl) return;
        swiper.wrapperEl.removeEventListener("transitionend", onTransitionEnd);
        if (pausedByPointerEnter) return;
        resume();
    }

    // Calculate the time left for autoplay
    const calcTimeLeft = () => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        if (swiper.autoplay.paused) wasPaused = true; else if (wasPaused) {
            autoplayDelayCurrent = autoplayTimeLeft;
            wasPaused = false;
        }
        const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - (new Date).getTime();
        swiper.autoplay.timeLeft = timeLeft;
        emit("autoplayTimeLeft", timeLeft, timeLeft / autoplayDelayTotal);
        raf = requestAnimationFrame((() => {
            calcTimeLeft();
        }));
    };

    // Get slide delay (custom delay per slide)
    const getSlideDelay = () => {
        let activeSlideEl;
        if (swiper.virtual && swiper.params.virtual.enabled) activeSlideEl = swiper.slides.filter((slideEl => slideEl.classList.contains("swiper-slide-active")))[0]; else activeSlideEl = swiper.slides[swiper.activeIndex];
        if (!activeSlideEl) return;
        const currentSlideDelay = parseInt(activeSlideEl.getAttribute("data-swiper-autoplay"), 10);
        return currentSlideDelay;
    };

    // Run the autoplay sequence
    const run = delayForce => {
        if (swiper.destroyed || !swiper.autoplay.running) return;
        cancelAnimationFrame(raf);
        calcTimeLeft();
        let delay = typeof delayForce === "undefined" ? swiper.params.autoplay.delay : delayForce;
        autoplayDelayTotal = swiper.params.autoplay.delay;
        autoplayDelayCurrent = swiper.params.autoplay.delay;
        const currentSlideDelay = getSlideDelay();
        if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === "undefined") {
            delay = currentSlideDelay;
            autoplayDelayTotal = currentSlideDelay;
            autoplayDelayCurrent = currentSlideDelay;
        }
        autoplayTimeLeft = delay;
        const speed = swiper.params.speed;
        const proceed = () => {
            if (!swiper || swiper.destroyed) return;
            if (swiper.params.autoplay.reverseDirection) {
                if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                    swiper.slidePrev(speed, true, true);
                    emit("autoplay");
                } else if (!swiper.params.autoplay.stopOnLastSlide) {
                    swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                    emit("autoplay");
                }
            } else if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                swiper.slideNext(speed, true, true);
                emit("autoplay");
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
                swiper.slideTo(0, speed, true, true);
                emit("autoplay");
            }
            if (swiper.params.cssMode) {
                autoplayStartTime = (new Date).getTime();
                requestAnimationFrame((() => {
                    run();
                }));
            }
        };
        if (delay > 0) {
            clearTimeout(timeout);
            timeout = setTimeout((() => {
                proceed();
            }), delay);
        } else requestAnimationFrame((() => {
            proceed();
        }));
        return delay;
    };

    // Start autoplay
    const start = () => {
        autoplayStartTime = (new Date).getTime();
        swiper.autoplay.running = true;
        run();
        emit("autoplayStart");
    };

    // Stop autoplay
            const stop = () => {
                swiper.autoplay.running = false;
                clearTimeout(timeout);
                cancelAnimationFrame(raf);
                emit("autoplayStop");
            };
            const pause = (internal, reset) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                clearTimeout(timeout);
                if (!internal) pausedByInteraction = true;
                const proceed = () => {
                    emit("autoplayPause");
                    if (swiper.params.autoplay.waitForTransition) swiper.wrapperEl.addEventListener("transitionend", onTransitionEnd); else resume();
                };
                swiper.autoplay.paused = true;
                if (reset) {
                    if (slideChanged) autoplayTimeLeft = swiper.params.autoplay.delay;
                    slideChanged = false;
                    proceed();
                    return;
                }
                const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
                autoplayTimeLeft = delay - ((new Date).getTime() - autoplayStartTime);
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
                if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
                proceed();
            };
            const resume = () => {
                if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
                autoplayStartTime = (new Date).getTime();
                if (pausedByInteraction) {
                    pausedByInteraction = false;
                    run(autoplayTimeLeft);
                } else run();
                swiper.autoplay.paused = false;
                emit("autoplayResume");
            };
            const onVisibilityChange = () => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                const document = ssr_window_esm_getDocument();
                if (document.visibilityState === "hidden") {
                    pausedByInteraction = true;
                    pause(true);
                }
                if (document.visibilityState === "visible") resume();
            };
            const onPointerEnter = e => {
                if (e.pointerType !== "mouse") return;
                pausedByInteraction = true;
                pausedByPointerEnter = true;
                if (swiper.animating || swiper.autoplay.paused) return;
                pause(true);
            };
            const onPointerLeave = e => {
                if (e.pointerType !== "mouse") return;
                pausedByPointerEnter = false;
                if (swiper.autoplay.paused) resume();
            };
            const attachMouseEvents = () => {
                if (swiper.params.autoplay.pauseOnMouseEnter) {
                    swiper.el.addEventListener("pointerenter", onPointerEnter);
                    swiper.el.addEventListener("pointerleave", onPointerLeave);
                }
            };
            const detachMouseEvents = () => {
                swiper.el.removeEventListener("pointerenter", onPointerEnter);
                swiper.el.removeEventListener("pointerleave", onPointerLeave);
            };
            const attachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.addEventListener("visibilitychange", onVisibilityChange);
            };
            const detachDocumentEvents = () => {
                const document = ssr_window_esm_getDocument();
                document.removeEventListener("visibilitychange", onVisibilityChange);
            };
            on("init", (() => {
                if (swiper.params.autoplay.enabled) {
                    attachMouseEvents();
                    attachDocumentEvents();
                    start();
                }
            }));
            on("destroy", (() => {
                detachMouseEvents();
                detachDocumentEvents();
                if (swiper.autoplay.running) stop();
            }));
            on("_freeModeStaticRelease", (() => {
                if (pausedByTouch || pausedByInteraction) resume();
            }));
            on("_freeModeNoMomentumRelease", (() => {
                if (!swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("beforeTransitionStart", ((_s, speed, internal) => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (internal || !swiper.params.autoplay.disableOnInteraction) pause(true, true); else stop();
            }));
            on("sliderFirstMove", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                if (swiper.params.autoplay.disableOnInteraction) {
                    stop();
                    return;
                }
                isTouched = true;
                pausedByTouch = false;
                pausedByInteraction = false;
                touchStartTimeout = setTimeout((() => {
                    pausedByInteraction = true;
                    pausedByTouch = true;
                    pause(true);
                }), 200);
            }));
            on("touchEnd", (() => {
                if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
                clearTimeout(touchStartTimeout);
                clearTimeout(timeout);
                if (swiper.params.autoplay.disableOnInteraction) {
                    pausedByTouch = false;
                    isTouched = false;
                    return;
                }
                if (pausedByTouch && swiper.params.cssMode) resume();
                pausedByTouch = false;
                isTouched = false;
            }));
            on("slideChange", (() => {
                if (swiper.destroyed || !swiper.autoplay.running) return;
                slideChanged = true;
            }));
            Object.assign(swiper.autoplay, {
                start,
                stop,
                pause,
                resume
            });
        }
    // Function to initialize sliders with configurations
function initSliders() {
    // Initialize text slider if the element exists
    if (document.querySelector(".feedback__slider--text")) new swiper_core_Swiper(".feedback__slider--text", {
        modules: [Navigation, Autoplay], // Enable navigation and autoplay modules
        observer: true, // Observe changes in the DOM
        observeParents: true, // Observe changes in parent elements as well
        slidesPerView: 2, // Display 2 slides per view
        spaceBetween: 30, // Space between slides
        autoHeight: true, // Adjust height of the slider automatically
        speed: 800, // Transition speed between slides
        autoplay: {
            delay: 3000, // Delay before autoplay starts again
            disableOnInteraction: true // Disable autoplay on user interaction
        },
        navigation: {
            prevEl: ".feedback__slider--text .swiper-button-prev", // Previous button
            nextEl: ".feedback__slider--text .swiper-button-next" // Next button
        },
        breakpoints: {
            // Breakpoint for mobile screens (320px and up)
            320: {
                spaceBetween: 10,
                slidesPerView: 1 // Display 1 slide per view
            },
            // Breakpoint for small tablets (600px and up)
            600: {
                spaceBetween: 20,
                slidesPerView: 2 // Display 2 slides per view
            },
            // Breakpoint for tablets (768px and up)
            768: {
                spaceBetween: 30 // Increase space between slides
            },
            992: {},
            1268: {}
        },
        on: {}
    });
    // Initialize video slider if the element exists
    if (document.querySelector(".feedback__slider--video")) new swiper_core_Swiper(".feedback__slider--video", {
        modules: [Navigation, Autoplay], // Enable navigation and autoplay modules
        observer: true, // Observe changes in the DOM
        observeParents: true, // Observe changes in parent elements as well
        slidesPerView: 2, // Display 2 slides per view
        spaceBetween: 30, // Space between slides
        autoHeight: true, // Adjust height of the slider automatically
        speed: 800, // Transition speed between slides
        navigation: {
            prevEl: ".feedback__slider--video .swiper-button-prev", // Previous button
            nextEl: ".feedback__slider--video .swiper-button-next" // Next button
        },
        breakpoints: {
            // Breakpoint for mobile screens (320px and up)
            320: {
                spaceBetween: 10,
                slidesPerView: 1 // Display 1 slide per view
            },
            // Breakpoint for small tablets (600px and up)
            600: {
                spaceBetween: 20,
                slidesPerView: 2 // Display 2 slides per view
            },
            // Breakpoint for tablets (768px and up)
            768: {
                spaceBetween: 30 // Increase space between slides
            },
            992: {},
            1268: {}
        },
        on: {}
    });
}

// Event listener to initialize sliders on page load
window.addEventListener("load", (function(e) {
    initSliders(); // Initialize sliders once the page is loaded
}));

// Lazy loading initialization
var lazyload_min = __webpack_require__(144);
new lazyload_min({
    elements_selector: "[data-src],[data-srcset]", // Lazy load elements with these attributes
    class_loaded: "_lazy-loaded", // Add this class when element is loaded
    use_native: true // Use native lazy loading if available
});

// ScrollWatcher class to manage elements appearing on scroll
class ScrollWatcher {
    constructor(props) {
        let defaultConfig = {
            logging: true // Enable logging of scroll events
        };
        this.config = Object.assign(defaultConfig, props);
        this.observer; // Intersection Observer instance
        !document.documentElement.classList.contains("watcher") ? this.scrollWatcherRun() : null; // Initialize if not already done
    }

    // Update the scroll watcher (can be triggered manually)
    scrollWatcherUpdate() {
        this.scrollWatcherRun();
    }

    // Run the scroll watcher setup
    scrollWatcherRun() {
        document.documentElement.classList.add("watcher"); // Mark the document as being watched
        this.scrollWatcherConstructor(document.querySelectorAll("[data-watch]")); // Initialize observer on elements with data-watch attribute
    }

    // Set up the observer configuration
    scrollWatcherConstructor(items) {
        if (items.length) {
            this.scrollWatcherLogging(`Started watching ${items.length} items...`);
            let uniqParams = uniqArray(Array.from(items).map((function(item) {
                // Determine threshold for visibility
                if (item.dataset.watch === "navigator" && !item.dataset.watchThreshold) {
                    let valueOfThreshold;
                    if (item.clientHeight > 2) {
                        valueOfThreshold = window.innerHeight / 2 / (item.clientHeight - 1);
                        if (valueOfThreshold > 1) valueOfThreshold = 1;
                    } else valueOfThreshold = 1;
                    item.setAttribute("data-watch-threshold", valueOfThreshold.toFixed(2)); // Set threshold attribute
                }
                return `${item.dataset.watchRoot ? item.dataset.watchRoot : null}|${item.dataset.watchMargin ? item.dataset.watchMargin : "0px"}|${item.dataset.watchThreshold ? item.dataset.watchThreshold : 0}`;
            })));
            uniqParams.forEach((uniqParam => {
                let uniqParamArray = uniqParam.split("|");
                let paramsWatch = {
                    root: uniqParamArray[0],
                    margin: uniqParamArray[1],
                    threshold: uniqParamArray[2]
                };
                let groupItems = Array.from(items).filter((function(item) {
                    let watchRoot = item.dataset.watchRoot ? item.dataset.watchRoot : null;
                    let watchMargin = item.dataset.watchMargin ? item.dataset.watchMargin : "0px";
                    let watchThreshold = item.dataset.watchThreshold ? item.dataset.watchThreshold : 0;
                    if (String(watchRoot) === paramsWatch.root && String(watchMargin) === paramsWatch.margin && String(watchThreshold) === paramsWatch.threshold) return item;
                }));
                let configWatcher = this.getScrollWatcherConfig(paramsWatch);
                this.scrollWatcherInit(groupItems, configWatcher); // Initialize observer for grouped items
            }));
        } else this.scrollWatcherLogging("No items to watch.");
    }

    // Get the configuration for the intersection observer
    getScrollWatcherConfig(paramsWatch) {
        let configWatcher = {};
        if (document.querySelector(paramsWatch.root)) configWatcher.root = document.querySelector(paramsWatch.root); // Set root for observer
        else if (paramsWatch.root !== "null") this.scrollWatcherLogging(`Missing root element ${paramsWatch.root}`);
        configWatcher.rootMargin = paramsWatch.margin; // Set margin for root
        if (paramsWatch.margin.indexOf("px") < 0 && paramsWatch.margin.indexOf("%") < 0) {
            this.scrollWatcherLogging(`Invalid margin setting. Use PX or %`);
            return;
        }
        if (paramsWatch.threshold === "prx") {
            paramsWatch.threshold = [];
            for (let i = 0; i <= 1; i += .005) paramsWatch.threshold.push(i); // Generate threshold values from 0 to 1
        } else paramsWatch.threshold = paramsWatch.threshold.split(",");
        configWatcher.threshold = paramsWatch.threshold; // Set threshold for observer
        return configWatcher;
    }

    // Create the intersection observer
    scrollWatcherCreate(configWatcher) {
        this.observer = new IntersectionObserver(((entries, observer) => {
            entries.forEach((entry => {
                this.scrollWatcherCallback(entry, observer); // Handle callback on visibility change
            }));
        }), configWatcher);
    }

    // Initialize the observer with items and configuration
    scrollWatcherInit(items, configWatcher) {
        this.scrollWatcherCreate(configWatcher);
        items.forEach((item => this.observer.observe(item))); // Observe each item
    }

    // Handle intersection change (visibility change)
    scrollWatcherIntersecting(entry, targetElement) {
        if (entry.isIntersecting) {
            !targetElement.classList.contains("_watcher-view") ? targetElement.classList.add("_watcher-view") : null; // Add class if element is in view
            this.scrollWatcherLogging(`Element ${targetElement.classList} is in view.`);
        } else {
            targetElement.classList.contains("_watcher-view") ? targetElement.classList.remove("_watcher-view") : null; // Remove class if element is out of view
            this.scrollWatcherLogging(`Element ${targetElement.classList} is out of view.`);
        }
    }

    // Stop observing an element
    scrollWatcherOff(targetElement, observer) {
        observer.unobserve(targetElement);
        this.scrollWatcherLogging(`Stopped watching ${targetElement.classList}`);
    }

    // Log messages if logging is enabled
    scrollWatcherLogging(message) {
        this.config.logging ? FLS(`[Watcher]: ${message}`) : null;
    }

    // Callback function triggered by intersection observer
    scrollWatcherCallback(entry, observer) {
        const targetElement = entry.target;
        this.scrollWatcherIntersecting(entry, targetElement);
        targetElement.hasAttribute("data-watch-once") && entry.isIntersecting ? this.scrollWatcherOff(targetElement, observer) : null;
        document.dispatchEvent(new CustomEvent("watcherCallback", {
            detail: {
                entry
            }
        }));
    }
}

// Initialize ScrollWatcher
flsModules.watcher = new ScrollWatcher({});

// Page navigation function for smooth scrolling to sections
let addWindowScrollEvent = false;
function pageNavigation() {
    document.addEventListener("click", pageNavigationAction); // Listen for click events
    document.addEventListener("watcherCallback", pageNavigationAction); // Listen for watcher callback events
    function pageNavigationAction(e) {
        if (e.type === "click") {
            const targetElement = e.target;
            if (targetElement.closest("[data-goto]")) {
                const gotoLink = targetElement.closest("[data-goto]");
                const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : ""; // Get the target selector
                const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false; // Check if header should be excluded from offset
                const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500; // Scroll speed
                const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0; // Additional offset for positioning
                if (flsModules.fullpage) {
                    const fullpageSection = document.querySelector(`${gotoLinkSelector}`).closest("[data-fp-section]");
                    const fullpageSectionId = fullpageSection ? +fullpageSection.dataset.fpId : null;
                    if (fullpageSectionId !== null) {
                        flsModules.fullpage.switchingSection(fullpageSectionId); // Switch fullpage sections
                        document.documentElement.classList.contains("menu-open") ? menuClose() : null; // Close menu if it's open
                    }
                } else gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop); // Scroll to the target block
                e.preventDefault(); // Prevent default action
            }
        } else if (e.type === "watcherCallback" && e.detail) {
            const entry = e.detail.entry;
            const targetElement = entry.target;
            if (targetElement.dataset.watch === "navigator") {
                document.querySelector(`[data-goto]._navigator-active`);
                let navigatorCurrentItem;
                if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`);
                else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
                    const element = targetElement.classList[index];
                    if (document.querySelector(`[data-goto=".${element}"]`)) {
                        navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
                        break;
                    }
                }
                if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null;
                else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
            }
        }
    }
    if (getHash()) {
        let goToHash;
        if (document.querySelector(`#${getHash()}`)) goToHash = `#${getHash()}`;
        else if (document.querySelector(`.${getHash()}`)) goToHash = `.${getHash()}`;
        goToHash ? gotoBlock(goToHash, true, 500, 20) : null; // Scroll to the section if there's a hash in the URL
    }
}

// Function for digits counter animation
function digitsCounter() {
    function digitsCountersInit(digitsCountersItems) {
        let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]"); // Get all digits counters
        if (digitsCounters.length) digitsCounters.forEach((digitsCounter => {
            if (digitsCounter.hasAttribute("data-go")) return; // Skip if animation is already triggered
            digitsCounter.setAttribute("data-go", "");
            digitsCounter.dataset.digitsCounter = digitsCounter.innerHTML; // Store the target number
            digitsCounter.innerHTML = `0`; // Set initial value to 0
            digitsCountersAnimate(digitsCounter); // Start animation
        }));
    }

    // Function to animate digits counter
    function digitsCountersAnimate(digitsCounter) {
        let startTimestamp = null;
        const duration = parseFloat(digitsCounter.dataset.digitsCounterSpeed) ? parseFloat(digitsCounter.dataset.digitsCounterSpeed) : 1000; // Animation duration
        const startValue = parseFloat(digitsCounter.dataset.digitsCounter); // Target number
        const format = digitsCounter.dataset.digitsCounterFormat ? digitsCounter.dataset.digitsCounterFormat : " "; // Number format
        const startPosition = 0;
        const step = timestamp => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1); // Calculate animation progress
            const value = Math.floor(progress * (startPosition + startValue));
            digitsCounter.innerHTML = typeof digitsCounter.dataset.digitsCounterFormat !== "undefined" ? getDigFormat(value, format) : value; // Update number display
            if (progress < 1) window.requestAnimationFrame(step); // Continue animation until complete
            else digitsCounter.removeAttribute("data-go"); // Remove attribute when done
        };
        window.requestAnimationFrame(step); // Start animation
    }

    // Function to trigger digits counter action when observer callback is fired
    function digitsCounterAction(e) {
        const entry = e.detail.entry;
        const targetElement = entry.target;
        if (targetElement.querySelectorAll("[data-digits-counter]").length) digitsCountersInit(targetElement.querySelectorAll("[data-digits-counter]")); // Initialize counters in the target element
    }

    // Listen for watcher callback to trigger digits counter
    document.addEventListener("watcherCallback", digitsCounterAction);
}

// Window scroll event handler
setTimeout(() => {
    if (addWindowScrollEvent) {
        let windowScroll = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
            document.dispatchEvent(windowScroll);
        });
    }
}, 0);
// Adaptive layout function for dynamic elements that need to be updated on window resize event for example with media queries like font-size change based on window width and height and scroll position change 
class DynamicAdapt {
    // Constructor initializes the type of media query (max or min)
    constructor(type) {
        this.type = type;
    }

    // Initialize function to set up all necessary elements and breakpoints for the layout
    init() {
        this.оbjects = []; // Array to store objects with dynamic elements
        this.daClassname = "_dynamic_adapt_"; // Class to mark moved elements
        this.nodes = [ ...document.querySelectorAll("[data-da]") ]; // Select all nodes with data-da attribute
        this.nodes.forEach((node => {
            const data = node.dataset.da.trim(); // Get the data-da attribute value
            const dataArray = data.split(","); // Split the value into an array (destination, breakpoint, position)
            const оbject = {}; // Create an object to store data for each element
            оbject.element = node; // Element to be moved
            оbject.parent = node.parentNode; // Parent of the element
            оbject.destination = document.querySelector(`${dataArray[0].trim()}`); // Destination where the element should be moved
            оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767"; // Breakpoint for the layout change
            оbject.place = dataArray[2] ? dataArray[2].trim() : "last"; // Position (first, last, or specific index)
            оbject.index = this.indexInParent(оbject.parent, оbject.element); // Original index of the element
            this.оbjects.push(оbject); // Add object to the array
        }));
        this.arraySort(this.оbjects); // Sort objects based on breakpoint and position
        this.mediaQueries = this.оbjects.map((({breakpoint}) => `(${this.type}-width: ${breakpoint}px),${breakpoint}`)).filter(((item, index, self) => self.indexOf(item) === index)); // Create unique media queries based on breakpoints
        this.mediaQueries.forEach((media => {
            const mediaSplit = media.split(","); // Split media query into query and breakpoint
            const matchMedia = window.matchMedia(mediaSplit[0]); // Create matchMedia for the query
            const mediaBreakpoint = mediaSplit[1]; // Get the breakpoint
            const оbjectsFilter = this.оbjects.filter((({breakpoint}) => breakpoint === mediaBreakpoint)); // Filter objects based on the breakpoint
            matchMedia.addEventListener("change", (() => {
                this.mediaHandler(matchMedia, оbjectsFilter); // Handle media query change
            }));
            this.mediaHandler(matchMedia, оbjectsFilter); // Apply initial media query state
        }));
    }

    // Media handler function to move elements based on matchMedia status
    mediaHandler(matchMedia, оbjects) {
        if (matchMedia.matches) оbjects.forEach((оbject => {
            this.moveTo(оbject.place, оbject.element, оbject.destination); // Move element to the new position
        })); else оbjects.forEach((({parent, element, index}) => {
            if (element.classList.contains(this.daClassname)) this.moveBack(parent, element, index); // Move element back if it has the dynamic class
        }));
    }

    // Move element to a specified place in the destination container
    moveTo(place, element, destination) {
        element.classList.add(this.daClassname); // Add dynamic class to element
        if (place === "last" || place >= destination.children.length) {
            destination.append(element); // Append element at the end
            return;
        }
        if (place === "first") {
            destination.prepend(element); // Prepend element at the start
            return;
        }
        destination.children[place].before(element); // Insert element at the specific position
    }

    // Move element back to its original position
    moveBack(parent, element, index) {
        element.classList.remove(this.daClassname); // Remove dynamic class
        if (parent.children[index] !== void 0) parent.children[index].before(element); else parent.append(element); // Insert element back at original index
    }

    // Get the index of an element in its parent
    indexInParent(parent, element) {
        return [ ...parent.children ].indexOf(element); // Return the index of the element
    }

    // Sort objects based on breakpoint and place (first, last, etc.)
    arraySort(arr) {
        if (this.type === "min") arr.sort(((a, b) => {
            if (a.breakpoint === b.breakpoint) {
                if (a.place === b.place) return 0;
                if (a.place === "first" || b.place === "last") return -1;
                if (a.place === "last" || b.place === "first") return 1;
                return 0;
            }
            return a.breakpoint - b.breakpoint;
        })); else {
            arr.sort(((a, b) => {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return 1;
                    if (a.place === "last" || b.place === "first") return -1;
                    return 0;
                }
                return b.breakpoint - a.breakpoint;
            }));
            return;
        }
    }
}

const da = new DynamicAdapt("max"); // Initialize with max width type
da.init(); // Initialize dynamic adapt

// Video player functionality: Play and pause video based on user interaction
document.addEventListener("DOMContentLoaded", (function() {
    const playButtons = document.querySelectorAll(".play-button-wrapper");
    playButtons.forEach((function(playButton) {
        playButton.addEventListener("click", (function(event) {
            const videoContainer = playButton.closest(".video-container");
            const video = videoContainer.querySelector("video");
            if (video.paused) {
                pauseAllVideos(); // Pause all videos if another video is played
                playVideo(video, playButton); // Play the clicked video
            } else pauseVideo(video, playButton); // Pause the video if it's already playing
        }));
    }));

    // Function to pause all videos
    function pauseAllVideos() {
        const videos = document.querySelectorAll(".video-container video");
        videos.forEach((video => {
            if (!video.paused) {
                const playButton = video.closest(".video-container").querySelector(".play-button-wrapper");
                pauseVideo(video, playButton); // Pause the video
            }
        }));
    }

    // Play video and hide play button
    function playVideo(video, playButton) {
        playButton.style.display = "none";
        video.setAttribute("poster", "");
        video.play(); // Play the video
    }

    // Pause video and show play button
    function pauseVideo(video, playButton) {
        playButton.style.display = "flex";
        video.pause(); // Pause the video
        video.setAttribute("poster", "@img/video_bg.png");
    }

    const videos = document.querySelectorAll(".video-container video");
    videos.forEach((function(video) {
        video.addEventListener("click", (function() {
            const container = video.closest(".video-container");
            const playButton = container.querySelector(".play-button-wrapper");
            pauseVideo(video, playButton); // Pause video when clicked
        }));
    }));
}));

// Autoplay and loop a video in the hero animation section
document.addEventListener("DOMContentLoaded", (function() {
    if (document.querySelector(".hero__animation video")) {
        let animation = document.querySelector(".hero__animation video");
        animation.muted = true; // Mute the video
        animation.autoplay = true; // Enable autoplay
        animation.loop = true; // Enable looping
        animation.playsInline = true; // Enable inline playback
        animation.play(); // Play the video

        // Event listeners for video events
        animation.addEventListener("suspend", (() => {
            animation.play(); // Handle suspend event
            console.log("suspend event triggered");
        }));
        animation.addEventListener("play", (() => {
            console.log("play event triggered");
        }));
    }
}));

// Allow clicking to start video playback
if (document.querySelector(".hero__animation video")) document.body.addEventListener("click", (function(event) {
    const videoElement = document.querySelector(".hero__animation video");
    const isTouch = event.type === "touchstart"; // Check if it's a touch event
    if (!isTouch || isTouch && !videoElement.playing) if (!videoElement.playing) videoElement.play(); // Play video if not already playing
}));

// Add custom "playing" property to HTMLMediaElement to check if a video is playing
Object.defineProperty(HTMLMediaElement.prototype, "playing", {
    get: function() {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

// Running tape functionality with dragging and looping
document.addEventListener("DOMContentLoaded", (function() {
    const runningTapeContainer = document.querySelector(".running-tape-container");
    if (runningTapeContainer) {
        const runningTape = document.querySelector(".running-tape");
        let isDragging = false;
        let startPosition = null;
        let animationId;

        // Event listeners for drag functionality
        runningTapeContainer.addEventListener("mousedown", startDrag);
        runningTapeContainer.addEventListener("mouseup", endDrag);
        runningTapeContainer.addEventListener("mousemove", drag);
        runningTapeContainer.addEventListener("mouseleave", endDrag);
        runningTapeContainer.addEventListener("touchstart", startTouch, { passive: true });
        runningTapeContainer.addEventListener("touchmove", dragTouch, { passive: true });
        runningTapeContainer.addEventListener("touchend", endDrag);

        // Drag start
        function startDrag(event) {
            isDragging = true;
            startPosition = event.clientX;
            runningTapeContainer.style.cursor = "grabbing";
        }

        // Drag end
        function endDrag() {
            isDragging = false;
            startPosition = null;
            runningTapeContainer.style.cursor = "grab";
        }

        // Drag functionality for mouse
        function drag(event) {
            if (isDragging) {
                const movement = event.clientX - startPosition;
                runningTapeContainer.scrollLeft -= movement;
                startPosition = event.clientX;

                // Loop if scrolled beyond the limits
                if (runningTapeContainer.scrollLeft <= 0) runningTapeContainer.scrollLeft += runningTape.scrollWidth / 2;
                else if (runningTapeContainer.scrollLeft >= runningTape.scrollWidth / 2) runningTapeContainer.scrollLeft -= runningTape.scrollWidth / 2;
            }
        }

        // Drag functionality for touch
        function startTouch(event) {
            isDragging = true;
            startPosition = event.touches[0].clientX;
        }

        function dragTouch(event) {
            if (isDragging) {
                const movement = event.touches[0].clientX - startPosition;
                runningTapeContainer.scrollLeft -= movement;
                startPosition = event.touches[0].clientX;

                // Loop if scrolled beyond the limits
                if (runningTapeContainer.scrollLeft <= 0) runningTapeContainer.scrollLeft += runningTape.scrollWidth / 2;
                else if (runningTapeContainer.scrollLeft >= runningTape.scrollWidth / 2) runningTapeContainer.scrollLeft -= runningTape.scrollWidth / 2;
            }
        }

        // Function to loop scroll the tape container
        function loopScroll() {
            if (runningTapeContainer.scrollLeft >= runningTape.scrollWidth / 2) runningTapeContainer.scrollLeft -= runningTape.scrollWidth / 2;
            animationId = requestAnimationFrame(loopScroll);
        }

        loopScroll(); // Start loop scrolling

        // Pause animation when mouse enters or leaves the container
        runningTapeContainer.addEventListener("mouseenter", (function() {
            cancelAnimationFrame(animationId);
        }));
        runningTapeContainer.addEventListener("mouseleave", (function() {
            loopScroll();
        }));

        // Pause/Resume animation when mouse clicks or touches the container
        runningTapeContainer.addEventListener("mousedown", (function() {
            runningTape.querySelectorAll(".running-tape__line").forEach((function(line) {
                line.style.animationPlayState = "paused";
            }));
        }));
        runningTapeContainer.addEventListener("mouseup", (function() {
            runningTape.querySelectorAll(".running-tape__line").forEach((function(line) {
                line.style.animationPlayState = "running";
            }));
        }));
        runningTapeContainer.addEventListener("touchstart", (function() {
            runningTape.querySelectorAll(".running-tape__line").forEach((function(line) {
                line.style.animationPlayState = "paused";
            }));
        }));
        runningTapeContainer.addEventListener("touchend", (function() {
            runningTape.querySelectorAll(".running-tape__line").forEach((function(line) {
                line.style.animationPlayState = "running";
            }));
        }));
        runningTapeContainer.addEventListener("mousedown", (function(event) {
            event.preventDefault(); // Prevent default mousedown action
        }));
    }
}));

        window["FLS"] = false;
        menuInit();
        spollers();
        tabs();
        document.addEventListener("DOMContentLoaded", (function() {
            showMore();
        }));
        formFieldsInit({
            viewPass: false,
            autoHeight: false
        });
        formSubmit();
        pageNavigation();
        digitsCounter();
    })();
})();
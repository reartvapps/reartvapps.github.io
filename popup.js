/*! For license information please see popup.js.LICENSE.txt */
( () => {
    "use strict";
    var n, e = {
        7347: (n, e, t) => {
            t.d(e, {
                Z: () => s
            });
            var o = t(8081)
              , i = t.n(o)
              , r = t(3645)
              , a = t.n(r)()(i());
            a.push([n.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),
            a.push([n.id, '/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container{\n  width: 100%;\n}\n@media (min-width: 640px){\n\n  .container{\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px){\n\n  .container{\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px){\n\n  .container{\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px){\n\n  .container{\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px){\n\n  .container{\n    max-width: 1536px;\n  }\n}\n.visible{\n  visibility: visible;\n}\n.fixed{\n  position: fixed;\n}\n.absolute{\n  position: absolute;\n}\n.relative{\n  position: relative;\n}\n.bottom-\\[190px\\]{\n  bottom: 190px;\n}\n.right-\\[40px\\]{\n  right: 40px;\n}\n.z-50{\n  z-index: 50;\n}\n.block{\n  display: block;\n}\n.inline-block{\n  display: inline-block;\n}\n.flex{\n  display: flex;\n}\n.table{\n  display: table;\n}\n.hidden{\n  display: none;\n}\n.h-\\[32px\\]{\n  height: 32px;\n}\n.h-\\[45px\\]{\n  height: 45px;\n}\n.w-\\[55px\\]{\n  width: 55px;\n}\n.w-\\[142px\\]{\n  width: 142px;\n}\n.w-full{\n  width: 100%;\n}\n.w-\\[270px\\]{\n  width: 270px;\n}\n.flex-shrink{\n  flex-shrink: 1;\n}\n.border-collapse{\n  border-collapse: collapse;\n}\n.transform{\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer{\n  cursor: pointer;\n}\n.cursor-not-allowed{\n  cursor: not-allowed;\n}\n.resize{\n  resize: both;\n}\n.items-center{\n  align-items: center;\n}\n.justify-end{\n  justify-content: flex-end;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-between{\n  justify-content: space-between;\n}\n.gap-\\[8px\\]{\n  gap: 8px;\n}\n.gap-\\[4px\\]{\n  gap: 4px;\n}\n.rounded-\\[99px\\]{\n  border-radius: 99px;\n}\n.rounded{\n  border-radius: 0.25rem;\n}\n.rounded-l-\\[5px\\]{\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.rounded-r-\\[5px\\]{\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.border{\n  border-width: 1px;\n}\n.bg-\\[\\#064187\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(6 65 135 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#0066d3\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 102 211 / var(--tw-bg-opacity));\n}\n.bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.p-\\[0\\.4rem\\]{\n  padding: 0.4rem;\n}\n.py-\\[2px\\]{\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.px-\\[4px\\]{\n  padding-left: 4px;\n  padding-right: 4px;\n}\n.text-center{\n  text-align: center;\n}\n.text-4xl{\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-lg{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.font-medium{\n  font-weight: 500;\n}\n.font-semibold{\n  font-weight: 600;\n}\n.italic{\n  font-style: italic;\n}\n.text-white{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-green-500{\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n.opacity-50{\n  opacity: 0.5;\n}\n.shadow-lg{\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline{\n  outline-style: solid;\n}\n.blur{\n  --tw-blur: blur(8px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter{\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition{\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.ease-in-out{\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}', ""]);
            const s = a
        }
        ,
        3277: (n, e, t) => {
            t.d(e, {
                Z: () => s
            });
            var o = t(8081)
              , i = t.n(o)
              , r = t(3645)
              , a = t.n(r)()(i());
            a.push([n.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Rubik:wght@500&family=Varela+Round&display=swap);"]),
            a.push([n.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css);"]),
            a.push([n.id, 'body {\n    width: 315px;\n    font-size: 15px;\n    background-color: #ecf5fe;\n    margin: 5px;\n    font-family: "Poppins";\n}\n\n.popup-container {\n    background-color: white;\n    padding: 6px;\n    box-sizing: border-box;\n    border-radius: 6px;\n}\n\n.popup-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#xmark {\n    width: 100%;\n    text-align: right;\n    font-size: 23px;\n    cursor: pointer;\n    margin-bottom: 26px;\n    margin-right: 11px;\n}\n\n#xmark a {\n    color: gray;\n    text-decoration: none;\n}\n\nbutton {\n    font-size: 17px;\n    font-weight: bold;\n    height: 55px;\n    width: 90%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    border: None;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n\n#crop_btn {\n    background-color: #0066d3;\n    color: #fefeff;\n}\n\n#crop_btn:active {\n    box-shadow: 0px 0px 1px 1px #034ea2;\n}\n\n#ocr_img {\n    height: 33px;\n    width: 33px;\n}\n\n#input_manual_btn {\n    background-color: #ccc;\n    color: #333;\n}\n\nfooter {\n    width: 100%;\n    text-align: center;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  #photosolve_logo {\n    height: 43px;\n    margin-top: 20px;\n    margin-left: 72px;\n  }\n\n.pro-upgrade-container {\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n    margin-top: 10px;\n    font-size: 14px;\n}\n\n.pro-upgrade-container a {\n    text-decoration: none;\n    color: #007bff;\n}\n\n.feature-container {\n    width: 90%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-top: 15px;\n  }\n\n.feature-text {\n    display: flex;\n    align-items: center;\n}\n\n.feature-text span {\n    font-size: 16px;\n    color: #494949;\n    margin-right: 5px;\n}\n\n.feature-text i {\n    font-size: 14px;\n    color: #034ea2;\n    cursor: pointer;\n}\n\n#ai_options {\n    display: flex;\n    justify-content: space-between;\n    width: 95%; /* Perbesar lebar kontainer */\n    margin-top: 19px;\n    background-color: #ccc;\n    border-radius: 5px;\n    padding: 5px;\n    box-sizing: border-box;\n  }\n  \n  .ai_option {\n    padding: 0 5px; /* Tambahkan padding kiri dan kanan */\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  }\n  \n  .ai_option label {\n    cursor: pointer;\n    padding: 5px;\n    border-radius: 5px;\n    color: #034ea2;\n    width: 100%;\n    text-align: center;\n  }\n  \n  .ai_option input:checked + label {\n    font-weight: bold;\n    color: #fff;\n    background-color: #034ea2;\n  }\n  \n  #powerful_ai_label {\n    margin-left: 0;\n    padding-left: 5px;\n    white-space: nowrap;\n  }\n\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 48px;\n    height: 24px;\n  }\n  \n  .switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n  \n  .slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: 0.4s;\n    border-radius: 34px;\n  }\n  \n  .slider:before {\n    position: absolute;\n    content: "";\n    height: 18px;\n    width: 18px;\n    left: 3px;\n    bottom: 3px;\n    background-color: white;\n    transition: 0.4s;\n    border-radius: 50%;\n  }\n  \n  input:checked + .slider {\n    background-color: #0066d3;\n  }\n  \n  input:checked + .slider:before {\n    transform: translateX(24px);\n  }\n  \n  .switch.disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n\n  .header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n\n  .ai-options {\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n    margin-top: 15px;\n    background-color: #ccc;\n    border-radius: 5px;\n    box-sizing: border-box;\n  }', ""]);
            const s = a
        }
        ,
        5251: (n, e, t) => {
            var o = t(7294)
              , i = Symbol.for("react.element")
              , r = Symbol.for("react.fragment")
              , a = Object.prototype.hasOwnProperty
              , s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , l = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function c(n, e, t) {
                var o, r = {}, c = null, d = null;
                for (o in void 0 !== t && (c = "" + t),
                void 0 !== e.key && (c = "" + e.key),
                void 0 !== e.ref && (d = e.ref),
                e)
                    a.call(e, o) && !l.hasOwnProperty(o) && (r[o] = e[o]);
                if (n && n.defaultProps)
                    for (o in e = n.defaultProps)
                        void 0 === r[o] && (r[o] = e[o]);
                return {
                    $$typeof: i,
                    type: n,
                    key: c,
                    ref: d,
                    props: r,
                    _owner: s.current
                }
            }
            e.jsx = c,
            e.jsxs = c
        }
        ,
        7294: (n, e, t) => {
            n.exports = t(2408)
        }
        ,
        5893: (n, e, t) => {
            n.exports = t(5251)
        }
        ,
        962: (n, e, t) => {
            var o = t(5893)
              , i = t(745)
              , r = t(3379)
              , a = t.n(r)
              , s = t(7795)
              , l = t.n(s)
              , c = t(569)
              , d = t.n(c)
              , p = t(3565)
              , h = t.n(p)
              , b = t(9216)
              , u = t.n(b)
              , f = t(4589)
              , g = t.n(f)
              , m = t(7347)
              , x = {};
            x.styleTagTransform = g(),
            x.setAttributes = h(),
            x.insert = d().bind(null, "head"),
            x.domAPI = l(),
            x.insertStyleElement = u();
            a()(m.Z, x);
            m.Z && m.Z.locals && m.Z.locals;
            var w = t(7294)
              , y = t(3277)
              , v = {};
            v.styleTagTransform = g(),
            v.setAttributes = h(),
            v.insert = d().bind(null, "head"),
            v.domAPI = l(),
            v.insertStyleElement = u();
            a()(y.Z, v);
            y.Z && y.Z.locals && y.Z.locals;
            function k({onChange: n=(n => n), feature: e="", disabled: t=!0}) {
                const [i,r] = (0,
                w.useState)(!1);
                return (0,
                w.useEffect)(( () => {
                    chrome.storage.sync.get([e], (n => {
                        r(n[e])
                    }
                    ))
                }
                ), [e]),
                (0,
                o.jsxs)("label", Object.assign({
                    className: `switch ${i ? "on" : "off"} ${t ? "disabled" : ""}`
                }, {
                    children: [(0,
                    o.jsx)("input", {
                        type: "checkbox",
                        checked: i,
                        onChange: e => {
                            r(e.target.checked),
                            n(e)
                        }
                        ,
                        disabled: t
                    }), (0,
                    o.jsx)("span", {
                        className: "slider round"
                    })]
                }))
            }
            const j = ({content: n, children: e, position: t}) => {
                const [i,r] = (0,
                w.useState)(!1)
                  , [a,s] = (0,
                w.useState)("Ctrl+Shift+Q");
                (0,
                w.useEffect)(( () => {
                    chrome.storage.sync.get(["stealthShortcut"], (n => {
                        s(n.stealthShortcut || "Ctrl+Shift+Q")
                    }
                    ))
                }
                ), []);
                const l = {
                    position: "absolute",
                    borderRadius: "0.5rem",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    zIndex: "50",
                    padding: "0.4rem",
                    backgroundColor: "white",
                    opacity: i ? 1 : 0,
                    visibility: i ? "visible" : "hidden",
                    transition: "opacity 0.2s ease-in-out, visibility 0.2s ease-in-out"
                }
                  , c = Object.assign(Object.assign({}, l), {
                    width: "auto",
                    whiteSpace: "nowrap"
                })
                  , d = "toolsTooltip" === t ? {
                    color: "black",
                    fontSize: "12px",
                    fontWeight: "400"
                } : {
                    color: "black"
                }
                  , p = Object.assign(Object.assign({}, "toolsTooltip" === t ? c : l), {
                    width: (n => {
                        switch (n) {
                        case "Efficient AI for quick answers, accessible to all users.":
                            return "227px";
                        case "Our most advanced powerful AI, only available to PRO subscribers.":
                            return "264px";
                        case `Scan using ${a} and Stay invincible. Click to learn more.`:
                            return "262px";
                        case "See images with our Vision AI, not just text. Click to learn more.":
                            return "252px";
                        case "Stealth Mode only available to PRO subscribers":
                            return "221px";
                        case "Image Vision only available to PRO subscribers.":
                            return "219px";
                        case "Wolfram only available to PRO subscribers":
                            return "154px";
                        case "Image Vision only available to PRO subscribers":
                            return "182px";
                        default:
                            return "80px"
                        }
                    }
                    )(n)
                });
                return (0,
                o.jsxs)("div", Object.assign({
                    style: {
                        position: "relative",
                        display: "inline-block"
                    },
                    onMouseEnter: () => {
                        r(!0)
                    }
                    ,
                    onMouseLeave: () => {
                        r(!1)
                    }
                }, {
                    children: [(0,
                    o.jsx)("div", Object.assign({
                        style: Object.assign(Object.assign(Object.assign({}, p), {
                            top: {
                                top: "-86px",
                                left: "50%",
                                transform: "translateX(-50%)"
                            },
                            topFeature: {
                                bottom: "100%",
                                left: "140%",
                                transform: "translateX(-50%)"
                            },
                            topLeft: {
                                top: "-60px",
                                right: "-59%"
                            },
                            topRight: {
                                top: "-60px",
                                left: "-104%"
                            },
                            topRightGpt4v: {
                                top: "-60px",
                                left: "0%"
                            },
                            topRightWolfram: {
                                top: "-60px",
                                left: "0%"
                            },
                            topLeftTooltip: {
                                top: "-64px",
                                right: "-3%"
                            },
                            bottom: {
                                bottom: "-40px",
                                left: "50%",
                                transform: "translateX(-50%)"
                            },
                            left: {
                                left: "-100px",
                                top: "50%",
                                transform: "translateY(-50%)"
                            },
                            right: {
                                right: "-100px",
                                top: "50%",
                                transform: "translateY(-50%)"
                            },
                            toolsTooltip: {
                                bottom: "100%",
                                left: "50%",
                                transform: "translateX(-50%)",
                                marginBottom: "5px"
                            }
                        }[t]), d)
                    }, {
                        children: n
                    })), e]
                }))
            }
            ;
            function O({feature: n="", isPro: e}) {
                const [t,i] = (0,
                w.useState)("")
                  , [r,a] = (0,
                w.useState)("");
                let s = "";
                s = "stealthMode" === n ? "https://chipped-helicopter-122.notion.site/Stealth-Mode-eb7b73d9340c4fd68cd722edd7d01022?pvs=4" : "https://chipped-helicopter-122.notion.site/Image-Vision-02b0ed8da0034ff6b5abf735af462a99";
                const l = e => {
                    "stealthMode" === n ? chrome.storage.sync.set({
                        stealthMode: e.target.checked
                    }) : chrome.storage.sync.set({
                        imageVision: e.target.checked
                    })
                }
                ;
                return (0,
                w.useEffect)(( () => {
                    "stealthMode" === n ? chrome.storage.sync.get(["stealthShortcut"], (n => {
                        const e = n.stealthShortcut || "Ctrl+Shift+Q";
                        i(`Scan using ${e} and Stay invincible. Click to learn more.`),
                        a("Stealth Mode only available to PRO subscribers")
                    }
                    )) : "imageVision" === n && (i("See images with our Vision AI, not just text. Click to learn more."),
                    a("Image Vision only available to PRO subscribers"))
                }
                ), [n]),
                (0,
                o.jsxs)("div", Object.assign({
                    className: "feature-container"
                }, {
                    children: [(0,
                    o.jsxs)("div", Object.assign({
                        className: "feature-text"
                    }, {
                        children: [(0,
                        o.jsx)("span", {
                            children: "stealthMode" === n ? "Stealth Mode" : "Image Vision"
                        }), (0,
                        o.jsx)(j, Object.assign({
                            content: t,
                            position: "topFeature"
                        }, {
                            children: (0,
                            o.jsx)("i", {
                                className: "fas fa-info-circle",
                                onClick: () => window.open(s, "_blank")
                            })
                        }))]
                    })), e ? (0,
                    o.jsx)(k, {
                        onChange: l,
                        feature: n,
                        disabled: !e
                    }) : (0,
                    o.jsx)(j, Object.assign({
                        content: r,
                        position: "topLeftTooltip"
                    }, {
                        children: (0,
                        o.jsx)(k, {
                            onChange: l,
                            feature: n,
                            disabled: !e
                        })
                    }))]
                }))
            }
            function S({children: n, className: e, onClick: t, selected: i, style: r}) {
                return (0,
                o.jsx)("div", Object.assign({
                    onClick: t,
                    className: `flex justify-center items-center w-[142px] h-[45px] cursor-pointer text-lg ${i ? "bg-[#0066d3] text-white font-semibold" : ""} ${e}`,
                    style: Object.assign({
                        fontSize: "1.0rem"
                    }, r)
                }, {
                    children: n
                }))
            }
            function C({isPro: n}) {
                const [e,t] = (0,
                w.useState)(!1);
                return (0,
                w.useEffect)(( () => {
                    chrome.storage.sync.get(["powerfulAI"], (n => {
                        var e;
                        t(null !== (e = n.powerfulAI) && void 0 !== e && e)
                    }
                    ))
                }
                ), []),
                (0,
                w.useEffect)(( () => {
                    chrome.storage.sync.set({
                        powerfulAI: e
                    })
                }
                ), [e]),
                (0,
                o.jsxs)("div", Object.assign({
                    className: "ai-options flex justify-between w-full"
                }, {
                    children: [(0,
                    o.jsx)(j, Object.assign({
                        content: "Efficient AI for quick answers, accessible to all users.",
                        position: "topLeft"
                    }, {
                        children: (0,
                        o.jsx)(S, Object.assign({
                            onClick: n ? () => t(!1) : () => {}
                            ,
                            className: `rounded-l-[5px] ${!e && "bg-[#0066d3]"}`,
                            selected: !e,
                            style: {}
                        }, {
                            children: "Basic AI"
                        }))
                    })), (0,
                    o.jsx)(j, Object.assign({
                        content: "Our most advanced powerful AI, only available to PRO subscribers.",
                        position: "topRight"
                    }, {
                        children: (0,
                        o.jsx)(S, Object.assign({
                            onClick: n ? () => t(!0) : () => {}
                            ,
                            className: `rounded-r-[5px] ${e && "bg-[#0066d3]"} ${!n && "opacity-50 cursor-not-allowed"}`,
                            selected: e,
                            style: {
                                marginLeft: "-12px"
                            }
                        }, {
                            children: "\u26a1Powerful AI"
                        }))
                    }))]
                }))
            }
            const z = () => {
                const [n,e] = (0,
                w.useState)(!1);
                (0,
                w.useEffect)(( () => {
                    chrome.storage.sync.get(["isPro"], (n => {
                        e(n.isPro || !1)
                    }
                    ))
                }
                ), []);
                const t = () => {
                    window.close()
                }
                ;
                return (0,
                o.jsx)("div", Object.assign({
                    className: "popup-container",
                    onClick: t
                }, {
                    children: (0,
                    o.jsxs)("div", Object.assign({
                        className: "popup-content",
                        onClick: n => n.stopPropagation()
                    }, {
                        children: [(0,
                        o.jsxs)("div", Object.assign({
                            className: "header"
                        }, {
                            children: [(0,
                            o.jsx)("img", {
                                id: "photosolve_logo",
                                src: "logo/logo2x2.png",
                                alt: "photosolve",
                                onClick: () => {
                                    chrome.tabs.create({
                                        url: "https://photosolve.ai"
                                    })
                                }
                                ,
                                style: {
                                    cursor: "pointer"
                                }
                            }), (0,
                            o.jsx)("div", Object.assign({
                                id: "xmark"
                            }, {
                                children: (0,
                                o.jsx)("a", Object.assign({
                                    href: "#",
                                    onClick: t
                                }, {
                                    children: (0,
                                    o.jsx)("i", {
                                        className: "fa-solid fa-xmark"
                                    })
                                }))
                            }))]
                        })), (0,
                        o.jsxs)("button", Object.assign({
                            id: "crop_btn",
                            onClick: () => {
                                chrome.runtime.sendMessage({
                                    message: "cancel_popup"
                                }, ( () => {
                                    chrome.runtime.sendMessage({
                                        message: "scan"
                                    }),
                                    window.close()
                                }
                                )),
                                chrome.runtime.sendMessage({
                                    message: "close_scan_question"
                                })
                            }
                            ,
                            style: {
                                fontWeight: 600
                            }
                        }, {
                            children: ["Scan question\xa0\xa0", (0,
                            o.jsx)("img", {
                                id: "ocr_img",
                                src: "/icons/OCR_White.png",
                                alt: ""
                            })]
                        })), (0,
                        o.jsx)("button", Object.assign({
                            id: "input_manual_btn",
                            onClick: () => {
                                chrome.runtime.sendMessage({
                                    message: "aitutor"
                                }),
                                window.close()
                            }
                            ,
                            style: {
                                fontWeight: 600
                            }
                        }, {
                            children: "Ask AI Tutor"
                        })), (0,
                        o.jsx)(O, {
                            feature: "stealthMode",
                            isPro: n
                        }), (0,
                        o.jsx)(O, {
                            feature: "imageVision",
                            isPro: n
                        }), (0,
                        o.jsx)(C, {
                            isPro: n
                        }), (0,
                        o.jsxs)("div", Object.assign({
                            className: "pro-upgrade-container",
                            style: {
                                fontWeight: 500,
                                fontSize: "15.4px",
                                display: "flex",
                                justifyContent: "center"
                            }
                        }, {
                            children: [!n && (0,
                            o.jsx)("a", Object.assign({
                                href: "https://photosolve.gumroad.com/l/photosolve",
                                target: "_blank"
                            }, {
                                children: "\u26a1 Get PhotoSolve Pro"
                            })), n ? (0,
                            o.jsx)("a", Object.assign({
                                href: "#",
                                onClick: () => {
                                    chrome.tabs.create({
                                        url: chrome.runtime.getURL("pages/pro/index.html?tab=settings")
                                    })
                                }
                            }, {
                                children: "\u2699\ufe0f Extension Settings"
                            })) : (0,
                            o.jsx)("a", Object.assign({
                                href: "#",
                                onClick: () => {
                                    chrome.tabs.create({
                                        url: chrome.runtime.getURL("pages/pro/index.html?tab=license_key")
                                    })
                                }
                            }, {
                                children: "\u{1f511} Input Key"
                            }))]
                        }))]
                    }))
                }))
            }
            ;
            !function() {
                const n = document.createElement("div");
                if (document.body.appendChild(n),
                !n)
                    throw new Error("Can not find AppContainer");
                (0,
                i.s)(n).render((0,
                o.jsx)(z, {}))
            }()
        }
    }, t = {};
    function o(n) {
        var i = t[n];
        if (void 0 !== i)
            return i.exports;
        var r = t[n] = {
            id: n,
            exports: {}
        };
        return e[n](r, r.exports, o),
        r.exports
    }
    o.m = e,
    n = [],
    o.O = (e, t, i, r) => {
        if (!t) {
            var a = 1 / 0;
            for (d = 0; d < n.length; d++) {
                for (var [t,i,r] = n[d], s = !0, l = 0; l < t.length; l++)
                    (!1 & r || a >= r) && Object.keys(o.O).every((n => o.O[n](t[l]))) ? t.splice(l--, 1) : (s = !1,
                    r < a && (a = r));
                if (s) {
                    n.splice(d--, 1);
                    var c = i();
                    void 0 !== c && (e = c)
                }
            }
            return e
        }
        r = r || 0;
        for (var d = n.length; d > 0 && n[d - 1][2] > r; d--)
            n[d] = n[d - 1];
        n[d] = [t, i, r]
    }
    ,
    o.n = n => {
        var e = n && n.__esModule ? () => n.default : () => n;
        return o.d(e, {
            a: e
        }),
        e
    }
    ,
    o.d = (n, e) => {
        for (var t in e)
            o.o(e, t) && !o.o(n, t) && Object.defineProperty(n, t, {
                enumerable: !0,
                get: e[t]
            })
    }
    ,
    o.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e),
    ( () => {
        var n = {
            42: 0
        };
        o.O.j = e => 0 === n[e];
        var e = (e, t) => {
            var i, r, [a,s,l] = t, c = 0;
            if (a.some((e => 0 !== n[e]))) {
                for (i in s)
                    o.o(s, i) && (o.m[i] = s[i]);
                if (l)
                    var d = l(o)
            }
            for (e && e(t); c < a.length; c++)
                r = a[c],
                o.o(n, r) && n[r] && n[r][0](),
                n[r] = 0;
            return o.O(d)
        }
          , t = self.webpackChunkreactjs_chrome = self.webpackChunkreactjs_chrome || [];
        t.forEach(e.bind(null, 0)),
        t.push = e.bind(null, t.push.bind(t))
    }
    )(),
    o.nc = void 0;
    var i = o.O(void 0, [647], ( () => o(962)));
    i = o.O(i)
}
)();

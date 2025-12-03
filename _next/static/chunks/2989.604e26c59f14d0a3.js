"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2989], {
        12989: function(n, t, e) {
            e.r(t), e.d(t, {
                StyledRDButtonVideo: function() {
                    return u
                }
            });
            var o = e(82729),
                r = e(14141),
                i = e(51742),
                c = e(33904);

            function _templateObject() {
                let n = (0, o._)(["\n  ", "\n  color: ", ";\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: ", ";\n  height: ", ";\n  background-color: ", ";\n  border-radius: ", ";\n  transition: background-color 0.25s linear;\n  z-index: ", ";\n  ", "\n  ", "\n\n  &:hover {\n    background-color: ", ";\n  }\n"]);
                return _templateObject = function() {
                    return n
                }, n
            }
            let setButtonPosition = function() {
                    let n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return n ? "\n      right: var(--outer-gutter);\n      bottom: var(--outer-gutter);\n    " : "\n    right: ".concat((0, i.kF)(12), ";\n    bottom: calc(").concat((0, i.kF)(12), " + ").concat((0, i.kF)(t), ");\n  ")
                },
                u = r.ZP.button.withConfig({
                    componentId: "sc-b6575436-0"
                })(_templateObject(), n => {
                    let {
                        theme: t
                    } = n;
                    return (0, i.vm)("body-1", t)
                }, (0, i.xl)("inverse"), (0, i.kF)(24), (0, i.kF)(24), (0, i.qz)("icon"), (0, i.kF)(12), c.W5.buttonVideo, (0, i.bP)(), n => {
                    let {
                        positionFullscreen: t,
                        positionOffset: e
                    } = n;
                    return setButtonPosition(t, e)
                }, (0, i.qz)("inverse"))
        }
    }
]);
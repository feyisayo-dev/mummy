System.register(["./p-ea7bbed1.system.js"], function (e, t) {
  "use strict";
  var n, r;
  return {
    setters: [
      function (e) {
        n = e.p;
        r = e.b;
      },
    ],
    execute: function () {
      var e = function () {
        var e = t.meta.url;
        var r = {};
        if (e !== "") {
          r.resourcesUrl = new URL(".", e).href;
        }
        return n(r);
      };
      e().then(function (e) {
        return r(
          [
            [
              "p-1654ec79.system",
              [
                [
                  1,
                  "ion-icon",
                  {
                    mode: [1025],
                    color: [1],
                    ios: [1],
                    md: [1],
                    flipRtl: [4, "flip-rtl"],
                    name: [513],
                    src: [1],
                    icon: [8],
                    size: [1],
                    lazy: [4],
                    sanitize: [4],
                    svgContent: [32],
                    isVisible: [32],
                  },
                ],
              ],
            ],
          ],
          e
        );
      });
    },
  };
});
MathJax.Hub.Config(
  {"HTML-CSS": { preferredFont: "TeX", availableFonts: ["STIX","TeX"] },
   tex2jax: {
     element: null,
     preview: "none",
     skipTags: ["script","noscript","style","textarea","pre","code"],
     inlineMath: [
       ['$', '$'],
       ["\\(", "\\)"],
     ],
     displayMath: [
       ['$$', '$$'],
       ["\\[", "\\]"],
     ],
     processEscapes: true,
     ignoreClass: "tex2jax_ignore|dno"
   },
   TeX: {
     extensions: ["AMSmath.js","AMSsymbols.js","cancel.js"],
     equationNumbers: { autoNumber: "AMS" },
     noUndefined: { attributes: {
                      mathcolor: "red",
                      mathbackground: "#FFEEEE",
                      mathsize: "90%" }
                  }
   },
   messageStyle: "none"
});

// Uncomment this code and set the style of the "page" element below
// to visibility: hidden initially if you don't like the MathJax
// flicker during the rendering process. :(

// MathJax.Hub.Queue(function () {
// document.getElementById("page").style.visibility = "visible"; });

const button = document.querySelector("button");

const goFetch = () => {
  require.ensure([], function(require) {
    const print = require("./print.js").default;
    print();
  });
};
button.addEventListener("click", goFetch, false);

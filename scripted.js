(() => {
    const refs = {
      openCount: document.querySelector("[data-count-open]"),
      closeCount: document.querySelector("[data-count-close]"),
      count: document.querySelector("[count]"),
      default:document.querySelector("[default]"),
      button:document.querySelector("[button]"),
      submit:document.querySelector("[submit]"),
    };
  
    refs.openCount.addEventListener("click", toggleCount);
    refs.closeCount.addEventListener("click", toggleCount);
  
    function toggleCount() {
      refs.count.classList.toggle("hidden");
      refs.default.classList.toggle("hidden");
      refs.button.classList.toggle("hidden");
      refs.submit.classList.toggle("hidden");
    }
  })();
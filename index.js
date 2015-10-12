var index = (function() {
  'use strict';

  function scaleElementHeight(el) {
    el.style.height = (window.innerHeight + 5) + 'px';
  }

  var module = {
    autoResizeElement: function(querySelector) {
      var el = document.querySelector(querySelector);

      window.addEventListener('resize', function() {
        scaleElementHeight(el);
      });

      scaleElementHeight(el);
    },
    toggleElement: function(elementId) {
      var el = document.getElementById(elementId);
      el.style.visibility = (el.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
  };

  return module;
}());
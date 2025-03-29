(function () {
  'use strict';
  // Custom map tabs written in pure JavasScript (no jQuery)

  // Only run this on the homepage
  // Remove "if" condition  to run on all pages
  if (document.body.id === 'index') {
      initMapTabs();
  }

  function initMapTabs() {
      var demos = document.getElementById('map-demos');
      var tabsParent = demos.querySelector('.map-demo-tabs');
      var contents = demos.querySelectorAll('.map-demo-content');
      /** @type {HTMLAnchorElement[]} */
      var tabs = [];

      contents.forEach((content, idx) => {
          var title = content.querySelector('h3').textContent;

          var tab = document.createElement('a');
          tab.href = '#';
          tab.textContent = title;
          tab.addEventListener('click', (e) => {
              e.preventDefault();
              toggleTab(tab, content);
          });

          tabsParent.appendChild(tab);
          tabs.push(tab);

          if (idx === 0) {
              toggleTab(tab, content);
          }
      });

      /**
       * Toggle active tab.
       *
       * @param {HTMLAnchorElement} tab
       * @param {HTMLDivElement} content
       */
      function toggleTab(tab, content) {
          tabs.forEach((tabItem) => {
              if (tabItem !== tab) {
                  tabItem.classList.remove('active');
              }
          });

          contents.forEach((contentItem) => {
              if (contentItem !== content) {
                  contentItem.classList.remove('active');
              }
          });

          tab.classList.add('active');
          content.classList.add('active');
      }
  }
})();

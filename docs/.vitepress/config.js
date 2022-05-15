const primarySidebar = [{ text: "Our Story", link: "/about/our-story" }];

module.exports = {
    title: "Vitepress doc ", // appended to all page titles

    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "About", link: "/about/" },
            { text: "Contact", link: "/contact" },
          ],

        sidebar: {"/about/": primarySidebar, // everything in the /about/ subdirectory
        "/contact": primarySidebar, // contact page
    
        // we don't need to do anything to index
        // because the default sidebar is created via page headings
      },
    }
};
  
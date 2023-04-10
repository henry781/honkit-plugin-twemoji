const twemoji = require("twemoji");

module.exports = {
    book: {
        assets: "./css",
        css: ["twemoji.css"],
    },
    hooks: {
        "page:before": function (page) {
            page.content = twemoji.parse(page.content);
            return page;
        },
    },
};

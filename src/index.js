// src/index.js
var m = require("mithril")

var start = require("./views/start")
var question = require("./views/question")
var done = require("./views/done")
var Layout = require("./views/Layout")

m.route(document.body, "/start", {
    "/start": {
        render: function() {
            return m(Layout, m(start))
        }
    },
    "/question": {
        render: function() {
            return m(Layout, m(question))
        }
    },
    "/done": {
        render: function() {
            return m(Layout, m(done))
        }
    }
})

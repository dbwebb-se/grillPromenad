var m = require("mithril")

var Game = require("../models/game")

module.exports = {
    view: function(vnode) {
        return m("form", {
            onsubmit: function(e) {
                e.preventDefault()
                Game.createUser()
            }
        }, [
            Game.nameError !== "" ? m("div.error", Game.nameError) : null,
            m("label.label", "Skriv in ditt namn"),
            m("input.input[type=text][placeholder=namn][autocomplete=off][autocorrect=off][autocapitalize=off][spellcheck=false]", {
                oninput: m.withAttr("value", function(value) { Game.name = value })
            }),
            m("button.start[type=submit]", "Starta"),
        ])
    }
}

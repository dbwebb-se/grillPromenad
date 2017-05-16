var m = require("mithril")

var Game = require("../models/game")

var Component1X2 = {
    view: function () {
        return [
            m("button.answer-button", { onclick : function (event) {
                event.preventDefault()
                Game.answerQuestion("1")
            } }, "1"),
            m("button.answer-button", { onclick : function (event) {
                event.preventDefault()
                Game.answerQuestion("X")
            } }, "X"),
            m("button.answer-button", { onclick : function (event) {
                event.preventDefault()
                Game.answerQuestion("2")
            } }, "2")
        ]
    }
}

var ComponentText = {
    answer: "",
    view: function () {
        return [
            m("input.input[type=text][placeholder=Svar]", {
                oninput: m.withAttr("value", function(value) { ComponentText.answer = value })
            }),
            m("button.answer-button", { onclick : function (event) {
                event.preventDefault()
                Game.answerQuestion(ComponentText.answer)
            } }, "Svara")
        ]
    }
}

module.exports = {
    oninit: function () {
        Game.getCurrentQuestion()
    },
    view: function() {
        if (Game.question.hasOwnProperty("id")) {
            return [
                m("h1", "Fråga " + Game.question.number),
                Game.question.type === "1X2" ? m(Component1X2) : m(ComponentText)
            ];
        }

    }
}

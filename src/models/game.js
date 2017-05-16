// src/models/User.js
var m = require("mithril")

var Game = {
    name: "",
    nameError: "",
    question: {},
    createUser: function () {
        if (Game.name !== "") {
            m.request({
                url: "http://lewenhagen.net:1337/name",
                method: "POST",
                data: { name : Game.name }
            }).then(function(result) {
                if (result.inserted) {
                    Game.nameError = ""
                    m.route.set("/question")
                } else {
                    Game.nameError = "Namnet finns redan"
                }
            })
        }
    },
    getCurrentQuestion: function () {
        if (Game.name !== "") {
            m.request({
                url: "http://lewenhagen.net:1337/question/" + Game.name,
                method: "GET"
            }).then(function(result) {
                if (result.hasOwnProperty("gameFinished")) {
                    m.route.set("/done")
                } else {
                    Game.question = result
                }
            })
        }
    },
    answerQuestion: function (answer) {
        if (Game.name !== "" && answer !== "" && Game.question.hasOwnProperty("id")) {
            m.request({
                url: "http://lewenhagen.net:1337/answer",
                method: "POST",
                data: { name: Game.name, question_id: Game.question.id, answer: answer }
            }).then(function() {
                Game.getCurrentQuestion()
            })
        }
    }
}

module.exports = Game

var m = require("mithril")

module.exports = {
    view: function(vnode) {
        return m("main.layout", [
            m(".topbar", [
                m("h1.brand", "Grill Promenad")
            ]),
            m("section.main", vnode.children)
        ])
    }
}

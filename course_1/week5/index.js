module.exports = {
    subscriptions : {},
    getSelf : function() {
        return this;
    },
    Subscription : function(e, s, h) {
        return {
            event:      e,
            subscriber: s,
            handler:    h
        }
    },
    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        console.log("on() ")
        if (this.subscriptions.hasOwnProperty(event)) {
            var arr = this.subscriptions[event]
            arr.push(new this.Subscription(event, subscriber, handler))
            for (let s of this.subscriptions[event]) {
                console.log(s)
            }
        } else {
            this.subscriptions[event] = [new this.Subscription(event, subscriber, handler)]
        }
        return this.getSelf()
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        console.log("off() ")

    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        console.log("emit() ")
        if (this.subscriptions.hasOwnProperty(event)) {
            var arr = this.subscriptions[event]
            for (let s of arr) {
                s.handler.call(s.s)
            }
        }
    }
};

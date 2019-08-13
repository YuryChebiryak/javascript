module.exports = {
    subscriptions = {},
    subscription : function(e, s, h) {
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
        if (this.subscriptions.hasOwnProperty(event)) {
            var arr = this.subscription[event]
            arr.push(new subscription(event, subscriber, handler))
            for (let s of this.subscriptions[event]) {
                console.log(s)
            }
        } else {
            this.subscription[event] = [new this.subscription(event, subscriber, handler)]
        }
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {

    },

    /**
     * @param {String} event
     */
    emit: function (event) {

    }
};

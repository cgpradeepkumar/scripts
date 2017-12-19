function relay() {
    console.log('This is relay function.');
}

function longjump() {
    console.log('This is longjump function.');
}

// module.exports.relay = relay;
// module.exports.longjump = longjump;

module.exports = {
    run: function() {
        console.log('This is run function.');
    },

    swim: function() {
        console.log('This is swim function.');
    }, relay:relay, longjump:longjump
}
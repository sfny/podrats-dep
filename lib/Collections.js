Podcasts = new Mongo.Collection('podcasts');
Test = new Mongo.Collection('test');

Meteor.methods({
    /**
     *
     * @param _userData
     * @returns {*|any}
     */
    updateUser : function(_userData) {
        return Meteor.users.update({_id: this.userId}, {
            $set: _userData
        });
    }
});

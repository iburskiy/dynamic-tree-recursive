"use strict";

angular.module('dynamic-tree').factory('RecursiveNodeModel', function() {

    //model for Recursive Node Item
    function RecursiveNodeModel ( id, name ) {
        this.id = id;
        this.name = name;
        this.nodes = [];
    }

    return RecursiveNodeModel;
});

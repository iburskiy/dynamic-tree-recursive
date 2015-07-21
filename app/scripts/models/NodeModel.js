"use strict";

angular.module('dynamic-tree-recursive').factory('NodeModel', function() {

    //model for Node Item
    function NodeModel ( id, name ) {
        this.id = id;
        this.name = name;
        this.nodes = [];
    }

    return NodeModel;
});

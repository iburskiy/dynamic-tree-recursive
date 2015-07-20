"use strict";

angular.module('dynamic-tree').factory('IterativeNodeModel', function() {

    //model for Iterative Node Item
    function IterativeNodeModel ( name, depth, parentRef ) {
        this.name = name;
        this.depth = depth;
        this.parent = parentRef;
    }

    return IterativeNodeModel;
});

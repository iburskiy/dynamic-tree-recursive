'use strict';

angular.module( 'dynamic-tree' ).factory('treeModel', ['NodeModel', 'treeService', function(NodeModel, treeService) {

    //private field
    var tree = [new NodeModel( 0, "Element" )];
    //public model
    var recursiveTree = {};

    //Adds new node to the tree
    recursiveTree.add = function(node) {
        var id = treeService.generateNodeId();
        var newName = node.name + '-' + (node.nodes.length + 1);
        node.nodes.push(new NodeModel(id, newName));
    };

    //Removes node item from the tree
    recursiveTree.remove = function(id) {
        var nodeName = treeService.removeNodeById( tree, id );
        console.log(nodeName + ' has been removed!');
    };

    recursiveTree.getTree = function() {
        return tree;
    };

    recursiveTree.setTree = function(treeObj) {
        tree = treeObj;
    };

    return recursiveTree;
}]);
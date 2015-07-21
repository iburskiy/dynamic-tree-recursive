'use strict';

describe('Model: TreeModel', function () {

    // load the controller's module
    beforeEach(module('dynamic-tree'));

    var TreeController,
        tree,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TreeController = $controller('TreeController', {$scope: scope});
        tree = scope.treeModel.getTree();
    }));

    it('test for add()', inject(['NodeModel', function(NodeModel) {
        var expectedTree = [];

        scope.treeModel.add(tree[0]);

        expectedTree.push( new NodeModel(0, "Element") );
        expectedTree[0].nodes.push( new NodeModel(1, 'Element-1') );

        expect( JSON.stringify( scope.treeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));

    /*build the following object: [
     {"name":"Element","depth":0,"parent":null},
     {"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},
     {"name":"Element-2-1","depth":2,"parent":{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}},
     {"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}
     ]
     and then remove 'Element-2-1'*/
    it('test for remove()', inject(['NodeModel', function(NodeModel) {
        var expectedTree = [];

        scope.treeModel.add(tree[0]);
        scope.treeModel.add(tree[0].nodes[0]);
        scope.treeModel.add(tree[0]);

        //remove element with id=2
        scope.treeModel.remove(2);

        expectedTree.push(new NodeModel(0, "Element"));
        expectedTree[0].nodes.push(new NodeModel(1, 'Element-1'));
        expectedTree[0].nodes.push(new NodeModel(3, 'Element-2'));

        expect( JSON.stringify( scope.treeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));
});

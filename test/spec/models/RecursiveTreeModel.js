'use strict';

describe('Model: RecursiveTreeModel', function () {

    // load the controller's module
    beforeEach(module('dynamic-tree'));

    var RecursiveTreeController,
        recursiveTree,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        RecursiveTreeController = $controller('RecursiveTreeController', {$scope: scope});
        recursiveTree = scope.recursiveTreeModel.getTree();
    }));

    it('test for add()', inject(['RecursiveNodeModel', function(RecursiveNodeModel) {
        var expectedTree = [];

        scope.recursiveTreeModel.add(recursiveTree[0]);

        expectedTree.push( new RecursiveNodeModel(0, "Element") );
        expectedTree[0].nodes.push( new RecursiveNodeModel(1, 'Element-1') );

        expect( JSON.stringify( scope.recursiveTreeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));

    /*build the following object: [
     {"name":"Element","depth":0,"parent":null},
     {"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},
     {"name":"Element-2-1","depth":2,"parent":{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}},
     {"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}
     ]
     and then remove 'Element-2-1'*/
    it('test for remove()', inject(['RecursiveNodeModel', function(RecursiveNodeModel) {
        var expectedTree = [];

        scope.recursiveTreeModel.add(recursiveTree[0]);
        scope.recursiveTreeModel.add(recursiveTree[0].nodes[0]);
        scope.recursiveTreeModel.add(recursiveTree[0]);

        //remove element with id=2
        scope.recursiveTreeModel.remove(2);

        expectedTree.push(new RecursiveNodeModel(0, "Element"));
        expectedTree[0].nodes.push(new RecursiveNodeModel(1, 'Element-1'));
        expectedTree[0].nodes.push(new RecursiveNodeModel(3, 'Element-2'));

        expect( JSON.stringify( scope.recursiveTreeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));
});

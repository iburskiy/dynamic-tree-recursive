'use strict';

describe('Model: IterativeTreeModel', function () {

    // load the controller's module
    beforeEach(module('dynamic-tree'));

    var IterativeTreeController,
        iterativeTree,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        IterativeTreeController = $controller('IterativeTreeController', {$scope: scope});
        iterativeTree = scope.iterativeTreeModel.getTree();
    }));

    it('test for add()', inject(['IterativeNodeModel', function(IterativeNodeModel) {
        var rootElem = angular.copy( iterativeTree[0] ),
            expectedTree = [];

        scope.iterativeTreeModel.add(iterativeTree[0], 0);

        expectedTree.push( new IterativeNodeModel("Element", 0, null) );
        expectedTree.push( new IterativeNodeModel("Element-1", 1, rootElem) );

        expect( JSON.stringify( scope.iterativeTreeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));

    /*build the following object: [
     {"name":"Element","depth":0,"parent":null},
     {"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},
     {"name":"Element-2-1","depth":2,"parent":{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}},
     {"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}
     ]
     and then remove 'Element-2-1'*/
    it('test for remove()', inject(['IterativeNodeModel', function(IterativeNodeModel) {
        var rootElem = angular.copy( iterativeTree[0] ),
            expectedTree = [];

        iterativeTree.push( new IterativeNodeModel('Element-2', 1, rootElem) );
        iterativeTree.push( new IterativeNodeModel('Element-2-1', 2, new IterativeNodeModel('Element-2', 1, rootElem) ) );
        iterativeTree.push( new IterativeNodeModel('Element-1', 1, rootElem) );

        //remove element with id=2
        scope.iterativeTreeModel.remove(2);

        expectedTree.push( new IterativeNodeModel("Element", 0, null) );
        expectedTree.push( new IterativeNodeModel('Element-2', 1, rootElem) );
        expectedTree.push( new IterativeNodeModel('Element-1', 1, rootElem) );

        expect( JSON.stringify( scope.iterativeTreeModel.getTree() ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));
});

'use strict';

describe('Service: LocalStorageController', function () {

    // load the controller's module
    beforeEach(module('dynamic-tree-recursive'));

    var LocalStorageController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LocalStorageController = $controller('LocalStorageController', {$scope: scope});
    }));

    it('test for save() and retrieve()', inject(['treeModel', 'CONSTANTS', function(treeModel, CONSTANTS) {
        var expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}],
            actualTree;

        treeModel.setTree( angular.copy(expectedTree) );
        scope.save();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE) ).toEqual( JSON.stringify( expectedTree ) );

        treeModel.setTree( [] );
        actualTree = treeModel.getTree();
        expect( actualTree ).toEqual( [] );

        scope.retrieve();
        actualTree = treeModel.getTree();
        expect( JSON.stringify( actualTree ) ).toEqual( JSON.stringify( expectedTree ) );
    }]));

    it('test for delete()', inject(['treeModel', 'CONSTANTS', function( treeModel, CONSTANTS ) {
        var expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}];

        treeModel.setTree( angular.copy(expectedTree) );

        scope.save();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE) ).toEqual( JSON.stringify( expectedTree ) );

        scope.delete();
        expect( localStorage.getItem(CONSTANTS.TREE_STATE) ).toEqual( null );
    }]));
});
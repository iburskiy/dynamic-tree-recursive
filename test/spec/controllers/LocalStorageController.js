'use strict';

describe('Service: LocalStorageController', function () {

    // load the controller's module
    beforeEach(module('dynamic-tree'));

    var LocalStorageController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LocalStorageController = $controller('LocalStorageController', {$scope: scope});
    }));

    function testSaveRetrieve(treeModelService, CONSTANTS, expectedTree, solutionType) {
        var actualTree;

        treeModelService.setCurrentTree( solutionType, angular.copy(expectedTree) );
        scope.save( solutionType );
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) ).toEqual( JSON.stringify( expectedTree ) );

        treeModelService.setCurrentTree( solutionType, [] );
        actualTree = treeModelService.getCurrentTree( solutionType );
        expect( actualTree ).toEqual( [] );

        scope.retrieve( solutionType );
        actualTree = treeModelService.getCurrentTree( solutionType );
        expect( JSON.stringify( actualTree ) ).toEqual( JSON.stringify( expectedTree ) );
    }

    function testDelete(treeModelService, CONSTANTS, expectedTree, solutionType) {
        treeModelService.setCurrentTree( solutionType, angular.copy(expectedTree) );

        scope.save( solutionType );
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) ).toEqual( JSON.stringify( expectedTree ) );

        scope.delete( solutionType );
        expect( localStorage.getItem(CONSTANTS.TREE_STATE + solutionType) ).toEqual( null );
    }

    it('Recursive and Iterative: test for save() and retrieve()', inject(['treeModelService', 'CONSTANTS', function(treeModelService, CONSTANTS) {
        //Test for Recursive case
        var expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}];
        testSaveRetrieve(treeModelService, CONSTANTS, expectedTree, CONSTANTS.RECURSIVE);

        //Test for Iterative case
        expectedTree = [{"name":"Element","depth":0,"parent":null},{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1-1","depth":2,"parent":{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}}];
        testSaveRetrieve(treeModelService, CONSTANTS, expectedTree, CONSTANTS.ITERATIVE);
    }]));

    it('Recursive and Iterative: test for delete()', inject(['treeModelService', 'CONSTANTS', function( treeModelService, CONSTANTS ) {
        //Test for Recursive case
        var expectedTree = [{"id":0,"name":"Element","nodes":[{"id":1,"name":"Element-1","nodes":[{"id":2,"name":"Element-1-1","nodes":[]}]},{"id":3,"name":"Element-2","nodes":[]}]}];
        testDelete(treeModelService, CONSTANTS, expectedTree, CONSTANTS.RECURSIVE);

        //Test for Iterative case
        expectedTree = [{"name":"Element","depth":0,"parent":null},{"name":"Element-2","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}},{"name":"Element-1-1","depth":2,"parent":{"name":"Element-1","depth":1,"parent":{"name":"Element","depth":0,"parent":null}}}];
        testDelete(treeModelService, CONSTANTS, expectedTree, CONSTANTS.ITERATIVE);
    }]));
});
'use strict';

describe( 'Controller: MainController', function () {

    // load the controller's module
    beforeEach( module( 'dynamic-tree' ) );

    var MainController,
        scope;

    // Initialize the controller and a mock scope
    beforeEach( inject( function ( $controller, $rootScope ) {
        scope = $rootScope.$new();
        MainController = $controller( 'MainController', {
            $scope: scope
            // mocked dependencies should be placed here
        } );
    } ) );

    it( 'test for switchToEdit()', function () {
        scope.switchToEdit(2);
        expect( scope.editedElemId ).toEqual( 2 );
        expect( scope.isEdit ).toEqual( true );
    } );

    it( 'test for switchToText()', function () {
        scope.switchToText();
        expect( scope.editedElemId ).toEqual( null );
        expect( scope.isEdit ).toEqual( false );
    } );
} );

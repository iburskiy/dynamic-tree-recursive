'use strict';

angular.module( 'dynamic-tree' ).factory('treeModelService', ['recursiveTreeModel', 'iterativeTreeModel', 'CONSTANTS',
    function(recursiveTreeModel, iterativeTreeModel, CONSTANTS) {

    return {
        getCurrentTree: function ( solutionType ) {
            if( solutionType === CONSTANTS.RECURSIVE ) {
                return recursiveTreeModel.getTree();
            }

            return iterativeTreeModel.getTree();
        },

        setCurrentTree: function ( solutionType, tree ) {
            if( solutionType === CONSTANTS.RECURSIVE ) {
                recursiveTreeModel.setTree(tree);
            } else {
                iterativeTreeModel.setTree(tree);
            }
        }
    };
}]);
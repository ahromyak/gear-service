angular.module('mainModule')
    .factory('warning', ['$rootScope', '$http', '$state', '$mdDialog', 'gettextCatalog',
        function($rootScope, $http, $state, $mdDialog, gettextCatalog) {

            var warning = {

                showConfirmUnsavedChanges: function(event) {

                    var confirmUnsavedChanges = $mdDialog.confirm()
                        .title(gettextCatalog.getString('would you like to continue without saving changes?'))
                        .content(gettextCatalog.getString("if you do not save your changes, then all the information will be lost"))
                        .ariaLabel('unsaved changes warning')
                        .targetEvent(undefined)
                        .ok(gettextCatalog.getString('continue'))
                        .cancel(gettextCatalog.getString('cancel'));

                    return $mdDialog.show(confirmUnsavedChanges);

                },

                showConfirmDeletePayment: function(event) {

                    var confirmDelete = $mdDialog.confirm()
                        .title(gettextCatalog.getString('would you like to delete payment?'))
                        .content(gettextCatalog.getString('deleted payment can not be recovered'))
                        .ariaLabel('delete payment warning')
                        .targetEvent(event)
                        .ok(gettextCatalog.getString('delete'))
                        .cancel(gettextCatalog.getString('cancel'));

                    return $mdDialog.show(confirmDelete);

                },

                showConfirmDeleteComment: function(event) {

                    var confirmDelete = $mdDialog.confirm()
                        .title(gettextCatalog.getString('would you like to delete comment?'))
                        .content(gettextCatalog.getString('deleted comment can not be recovered'))
                        .ariaLabel('delete comment warning')
                        .targetEvent(event)
                        .ok(gettextCatalog.getString('delete'))
                        .cancel(gettextCatalog.getString('cancel'));

                    return $mdDialog.show(confirmDelete);

                },

                showConfirmDeleteCheque: function(event) {

                    var confirmDelete = $mdDialog.confirm()
                        .title(gettextCatalog.getString('would you like to delete cheque?'))
                        .content(gettextCatalog.getString('deleted cheque can not be recovered'))
                        .ariaLabel('delete cheque warning')
                        .targetEvent(event)
                        .ok(gettextCatalog.getString('delete'))
                        .cancel(gettextCatalog.getString('cancel'));

                    return $mdDialog.show(confirmDelete);

                },

                showConfirmDeletePhoto: function(event) {

                    var confirmDelete = $mdDialog.confirm()
                        .title(gettextCatalog.getString('would you like to delete photo?'))
                        .content(gettextCatalog.getString('deleted photo can not be recovered'))
                        .ariaLabel('delete photo warning')
                        .targetEvent(event)
                        .ok(gettextCatalog.getString('delete'))
                        .cancel(gettextCatalog.getString('cancel'));

                    return $mdDialog.show(confirmDelete);

                }


            };

            return warning;
        }]);
angular.module('QSoftVN', []).service('Toastr', [function() {
    toastr.options.closeButton = true;
    toastr.options.preventDuplicates = false;
    toastr.options.positionClass = 'toast-center-center';
    toastr.options.newestOnTop = true;
    toastr.options.timeOut = 5000;
    this.success = function (message) {
        toastr.success(message);
    };

    this.info = function (message) {
        toastr.info(message);
    };

    this.warning = function (message) {
        toastr.warning(message);
    };

    this.error = function (message) {
        toastr.error(message);
    };
}]);
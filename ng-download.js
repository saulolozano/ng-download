(function () {

    /**
     * Download directive
     * https://github.com/saulolozano/ng-download
     * @author Saulo Lozano <sslozano.7@gmail.com>
     */

    'use strict';

    angular.module('ngDownload', [])

        /**
         *  Directive to trigger an asynchronous-like file download
         */
        .directive('ngDownload', function () {

            return {
                restrict: 'A',
                scope: {
                    params: '='
                },
                link: function ($scope, element, iAttrs) {

                    var form,
                        params,
                        paramsLength,
                        url;

                    iAttrs.$observe('ngDownload', function () {
                        url = iAttrs.href ? iAttrs.href : iAttrs.ngDownload;
                    });

                    element.on('click', function (e) {

                        e.stopPropagation();
                        e.preventDefault();

                        form = angular.element('<form id="ngDownloadForm" style="display:none" method="GET" action="' + url + '"></form>');

                        if (angular.isObject($scope.params)) {

                            params = Object.keys($scope.params),
                            paramsLength = params.length;

                            params.forEach(function (key) {
                                form.append('<input type="hidden" name="' + key + '" value="' +  $scope.params[key] + '">');
                            });

                        }

                        angular.element('body').append(form);

                        ngDownloadForm.submit();
                        ngDownloadForm.remove();

                    });


                }
            };
        });
})();
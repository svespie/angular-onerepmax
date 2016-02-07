(function () {
    'use strict';

    //noinspection JSUnresolvedFunction
    describe('angular.onerepmax', function () {
        var onerepmax = null;

        //noinspection JSUnresolvedFunction
        beforeEach(function () {
            //noinspection JSUnresolvedFunction
            module('angular.onerepmax');

            //noinspection JSUnresolvedFunction
            inject(function (_onerepmax_) {
                onerepmax = _onerepmax_;
            });
        });

        //noinspection JSUnresolvedFunction
        it('should have a calculate function', function () {
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            expect(angular.isFunction(onerepmax.calculate)).toBe(true);
        });
    });
}());
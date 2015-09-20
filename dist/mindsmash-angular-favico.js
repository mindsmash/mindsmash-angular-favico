(function(angular) {
    'use strict';
    
    function FavIco(badgeOptions) {
        var favico = new Favico(badgeOptions);
        
        this.badge = function(num) {
            favico.badge(num);
        };
        
        this.reset = function() {
            favico.reset();
        };
    }
    
    angular.module('mindsmash.favIco', [])
    
    .factory('FavIcoFactory', function() {
        
        var badgeOptions = {
            'bgColor'    : '#d00',
            'textColor'  : '#fff',
            'fontFamily' : 'sans-serif',
            'fontStyle'  : 'bold',
            'type'       : 'circle',
            'position'   : 'down',
            'animation'  : 'slide',
            'elementId'  : false,
            'element'    : false,
            'dataUrl'    : false
        };
        
        this.setOptions = function(options) {
            angular.extend(badgeOptions, options);
        };
        
        this.$get = function() {
            return new FavIco(badgeOptions);
        };
    });
    
})(angular);
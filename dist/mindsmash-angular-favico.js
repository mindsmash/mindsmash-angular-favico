(function(angular) {
    'use strict';
    
    function FavIco(badgeOptions) {
        var favico = badgeOptions ? new Favico(badgeOptions) : new Favico();
        
        this.badge = function() {
            return favico.badge.apply(this, arguments);
        };
        this.image = function() {
            return favico.image.apply(this, arguments);
        };
        this.video = function() {
            return favico.video.apply(this, arguments);
        };
        this.webcam = function() {
            return favico.webcam.apply(this, arguments);
        };
        
        this.reset = function() {
            return favico.reset.apply(this, arguments);
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
        
        this.setOptions = function(options, useDefaults) {
            badgeOptions = useDefaults ? angular.extend(badgeOptions, options) : options;
        };
        
        this.$get = function() {
            return new FavIco(badgeOptions);
        };
    });
    
})(angular);
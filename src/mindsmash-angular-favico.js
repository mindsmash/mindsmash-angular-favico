(function(angular) {
    'use strict';
    
    function Favicon(badgeOptions) {
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
    
    angular.module('mindsmash.favico', [])
    
    .provider('Favicon', function FaviconProvider() {
        
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
        
        this.$get = function FaviconFactory() {
            return new Favicon(badgeOptions);
        };
    });
    
})(angular);
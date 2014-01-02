;(function($, Mozilla) {

    // Only run the tour if user is on Firefox 29 for desktop.
    if (window.isFirefox() && !window.isMobile() && window.getFirefoxMasterVersion() >= 29) {
        var tour = new Mozilla.AustralisTour();
        tour.init();
        // in-page cta buttons can restart the tour
        $('.tour-cta-btn').on('click', tour.restartTour.bind(tour));
    }

})(window.jQuery, window.Mozilla);

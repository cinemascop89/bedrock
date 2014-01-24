;(function($, Mozilla) {

	var isMobile = (/Android|Mobile|Tablet|Fennec/i).test(navigator.userAgent);

    // Only run the tour if user is on Firefox 29 for desktop.
    if (window.isFirefox() && !isMobile && window.getFirefoxMasterVersion() >= 29) {
        var tour = new Mozilla.AustralisTour();
        tour.init();
        // in-page cta buttons can restart the tour
        $('.tour-cta-btn').show().on('click', tour.restartTour.bind(tour));
    }

})(window.jQuery, window.Mozilla);

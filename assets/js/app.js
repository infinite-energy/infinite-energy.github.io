/**
 * For quotes, add the "show more" option
 */
document.addEventListener('DOMContentLoaded', function() {
  var showMoreLinks = document.querySelectorAll('.quote-widget .show-more');

  showMoreLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentElement.classList.toggle('expanded');
    });
  });
});

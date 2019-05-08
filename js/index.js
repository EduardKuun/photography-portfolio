//Initially load 3 images on mobile, 4 on desktop. Load 4 images when Show More is clicked.
function LoadMoreImages(x) {
  if (x.matches) {
    $(function () {
      $(".img").slice(0, 3).show();
      $("#loadMore").on('click', function (e) {
          e.preventDefault();
          $(".img:hidden").slice(0, 4).fadeTo(200, 1);
          if ($('.img:hidden').length == 0) {
            $("#loadMore").hide();
          }
      });
    });
  } else {
    $(function () {
      $(".column-1 .img").slice(0, 2).show();
      $(".column-2 .img").slice(0, 2).show();
      $("#loadMore").on('click', function (e) {
          e.preventDefault();
          $(".column-1 .img:hidden").slice(0, 2).fadeTo(200, 1);
          $(".column-2 .img:hidden").slice(0, 2).fadeTo(200, 1);
          if ($('.img:hidden').length == 0) {
            $("#loadMore").hide();
          }
      });
    });
  }
}

var x = window.matchMedia("(max-width: 680px)"); // determine if the website is loaded on mobile or on a desktop
LoadMoreImages(x);
x.addListener(LoadMoreImages);

//Determines the year to place at footer after copyright symbol
var today = new Date();
var year = today.getFullYear();
var copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = year;
(function () {
  "use strict";
  var a;
  a = angular.module("suchanekApp", ["ngRoute", "ngAnimate", "bootstrapLightbox"]), a.config(["$routeProvider",
    function (a) {
      return a.when("/", {
        templateUrl: "views/omnie.html"
      }).when("/oferta", {
        templateUrl: "views/oferta.html",
        controller: "OfertaCtrl"
      }).when("/dorobek", {
        templateUrl: "views/dorobek.html"
      }).when("/galeria", {
        templateUrl: "views/galeria.html"
      }).when("/kontakt", {
        templateUrl: "views/kontakt.html",
        controller: "KontaktCtrl"
      }).otherwise({
        redirectTo: "/"
      })
    }]), a.controller("OfertaCtrl", function () {
    return $(".extender").find(".ext-title").click(function () {
      return $(this).next().slideToggle("fast"), $(".ext-content").not($(this).next()).slideUp("fast")
    })
  }), a.controller("NavCtrl", ["$scope", "$location",
    function (a, b) {
      return a.isActive = function (a) {
        return a === b.path()
      }, a.classActive = function (b) {
        return a.isActive(b) ? "active-btn" : "inactive-btn"
      }
    }]), a.controller("MobiCtrl", ["$scope", "$location",
    function () {
      return $(".menu-extender").click(function () {
        return $(".mob-menu").slideToggle(), $(".menu-extender").toggleClass("mob-btn-active"), $(".kontakt-extender").removeClass("mob-btn-active"), $(".mob-kontakt").hide(), $(".mob-menu").is(":hidden") ? $(".menu-extender").removeClass("mob-btn-active") : void 0
      }), $(".kontakt-extender").click(function () {
        return $(".mob-kontakt").slideToggle(), $(".kontakt-extender").toggleClass("mob-btn-active"), $(".menu-extender").removeClass("mob-btn-active"), $(".mob-menu").hide(), $(".mob-kontakt").is(":hidden") ? $(".kontakt-extender").removeClass("mob-btn-active") : void 0
      }), $(".mob-menu-btn").click(function () {
        return $(".menu-extender").removeClass("mob-btn-active"), $(".mob-menu").hide()
      }), $(".mob-menu").is(":hidden") && $(".menu-extender").removeClass("mob-btn-active"), $(".mob-menu").is(":hidden") ? $(".menu-extender").removeClass("mob-btn-active") : void 0
    }]), a.controller("MenuItemsCtrl", ["$scope",
    function (a) {
      return a.menuItems = [{
        name: "O Mnie",
        link: "#"
      }, {
        name: "Oferta",
        link: "#/oferta"
      }, {
        name: "Dorobek",
        link: "#/dorobek"
      }, {
        name: "Informacje",
        link: "#/informacje"
      }, {
        name: "Kontakt",
        link: "#/kontakt"
      }]
    }]), a.controller("KontaktCtrl", ["$scope",
    function () {
      return jQuery(function (a) {
        var b, c, d;
        return d = a(document).width() > 480 ? !0 : !1, c = function () {
          var a, b, c;
          return b = {
            center: new google.maps.LatLng(54.3794989, 18.6070189),
            zoom: 14,
            zoomControl: !0,
            streetViewControl: !1,
            draggable: d,
            scrollwheel: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle.DEFAULT
            },
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
            }
          }, a = new google.maps.Map(document.getElementById("map_dobosz"), b), c = new google.maps.Marker({
            map: a,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(54.3774989, 18.6050189),
            icon: "http://maps.google.com/mapfiles/arrow.png"
          })
        }, b = function () {
          var a, b, c;
          return b = {
            center: new google.maps.LatLng(54.44424, 18.558656),
            zoom: 14,
            streetViewControl: !1,
            draggable: d,
            scrollwheel: !1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoomControl: !0,
            zoomControlOptions: {
              style: google.maps.ZoomControlStyle.DEFAULT
            },
            mapTypeControlOptions: {
              mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
            }
          }, a = new google.maps.Map(document.getElementById("map_dermal"), b), c = new google.maps.Marker({
            map: a,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(54.44624, 18.556656),
            icon: "http://maps.google.com/mapfiles/arrow.png"
          })
        }, c(), b()
      })
    }]), a.controller("Gallery1Ctrl", ["$scope", "Lightbox",
    function (a, b) {
      return a.images = [{
        url: "images/galeria/zabieg.jpg",
        thumbUrl: "images/galeria/zabiegt.jpg"
      }, {
        url: "images/galeria/g1.jpg",
        thumbUrl: "images/galeria/g1t.jpg"
      }, {
        url: "images/galeria/g2.jpg",
        thumbUrl: "images/galeria/g2t.jpg"
      }, {
        url: "images/galeria/g4.jpg",
        thumbUrl: "images/galeria/g4t.jpg"
      }, {
        url: "images/galeria/g3.jpg",
        thumbUrl: "images/galeria/g3t.jpg"
      }, {
        url: "images/galeria/v1.jpg",
        thumbUrl: "images/galeria/v1t.jpg"
      }, {
        url: "images/galeria/v2.jpg",
        thumbUrl: "images/galeria/v2t.jpg"
      }, {
        url: "images/galeria/v3.jpg",
        thumbUrl: "images/galeria/v3t.jpg"
      }, {
        url: "images/galeria/v4.jpg",
        thumbUrl: "images/galeria/v4t.jpg"
      }], a.openLightboxModal = function (c) {
        return b.openModal(a.images, c)
      }
    }]), a.controller("Gallery2Ctrl", ["$scope", "Lightbox",
    function (a, b) {
      return a.images = [{
        url: "images/galeria/farba.jpg",
        caption: "Dodatnie testy płatkowe u pacjentki uczulonej na farby do włosów",
        thumbUrl: "images/galeria/farbat.jpg"
      }, {
        url: "images/galeria/grzybica.jpg",
        caption: "Grzybica skóry u osoby dorosłej",
        thumbUrl: "images/galeria/grzybicat.jpg"
      }, {
        url: "images/galeria/kosmetyki.jpg",
        caption: "Dodatnie próby płatkowe u pacjentki uczulonej na kosmetyki",
        thumbUrl: "images/galeria/kosmetykit.jpg"
      }, {
        url: "images/galeria/pylki.jpg",
        caption: "Dodatnie testy prick u pacjentki uczulonej na pyłki traw i drzew",
        thumbUrl: "images/galeria/pylkit.jpg"
      }, {
        url: "images/galeria/grzybicakot.jpg",
        caption: "Grzybica skóry u dziecka, źródłem zakażenia był kot",
        thumbUrl: "images/galeria/grzybicakott.jpg"
      }], a.openLightboxModal = function (c) {
        return b.openModal(a.images, c)
      }
    }]), a.controller("ToTopCtrl", ["$scope",
    function () {
      return function (a) {
        return a.fn.scrollToTop = function (b) {
          var c;
          return c = {
            speed: 800
          }, b && a.extend(c, {
            speed: b
          }), this.each(function () {
            var b;
            return b = a(this), a(window).scroll(function () {
              return a(this).scrollTop() > 100 ? b.fadeIn() : b.fadeOut()
            }), b.click(function (b) {
              return b.preventDefault(), a("body, html").animate({
                scrollTop: 0
              }, c.speed)
            })
          })
        }
      }(jQuery), $("#toTop").scrollToTop()
    }])
}).call(this);
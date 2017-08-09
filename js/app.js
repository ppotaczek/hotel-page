$(document).ready(function() {

  var page = {

    hamburgerMenu: function(){
      var el = $("#threeLines");

      el.on("click", function(){
        $(this).toggleClass("active");
        $(".mainMenu").toggleClass("visible");
      });
    },

    changeLanguage: function(){
      var languages = $(".languages").find("span");

      languages.on("click", function(){
        var actual = $("#actual").text();
        var _this = $(this).text();
        $(this).text(actual);
        $("#actual").text(_this);
      });
    },

    changePackages: function(){
      var images = $(".image").find("img");
      var num = 1;

      function next(){
        if (num > 2) {
          num = 0;
        }
        num++;
        operation();
      }
      function prev(){
        if (num < 2) {
          num = 4;
        }
        num--;
        operation();
      }
      function operation(){
        images.parent().hide();
        var index = num * 3 - 2;
        $.each(images, function(){
          src = "img/package"+index+".png";
          $(this).attr("src", src);
          index++;
        });
        images.parent().fadeIn("slow");
      }

      $("#leftArrow").on("click", function(){
        prev();
      });

      $("#rightArrow").on("click", function(){
        next();
      });
    },

    checkbox: function(){
      var checkbox = $(".checkbox");
      checkbox.on("click", function(){
        $(this).toggleClass("checked");
      });
    },

    imageNavigation: function(){
      var next = $(".navigation").find(".next");
      var prev = $(".navigation").find(".prev");
      var num = 1;

      next.on("click", function(){
        var toChange = $(this).parent().parent();
        var name = toChange.parent().attr("id");
        num++;
        num > 3 ? num = 1 : true;
        toChange.css("background-image", 'url(img/' + name + num + '.png)');
      });
      prev.on("click", function(){
        var toChange = $(this).parent().parent();
        var name = toChange.parent().attr("id");
        num--;
        num < 1 ? num = 3 : true;
        toChange.css("background-image", 'url(img/' + name + num + '.png)');
      });
    },

    autoSlider: function(){
      var spaInterval;
      var confInterval;

      var spa = function(){
        spaInterval = setInterval(function(){
          $("#spa .next").trigger("click");
        }, 5000);
      }

      var conf = function(){
        confInterval = setInterval(function(){
          $("#conferences .next").trigger("click");
        }, 5000);
      }

      var packagesInterval = setInterval(function(){
        $("#rightArrow").trigger("click");
      }, 5000);

      function spaHandler1() {
        clearInterval(spaInterval);
        $(this).one("click", spaHandler2);
      }
      function spaHandler2() {
        spa();
        $(this).one("click", spaHandler1);
      }
      function confHandler1() {
        clearInterval(confInterval);
        $(this).one("click", confHandler2);
      }
      function confHandler2() {
        conf();
        $(this).one("click", confHandler1);
      }

      spa();
      conf();
      
      $("#stopSpa").one("click", spaHandler1);
      $("#stopConf").one("click", confHandler1);
    },

    main: function(){
      this.hamburgerMenu();
      this.changePackages();
      this.changeLanguage();
      this.checkbox();
      this.imageNavigation();
      this.autoSlider();
    }
  }

  page.main();
});

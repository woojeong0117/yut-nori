$(".play_btn").click(function () {
  $(".play_wrap > div.yut04").removeClass("nak");
  $(this).prop("disabled", true);
  $(".play_wrap > div").addClass("rotate");

  setTimeout(() => {
    var nak = Math.floor(Math.random() * 9) + 1;

    if (nak == 7) {
      $(".yut04").addClass("nak");
    }

    for (var i = 1; i <= 4; i++) {
      eval("random0" + i + "=Math.floor(Math.random()*2) +1;");

      var ran = eval("random0" + i);
      if (ran == 1) {
        $(".play_wrap > div.yut0" + i).removeClass("active");
      } else {
        $(".play_wrap > div.yut0" + i).addClass("active");
      }
    }
    $(".play_wrap > div").removeClass("rotate");
    var activeCount = $("div.active").length;
    setTimeout(() => {
      $(".result_wrap").addClass("on");
      $("h3").text("윷놀이를 해보자");
    }, 1000);
    if ($(".play_wrap > div").hasClass("nak")) {
      $(".txt").text("낙!!!!!😋😋").style("color", "red");
    } else {
      switch (activeCount) {
        case 0:
          $(".txt").text("모");
          $(".btn_more").show();
          $(".retry").hide();

          break;
        case 1:
          if ($(".play_wrap > div.yut04").hasClass("active")) {
            $(".txt").text("빽도!!!!!!😜😜").style("color", "red");
          } else {
            $(".txt").text("도");
          }

          break;
        case 2:
          $(".txt").text("개");
          break;
        case 3:
          $(".txt").text("걸");
          break;
        case 4:
          $(".txt").text("윷");
          $(".btn_more").show();
          $(".retry").hide();
          break;
      }
    }
    console.log($(".txt").text());
  }, 900);

  $(".play_btn").prop("disabled", false);
});

$(".retry").click(function () {
  location.reload();
});

$(".btn_more").click(function () {
  $(".result_wrap").removeClass("on");
  var retryText = $(".txt").text();
  $("h3").text(`${retryText}(이)가 나왔으니 한판더~`);
  $(".retry").show();
  $(".btn_more").hide();
});

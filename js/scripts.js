$(document).ready(function() {
  $(".gameCat1").addClass("navClass");

  $(".gameCat1").click(function() {
    $(".gameCat1").addClass("navClass");
    $(".gameCat2").removeClass("navClass");
    $(".gameCat3").removeClass("navClass");
  });
  $(".gameCat2").click(function() {
    $(".gameCat2").addClass("navClass");
    $(".gameCat1").removeClass("navClass");
    $(".gameCat3").removeClass("navClass");
  });
  $(".gameCat3").click(function() {
    $(".gameCat3").addClass("navClass");
    $(".gameCat2").removeClass("navClass");
    $(".gameCat1").removeClass("navClass");
  });

  // $(".pagination>li:nth-child(7)").addClass("paginationClass");

  $(".page-item").click(function() {
    let pageItems = $(".paginationClass");
    for (const item of pageItems) {
      if (item.className === "page-item paginationClass") {
        console.log(true);
        item.className = "page-item";
      } else {
        console.log(false);
      }
    }
    $(this).addClass("paginationClass");
  });
  // $(".pagination li:nth-child(3)").click.addClass("paginationClass");
  // $(".pagination li:nth-child(4)").click.addClass("paginationClass");
  // $(".pagination li:nth-child(5)").click.addClass("paginationClass");
  // $(".pagination li:nth-child(6)").click.addClass("paginationClass");

  // if ($(".pagination li:nth-child(2)").hasClass("paginationClass")) {
  //     $(".pagination li:nth-child(1)").removeClass("paginationClass");
  //     $(".pagination li:nth-child(6)").addClass("paginationClass");
  // }
});

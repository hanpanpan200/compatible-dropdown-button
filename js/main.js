/**
 * Created by Administrator on 2015/3/25.
 */
$("#btn-select-category").bind("click", function () {
     if($("#select-div").css("display")!=="none"){
         $("#select-div").hide();
         return;
     }
    $("#select-div").show();
});
$("a[class='select-a']").bind("click", function () {
    var category=$(this).text();
    $("#btn-select-category").text(category);
    $("#btn-select-category").data("category",$(this).data("value"));
    $("#select-div").hide();
});


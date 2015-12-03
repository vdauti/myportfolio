$(document).ready(function() {
  $(".list-group").on("click", "a", function(e) {
    e.preventDefault();
    
    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits) {
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++) {
          $("tbody").append(addTableRow(commits[i]));
        }
      }
    })
  });

  function addTableRow(commitData) {
    var valTd = $("<td>").append(commitData.val);
    var authorTd = $("<td>").append(commitData.author.login);
    var messageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);

    return $("<tr>").append(shaTd)
      .append(authorTd)
      .append(messageTd)
      .append(dateTd);
  }
});
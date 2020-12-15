$(function() {
  function addUser(user) {
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーの名前</p>
                  <div class="ChatMember__add ChatMember__button" data-user-id="ユーザーのID" data-user-name="ユーザーの名前">追加</div>
                </div>
                 `;
    $("#UserSearchResult").append(html);
  }

  function addNoUser() {
    let html = `
                <div class="ChatMember clearfix">
                  <p class="ChatMember__name">ユーザーが見つかりません</p>
                </div>
                `;
  }
  
  $("UserSearch__field").on("keyup",function() {
    let input = $("UserSearch__field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(users) {
      console.log("成功です");
    })
    .fail(function() {
      console.log("失敗です");
    });
  });
});
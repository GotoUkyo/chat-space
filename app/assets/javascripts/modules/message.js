$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="chat-main__field__list" data-message-id=${message.id}>
          <div class="name-day">
            <div class="name-day__name">
              ${message.user_name}
            </div>
            <div class="name-day__day">
              ${message.created_at}
            </div>
          </div>
          <div class="text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" scr="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="chat-main__field__list" data-message-id=${message.id}>
        <div class="name-day">
          <div class="name-day__name">
            ${message.user_name}
          </div>
          <div class="name-day__day">
            ${message.created_at}
          </div>
        </div>
        <div class="text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.chat-main__field').append(html);
      $('.chat-main__field').animate({ scrollTop: $('.chat-main__field')[0].scrollHeight});
      $('.Form')[0].reset();
      $('input').prop('disabled', false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  });
});
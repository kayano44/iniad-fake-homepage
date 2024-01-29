$(document).ready(function() {
    $('img').hover(
      function() {
        // マウスオーバー時の処理
        $(this).data('original-src', $(this).attr('src'));  // 元の画像を記憶
        $(this).attr('src', $(this).data('hover-src'));     // ホバー画像に変更
      },
      function() {
        // マウスアウト時の処理
        $(this).attr('src', $(this).data('original-src'));  // 元の画像に戻す
      }
    );
  });
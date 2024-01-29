$(document).ready(function() {
    // フロア画像のホバーイベント
    $('.container_floor img').hover(
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
  
    // フロア画像のクリックイベント
    $('.container_floor img').click(function() {
      // フロア画像のalt属性からフロア番号を取得
      var floorNumber = $(this).attr('alt').charAt(0);
      // 対応するフロアのHTMLファイルのパスを構築
      var floorPath = floorNumber + 'st_floor.html';
      // HTMLファイルへの移動
      window.location.href = floorPath;
    });
  });
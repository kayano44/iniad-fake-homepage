$(document).ready(function() {
    
    // フロア画像のホバーイベントで画像変更とフロア表示変更
    $('.container_floor img').hover(
        // マウスオーバー時の処理
        function() {
            // 画像をホバー画像に変更
            $(this).data('original-src', $(this).attr('src')); // 元の画像を記憶
            $(this).attr('src', $(this).data('hover-src')); // ホバー画像に変更
            
            // h2タグのテキストを変更
            var floorNumber = $(this).attr('alt').charAt(0); // フロア番号を取得
            $(".floor-info h2").text(floorNumber + 'F会議室フロア'); // 内容を変更
        },
        
        // マウスアウト時の処理
        function() {
            // 画像を元の画像に戻す
            $(this).attr('src', $(this).data('original-src')); // 元の画像に戻す
            
            // h2タグのテキストを元に戻す
            $(".floor-info h2").text("会議室フロア"); // 元の内容に戻す
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
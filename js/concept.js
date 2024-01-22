var currentImageIndex = 1; // 現在の画像のインデックス

  // マウスオーバー時の処理
  function mouseOn() {
    var obj = document.getElementById("logo");
    currentImageIndex = (currentImageIndex % 4) + 1; // 1から4までループ
    obj.src = "img/meeting" + currentImageIndex + ".png";
  }

  // マウスアウト時の処理
  function mouseOff() {
    var obj = document.getElementById("logo");
    obj.src = "img/meeting1.png"; // マウスアウト時は最初の画像に戻す
  }


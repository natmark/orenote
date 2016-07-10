function newFile(){
  var planeText = document.getElementById('inputText').value;
  if(planeText.length != 0){
     if (!confirm("入力されている内容は消えてしまいますが、よろしいですか？")) return;
  }
  document.getElementById('titleArea').value = "new file";
  document.getElementById('inputText').value = "";
  document.getElementById('markdown_content').innerHTML = "";
}
function saveFile(){
  var title = document.getElementById('titleArea').value;
  var planeText = document.getElementById('inputText').value;
  if(planeText.length == 0){
    alert("ファイルの中身が入力されていません。");
    return;
  }
  var blob = new Blob([planeText], {type: "text/plain"}); // バイナリデータを作ります。
  // IEか他ブラウザかの判定
  if(window.navigator.msSaveBlob){
      // IEなら独自関数を使います。
      window.navigator.msSaveBlob(blob, title + ".txt");
  } else {
      // それ以外はaタグを利用してイベントを発火させます
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.target = '_blank';
      a.download = title + '.txt';
      a.click();
  }
}
function openSetting(){
  alert("openSetting");
}

cidn = getUrlParam('cid');
showurl = "showurl" //Don't change this
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2]);
    }
    return null;
}
function encrypt(data) {
    var text = data;
    var textBytes = aesjs.utils.utf8.toBytes(text);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var encryptedBytes = aesCtr.encrypt(textBytes);
    var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex
}
function decrypt(data) {
    var encryptedBytes = aesjs.utils.hex.toBytes(data);
    var aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
    var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
    return decryptedText;
}

function displayURL(url) {
    $.ajax({
        url: urlShortener,
        dataType: 'text',
        data: 'url=' + url,
        type: 'POST',
        success: function (data) {
            document.getElementById("results").innerHTML = "您上传的剪贴板的地址为：" + "<div class='bg-white text-black rounded-lg'><div id='showurl'>" + data + '</div><button id="copy2" class="bg-red-500 text-white rounded-full box-border text-2xl h-8" onclick="copy_to_clipboard(document.getElementById(showurl).innerHTML)"> 复制 </button></div>';
        },
        error: function () {
            document.getElementById("results").innerHTML = "抱歉，出了些问题！";
        }
    });
}
function copy_to_clipboard(text) {
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
}
if (cidn !== null) {
    content = document.getElementById('content');
    content.innerHTML = '<div class="text-cyan-500">本剪贴板的数据为：</div><textarea rows="10" cols="30" id="datum" class="rounded-lg bg-white text-xl" disabled></textarea><p><button id="copy" class="bg-red-500 text-white rounded-full box-border text-2xl h-8"> 复制 </button></p>';

    document.getElementById("datum").value = "正在下载并解密，请耐心等待…… \n 1分钟后不显示可以刷新一下~"
    $.ajax({
        url: ipfsNode + "/api/v0/cat?arg=" + cidn,
        dataType: 'Text',
        type: 'post',
        success: function (data) {
            document.getElementById("datum").value = decrypt(data);
        },
        error: function () {
            document.getElementById("datum").innerHTML = "抱歉，出了些问题！";
        }
    });
}
document.getElementById("upload").onclick = async function () {
    const ipfs = window.IpfsHttpClient.create({ url: ipfsNode });
    document.getElementById("results").innerHTML = "正在加密并上传，请耐心等待……";
    const result = await ipfs.add(encrypt(document.getElementById('datum').value));
    displayURL(window.location.href + '?cid=' + result["path"]);
}
document.getElementById("copy").addEventListener("click", function () {
    copy_to_clipboard(document.getElementById("datum").value);
    document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + "<p>复制完毕！</p>";
});
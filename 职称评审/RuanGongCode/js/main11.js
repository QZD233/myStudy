/* var obj = {};
obj.GetLength = function(str) { // str是输入的字符串
    return str.replace(/[\u0391-\uFFE5]/g,"aa").length;   // 先把中文替换成两个字节的英文，再计算长度
};
// alert(obj.GetLength('这是中文aaaaaa'));
 
 var tExt = document.getElementById('tExt');
 var tExt2 = document.getElementById('tExt2');
 var tExt3 = document.getElementById('tExt3');

 var vAlue = obj.GetLength(tExt.value);
//  alert(vAlue);
 tExt2.innerHTML = vAlue;
 */
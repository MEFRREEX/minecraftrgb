function func() {
    var num1 = Number(document.getElementById("r").value);
    var num2 = Number(document.getElementById("g").value);
    var num3 = Number(document.getElementById("b").value);
    var result1 = (num1 / 255).toFixed(3);
    var result2 = (num2 / 255).toFixed(3);
    var result3 = (num3 / 255).toFixed(3);
    document.getElementById("result1").innerHTML = result1;
    document.getElementById("result2").innerHTML = result2;
    document.getElementById("result3").innerHTML = result3;
}
function copyToClipboard(input) {
    var num = Number(document.getElementById(input).value);
    var result = (num / 255).toFixed(3);
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(result);
        return;
    }
    navigator.clipboard.writeText(result).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
$('body').on('input', 'input[type="number"][maxlength]', function(){
    if (this.value.length > this.maxLength){
        this.value = this.value.slice(0, this.maxLength);
    }
});
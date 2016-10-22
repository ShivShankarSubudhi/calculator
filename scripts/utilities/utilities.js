function formatInput(input_str){
    var input_operator = ['+','-','/','*','%'];
    var output_operator = [' + ',' - ',' / ',' * ',' % '];
    input_operator.forEach(function(element,index){
        var output = output_operator[index];
        input_str.input = replaceAll(element,output,input_str.input);
    });
    return input_str;
}
function replaceAll (search, replacement,target) {
    return target.split(search).join(replacement);
}

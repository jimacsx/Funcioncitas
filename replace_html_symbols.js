var Replace_html_symbols = function(){
	
	function replace_chars(str){
		/*obj with words to replace*/
		var chars = {
			"&aacute;" : "á",
			"&eacute;" : "é",
			"&iacute;" : "í",
			"&oacute;" : "ó",
			"&uacute;" : "ú",
			"&ntilde;" : "ñ"
		}
		for(c in chars){
			str = str.replace(new RegExp(c.replace(), 'g'), chars[c]);
		}
		return str;
	}
	
	return{
		replace:replace_chars
	}
}();

$(function(){
	Replace_html_symbols.replace();
});


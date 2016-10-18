var replace_chars = function(str){
		var chars = {
			"&aacute;": "á",
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

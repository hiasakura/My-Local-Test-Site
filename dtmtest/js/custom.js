function get_sex(){
	var ans = ((Math.random() * 100 ) > 50 ) ? 'male' : 'female';
	return ans;
}

function getQueryString(variable){
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
}
function getCusID(){
	
	var cusID = "";
	var name = "crm";
	var period = 7;
	var isSetCusId = false;

	if (document.cookie) {
		var cookies = document.cookie.split("; ");
		for (var i = 0; i < cookies.length; i++) {
			var str = cookies[i].split("=");
			if (str[0] == name) {
				var cookie_value = unescape(str[1]);
				cusID = cookie_value;
				isSetCusId = true;
				break;
			}
		}
	} 


	if(!isSetCusId){
		cusID = Math.random().toString(36).slice(-8);
		var nowtime = new Date().getTime();
		var clear_time = new Date(nowtime + (60 * 60 * 24 * 1000 * period));
		var expires = clear_time.toGMTString();
		document.cookie = name + "=" + escape(cusID) + "; expires=" + expires;
	}

	return cusID;
}
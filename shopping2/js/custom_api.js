/*!
 * テンプレート以外のカスタマイズメソッド 
 *
 */

/** 定数定義  */
var CONST_SICIAL_TWITTER = 'twitter';
var CONST_SICIAL_FACEBOOK = 'facebook';
var CONST_SICIAL_GOOGLE = 'google';


/** Socialアイコン処理  */
function call_social_api(className){

	// twitter
	if(className.match(CONST_SICIAL_TWITTER)){
	
		alert('Social API Call Done Successfully: ' + CONST_SICIAL_TWITTER);
	
	// facebook
	} else if (className.match(CONST_SICIAL_FACEBOOK)){

		alert('Social API Call Done Successfully: ' + CONST_SICIAL_FACEBOOK);

	// google
	} else if (className.match(CONST_SICIAL_GOOGLE)){

		alert('Social API Call Done Successfully: ' + CONST_SICIAL_GOOGLE);

	}
}


/** Mailのサブスクリプション  */
function subscribe_mail(address){

//	if(address == ''){

//		alert('e-mail is blank');
//		return false;

//	}

//	alert('Subscription Successfully: ' + address);

}


function test(){

}

/** checkOrder処理 */
function checkOrder(){

	location.href = "confirm.html";

}
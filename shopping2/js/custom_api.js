/*!
 * �e���v���[�g�ȊO�̃J�X�^�}�C�Y���\�b�h 
 *
 */

/** �萔��`  */
var CONST_SICIAL_TWITTER = 'twitter';
var CONST_SICIAL_FACEBOOK = 'facebook';
var CONST_SICIAL_GOOGLE = 'google';


/** Social�A�C�R������  */
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


/** Mail�̃T�u�X�N���v�V����  */
function subscribe_mail(address){

//	if(address == ''){

//		alert('e-mail is blank');
//		return false;

//	}

//	alert('Subscription Successfully: ' + address);

}


function test(){

}

/** checkOrder���� */
function checkOrder(){

	location.href = "confirm.html";

}
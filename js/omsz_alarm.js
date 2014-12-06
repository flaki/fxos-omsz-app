function menu_click(){	
	var alarm_area_obj = document.getElementById("alarm_area");
	var settings_menu = document.getElementById("settings_menu")
	if(hasClass(settings_menu,"vsb")){
		removeclassname(settings_menu,"vsb");
		alarm_area_obj.className = alarm_area_obj.className + " vsb";
	}
	else{
		settings_menu.className = settings_menu.className + " vsb";
		removeclassname(alarm_area_obj,"vsb");
	}
}
function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
}


function removeclassname(a_obj,a_class){
	a_obj.className = a_obj.className.replace(a_class, "");
}


function gps_check_box_clk(obj){
	form_obj = document.getElementById("form_element");
	if(obj.checked == true){
		form_obj.className = form_obj.className + " vsb"; 
	}
	else{
		removeclassname(form_obj,"vsb");
	}
}
function refresh_alarm()
{
var alEvent="Nincs esemeny";
var alLevel="2";
var alDesc="Minden rendben";

//TODO: meghivni az OMSZ-t
var actDate= new Date();
document.getElementById("alarm_icon").className="alarm_icon_" + alLevel;
document.getElementById("alarm_event").innerHTML=alEvent;
document.getElementById("alarm_desc").innerHTML=alDesc;
document.getElementById("last_refresh_date").innerHTML=actDate.getFullYear() + "." + (actDate.getMonth()+1) + "." + actDate.getDate() + ". " + actDate.getHours() + ":" + actDate.getMinutes() + ":" + actDate.getSeconds();


}
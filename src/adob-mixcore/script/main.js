/*--------------------------------------------------------------*/
/*****************************************************************
*jquery-ui section                                               *
******************************************************************/
$("#accordion_template").accordion();
$("#tabs_template").tabs();
$("#dialog_template_link1").click(function(event){
	$("#dialog_template_1").dialog("open");
	event.preventDefault();
});
$("#dialog_template_1").dialog({
	autoOpen: false,
	width: 200,
	buttons:[
		{
			text: "Ok",
			click: function(){
				$(this).dialog("close");
			}
		},
		{
			text: "Cancel",
			click: function(){
				$(this).dialog("close");
			}
		}
	]
});

$( "#accordion" ).accordion();

var availableTags = [
	"ActionScript",
	"AppleScript",
	"Asp",
	"BASIC",
	"C",
	"C++",
	"Clojure",
	"COBOL",
	"ColdFusion",
	"Erlang",
	"Fortran",
	"Groovy",
	"Haskell",
	"Java",
	"JavaScript",
	"Lisp",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Scala",
	"Scheme"
];
$( "#autocomplete" ).autocomplete({
	source: availableTags
});

$( "#button" ).button();
$( "#button-icon" ).button({
	icon: "ui-icon-gear",
	showLabel: false
});

$( "#radioset" ).buttonset();

$( "#controlgroup" ).controlgroup();

$( "#tabs" ).tabs();

$( "#dialog" ).dialog({
	autoOpen: false,
	width: 400,
	buttons: [
		{
			text: "Ok",
			click: function() {
				$( this ).dialog( "close" );
			}
		},
		{
			text: "Cancel",
			click: function() {
				$( this ).dialog( "close" );
			}
		}
	]
});

// Link to open the dialog
$( "#dialog-link" ).click(function( event ) {
	$( "#dialog" ).dialog( "open" );
	event.preventDefault();
});

$( "#datepicker" ).datepicker({
	inline: true
});

$( "#slider" ).slider({
	range: true,
	values: [ 17, 67 ]
});

$( "#progressbar" ).progressbar({
	value: 20
});

$( "#spinner" ).spinner();

$( "#menu" ).menu();

$( "#tooltip" ).tooltip();

$( "#selectmenu" ).selectmenu();

// Hover states on the static widgets
$( "#dialog-link, #icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);

/*--------------------------------------------------------------*/
/*****************************************************************
*bootstrap section                                               *
******************************************************************/
$("#alert_template").hide();
$('[data-toggle="tooltip"]').tooltip();
$("[data-toggle='popover']").popover();

/* Service Page Alert Manage section */
	/* ########## */
//ShowTAlert ("", "", int);
//@Param AlertId => AlertSPSuccess, AlertSPInfo, AlertSPWarning, AlertSPDanger
// e.g. ShowTAlert ("AlertSPInfo", "Test", 5000);
function ShowTAlert (AlertId, Amassage, time){
	$("#"+ AlertId).show();
	$("#st1").remove();
	$("#"+AlertId).append("<b id='st1'>" + Amassage + "</b>");
	window.setTimeout(function (){
		$("#"+ AlertId).hide();
		$("#st1").remove();
	}, time);
}
	/* ########## */

	/* ########## */
//MakeAlert ("", "", "", "", int) 
//@Param AlertType => alert-success, alert-info, alert-warning, alert-danger
//e.g. MakeAlert("AlertSPSection", "AlertSPSuccess", "alert-info", "Success", 5000);
function MakeAlert(containerId, AlertId, AlertType, Amassage, time){
	var Structure = '<div class="alert ' +AlertType + ' alert-dismissable"' + ' ' + 'id="' + AlertId + '" >' + '<b>' +Amassage + '</b>'+ '<button  type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button></div>'
	$("#" + AlertId).remove();
	$("#"+ containerId).append(Structure);
	window.setTimeout(function (){
		$("#" + AlertId).hide();
		$("#" + AlertId).remove();
	}, time);
}
	/* ########## */
/* Service Page Alert Manage section */





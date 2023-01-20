function changeBGColors() {
	$("tr:contains('FeladasiIgazolas')").css( "color", "#ddd" );
	$("tr:contains('LetoltesiIgazolas')").css( "color", "#ddd" );
	$("tr:contains('NAV')").css( "backgroundColor", "yellow" );
	$("tr:contains('Hivatal')").css( "backgroundColor", "yellow" );
	$("tr:contains('CEGINFO')").css( "backgroundColor", "yellow" );
	$("tr:contains('Értesítés - Tájékoztatás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("tr:contains('Elektronikus értesítés')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("tr:contains('IGAZOL, Igazolás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("tr:contains('OEP_foglalkoztatoi_ig_V')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("tr:contains('Elfogadott bizonylat')").css( "backgroundColor", "rgb(188, 255, 187)" );
	$("tr:contains('Értesítés - Intézkedés')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("tr:contains('Elutasító nyugta')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("tr:contains('Felszólítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("tr:contains('Elutasítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("tr:contains('hibaüzenet')").css( "backgroundColor", "rgb(255, 198, 198)" );
}

var target = document.body;
var observer = new MutationObserver(function(mutation){
	changeBGColors();
});
var config = {childList: true, subtree:true};
observer.observe(target,config);
function changeBGColors() {
	$("td:contains('FeladasiIgazolas')").css( "color", "#ddd" );
	$("td:contains('LetoltesiIgazolas')").css( "color", "#ddd" );
	$("td:contains('NAV')").css( "backgroundColor", "yellow" );
	$("td:contains('Hivatal')").css( "backgroundColor", "yellow" );
	$("td:contains('CEGINFO')").css( "backgroundColor", "yellow" );
	$("td:contains('Értesítés - Tájékoztatás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:contains('Elektronikus értesítés')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:contains('IGAZOL, Igazolás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:contains('OEP_foglalkoztatoi_ig_V')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:contains('Elfogadott bizonylat')").css( "backgroundColor", "rgb(188, 255, 187)" );
	$("td:contains('Értesítés - Intézkedés')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:contains('Elutasító nyugta')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:contains('Felszólítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:contains('Elutasítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:contains('hibaüzenet')").css( "backgroundColor", "rgb(255, 198, 198)" );
}

var target = document.body;
var observer = new MutationObserver(function(mutation){
	changeBGColors();
});
var config = {childList: true, subtree:true};
observer.observe(target,config);
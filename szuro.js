function changeBGColors() {
	$("td:conntains('FeladasiIgazolas')").css( "color", "#ddd" );
	$("td:conntains('LetoltesiIgazolas')").css( "color", "#ddd" );
	$("td:conntains('NAV')").css( "backgroundColor", "yellow" );
	$("td:conntains('Hivatal')").css( "backgroundColor", "yellow" );
	$("td:conntains('CEGINFO')").css( "backgroundColor", "yellow" );
	$("td:conntains('Értesítés - Tájékoztatás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:conntains('Elektronikus értesítés')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:conntains('IGAZOL, Igazolás')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:conntains('OEP_foglalkoztatoi_ig_V')").css( "backgroundColor", "rgb(227, 236, 255)" );
	$("td:conntains('Elfogadott bizonylat')").css( "backgroundColor", "rgb(188, 255, 187)" );
	$("td:conntains('Értesítés - Intézkedés')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:conntains('Elutasító nyugta')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:conntains('Felszólítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:conntains('Elutasítás')").css( "backgroundColor", "rgb(255, 198, 198)" );
	$("td:conntains('hibaüzenet')").css( "backgroundColor", "rgb(255, 198, 198)" );
}

var target = document.body;
var observer = new MutationObserver(function(mutation){
	changeBGColors();
});
var config = {childList: true, subtree:true};
observer.observe(target,config);
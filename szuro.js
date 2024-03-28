function changeBGColors() {
	var trs = document.querySelectorAll("tr")

	trs.forEach(function (tr) {
		var tds = tr.querySelectorAll("td")

		// Iterate over the <td> elements
		tds.forEach(function (td, index) {
			var prevPrevTD = index > 0 ? tds[index - 2] : null // Select previous previous <td> if it exists
			var prevTD = index > 0 ? tds[index - 1] : null // Select previous <td> if it exists
			var secondTD = td // Current <td>
			var nextTD = index + 1 < tds.length ? tds[index + 1] : null // Select next <td> if it exists

			if (index === 2 && prevPrevTD &&prevTD && secondTD && nextTD) {
				// Check the content of the second <td> element only
				if (
					secondTD.textContent.includes("FeladasiIgazolas") ||
					secondTD.textContent.includes("LetoltesiIgazolas")
				) {
					prevPrevTD.style.backgroundColor = "#ddd"
					prevTD.style.backgroundColor = "#ddd"
					secondTD.style.backgroundColor = "#ddd"
					nextTD.style.backgroundColor = "#ddd"
				} else if (
					secondTD.textContent.includes("NAV") ||
					secondTD.textContent.includes("Hivatal") ||
					secondTD.textContent.includes("CEGINFO")
				) {
					prevPrevTD.style.backgroundColor = "#FFFF00"
					prevTD.style.backgroundColor = "#FFFF00"
					secondTD.style.backgroundColor = "#FFFF00"
					nextTD.style.backgroundColor = "#FFFF00"
				} else if (
					secondTD.textContent.includes("Értesítés - Tájékoztatás") ||
					secondTD.textContent.includes("Elektronikus értesítés") ||
					secondTD.textContent.includes("IGAZOL, Igazolás") ||
					secondTD.textContent.includes("OEP_foglalkoztatoi_ig_V")
				) {
					prevPrevTD.style.backgroundColor = "#E3ECFF"
					prevTD.style.backgroundColor = "#E3ECFF"
					secondTD.style.backgroundColor = "#E3ECFF"
					nextTD.style.backgroundColor = "#E3ECFF"
				} else if (secondTD.textContent.includes("Elfogadott bizonylat")) {
					prevPrevTD.style.backgroundColor = "#BCFFBB"
					prevTD.style.backgroundColor = "#BCFFBB"
					secondTD.style.backgroundColor = "#BCFFBB"
					nextTD.style.backgroundColor = "#BCFFBB"
				} else if (
					secondTD.textContent.includes("Értesítés - Intézkedés") ||
					secondTD.textContent.includes("Elutasító nyugta") ||
					secondTD.textContent.includes("Felszólítás") ||
					secondTD.textContent.includes("Elutasítás") ||
					secondTD.textContent.includes("hibaüzenet")
				) {
					prevPrevTD.style.backgroundColor = "#FFCCCC"
					prevTD.style.backgroundColor = "#FFCCCC"
					secondTD.style.backgroundColor = "#FFCCCC"
					nextTD.style.backgroundColor = "#FFCCCC"
				}
			}
		})
	})
}

var target = document.body
var observer = new MutationObserver(function (mutation) {
	changeBGColors()
})
var config = { childList: true, subtree: true }
observer.observe(target, config)

const bgModel3 = document.getElementById('slot-bg-m3')
const bgModely = document.getElementById('slot-bg-my')
const bgModels = document.getElementById('slot-bg-ms')
const bgModelx = document.getElementById('slot-bg-mx')
const bgSolarpanels = document.getElementById('slot-bg-sp')
const bgSolarroof = document.getElementById('slot-bg-sr')
const bgPowerwall = document.getElementById('slot-bg-pw')

const mediaQr = window.matchMedia(`(max-width: 620px)`)
const changeSize = (media) => {
	if (media.matches) {
		bgModel3.setAttribute("src", "../public/model-3-mobile.avif")
		bgModely.setAttribute("src", "../public/model-y-mobile.avif")
		bgModels.setAttribute("src", "../public/model-s-mobile.avif")
		bgModelx.setAttribute("src", "../public/model-x-mobile.avif")
		bgSolarpanels.setAttribute("src", "../public/solar-panels-mobile.avif")
		bgSolarroof.setAttribute("src", "../public/solar-roof-mobile.avif")
		bgPowerwall.setAttribute("src", "../public/powerwall-mobile.avif")
	}
	else {
		bgModel3.setAttribute("src", "../public/model-3.avif")
		bgModely.setAttribute("src", "../public/model-y.avif")
		bgModels.setAttribute("src", "../public/model-s.avif")
		bgModelx.setAttribute("src", "../public/model-x.avif")
		bgSolarpanels.setAttribute("src", "../public/solar-panels.avif")
		bgSolarroof.setAttribute("src", "../public/solar-roof.avif")
		bgPowerwall.setAttribute("src", "../public/powerwall.avif")
	}
}
mediaQr.addListener(changeSize)
changeSize(mediaQr)
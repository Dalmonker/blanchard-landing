if (document.querySelector(".accordion__heading") !== null) {
	const acc = document.getElementsByClassName("accordion__heading");

	openFirstAccTab();

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			closeAccTabs();
			if (!acc[i].classList.contains("active")) {
				toggleAcc(this);
				console.log('Non Active');
			} else {
				closeAccTabs();
				console.log('Active');
			}
		});
	}
	// Open/close tab
	function toggleAcc(e) {
		e.classList.toggle("active");
		var panel = e.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	}

	// Closing an open accordion tab when clicking on another one (if needed)
	function closeAccTabs() {
		for (let i = 0; i < acc.length; i++) {
			if (acc[i].classList.contains("active")) {
				acc[i].classList.remove("active");
				acc[i].nextElementSibling.removeAttribute("style");
			}
		}
	}

	// Open first accordion tab by default
	function openFirstAccTab() {
		if (!acc[0].classList.contains("active")) {
			acc[0].classList.add("active");
			acc[0].nextElementSibling.style.maxHeight =
				acc[0].nextElementSibling.scrollHeight + "px";
		}
	}

	// when resize - autoheight tuning
	window.addEventListener(
		"resize",
		function () {
			for (let i = 0; i < acc.length; i++) {
				if (acc[i].classList.contains("active")) {
					acc[i].nextElementSibling.style.maxHeight =
						acc[i].nextElementSibling.scrollHeight + "px";
				}
			}
		},
		true
	);
}

;(function () {
	// Dark mode toggle
	const darkToggle = document.getElementById("darkToggle")
	const body = document.body
	const icon = darkToggle.querySelector("i")
	if (localStorage.getItem("theme") === "dark") {
		body.classList.add("dark")
		icon.classList.remove("fa-moon")
		icon.classList.add("fa-sun")
	}
	darkToggle.addEventListener("click", () => {
		body.classList.toggle("dark")
		if (body.classList.contains("dark")) {
			icon.classList.remove("fa-moon")
			icon.classList.add("fa-sun")
			localStorage.setItem("theme", "dark")
		} else {
			icon.classList.remove("fa-sun")
			icon.classList.add("fa-moon")
			localStorage.setItem("theme", "light")
		}
	})

	// Mobile menu
	const toggleBtn = document.getElementById("menuToggle")
	const navLinks = document.getElementById("navLinks")
	toggleBtn.addEventListener("click", () => {
		if (navLinks.style.display === "flex") {
			navLinks.style.display = "none"
		} else {
			navLinks.style.display = "flex"
			navLinks.style.flexDirection = "column"
			navLinks.style.position = "absolute"
			navLinks.style.top = "70px"
			navLinks.style.left = "0"
			navLinks.style.width = "100%"
			navLinks.style.background = body.classList.contains("dark")
				? "#1e293b"
				: "#ffffff"
			navLinks.style.padding = "20px"
			navLinks.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)"
		}
	})

	// Modals
	window.openBookingModal = () => {
		document.getElementById("bookingModal").style.display = "flex"
		document.getElementById("bookingDate").min = new Date()
			.toISOString()
			.split("T")[0]
	}
	window.openInquiryForm = () =>
		(document.getElementById("inquiryModal").style.display = "flex")
	window.closeModal = (id) =>
		(document.getElementById(id).style.display = "none")
	window.onclick = (e) => {
		if (e.target.classList.contains("modal-overlay"))
			e.target.style.display = "none"
	}

	// Smooth scroll
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			const href = this.getAttribute("href")
			if (href === "#") return
			const target = document.querySelector(href)
			if (target) {
				e.preventDefault()
				target.scrollIntoView({ behavior: "smooth" })
			}
		})
	})
})()

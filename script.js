let downloadButton = document.querySelector(
	"#download-btn"
);
downloadButton.addEventListener("click", function () {
	downloadButton.download = "my-resume.pdf";
	downloadButton.dispatchEvent(new MouseEvent("click"));
});

let downloadButton = document.querySelector(
	"#download-btn"
);

downloadButton.download = "my-resume.pdf";
downloadButton.dispatchEvent(new MouseEvent("click"));

/*chess button*/
document.getElementById("project-chess-background").addEventListener("mouseenter", function () {
  document.getElementById("project-chess-image").style.transitionDuration = "1s";
  document.getElementById("project-chess-image").style.opacity = "10%";
  document.getElementById("project-chess-title").style.visibility = "visible";
});
document.getElementById("project-chess-background").addEventListener("mouseleave", function () {
  document.getElementById("project-chess-image").style.opacity = "100%";
  document.getElementById("project-chess-title").style.visibility = "hidden";
});
/*makeItAll button*/
document.getElementById("project-makeItAll-background").addEventListener("mouseenter", function () {
  document.getElementById("project-makeItAll-image").style.transitionDuration = "1s";
  document.getElementById("project-makeItAll-image").style.opacity = "10%";
  document.getElementById("project-makeItAll-title").style.visibility = "visible";
});
document.getElementById("project-makeItAll-background").addEventListener("mouseleave", function () {
  document.getElementById("project-makeItAll-image").style.opacity = "100%";
  document.getElementById("project-makeItAll-title").style.visibility = "hidden";
});
/*comingSoon button*/
document.getElementById("project-comingSoon-background").addEventListener("mouseenter", function () {
  document.getElementById("project-comingSoon-image").style.transitionDuration = "1s";
  document.getElementById("project-comingSoon-image").style.opacity = "10%";
  document.getElementById("project-comingSoon-title").style.visibility = "visible";
});
document.getElementById("project-comingSoon-background").addEventListener("mouseleave", function () {
  document.getElementById("project-comingSoon-image").style.opacity = "100%";
  document.getElementById("project-comingSoon-title").style.visibility = "hidden";
});

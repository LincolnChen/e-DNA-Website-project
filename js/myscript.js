function show_building(x) {
  document.getElementById("info__layer").style.display = "none";
  document.getElementById("edna_info"+x).style.display = "block";

}

function hide_building(x) {
  document.getElementById("info__layer").style.display = "block";
  document.getElementById("edna_info"+x).style.display = "none";
}

const replaceMiddlePage = (from = "page-1", to = "page-1") => {
  document.getElementById(from).style.display = "none";
  document.getElementById(to).style.display = "flex";
};

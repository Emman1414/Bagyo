const tabs = document.querySelectorAll(".card");

function removeActiveTab() {
  //loopings to remove present active
  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}

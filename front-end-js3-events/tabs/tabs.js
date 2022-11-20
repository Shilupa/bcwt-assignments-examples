const asTabs = (node) => {
    let tabs = [];
  
    for (let i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      if (child.nodeType == document.ELEMENT_NODE) tabs.push(child);
    }
  
    let tabList = document.createElement("div");
    tabList.setAttribute("id", "tabList");
  
    tabs.forEach((tab, i) => {
      let button = document.createElement("button");
      button.textContent = tab.getAttribute("data-tabname");
      button.addEventListener("click", () => {
        getTab(i);
      });
      tabList.appendChild(button);
    });
    node.insertBefore(tabList, node.firstChild);
  
    const getTab = (n)=> {
      tabs.forEach( (tab, i)=> {
        if (i == n) tab.style.display = "";
        else tab.style.display = "none";
      });
      for (let i = 0; i < tabList.childNodes.length; i++) {
        tabList.childNodes[i].style.marginRight = "3px";
        if (i == n) tabList.childNodes[i].style.background = "green";
        else tabList.childNodes[i].style.background = "";
      }
    }
    getTab(0);
  };
  asTabs(document.querySelector("tab-panel"));
  
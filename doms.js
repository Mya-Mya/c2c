var doms = {
  NumberOfTrailsDOM: document.getElementById("number-of-trails"),
  onAutomaticallyCreateTrailsChange: function (handler) {
    var dom = document.getElementById("automatically-create-trails");
    dom.onchange = function () {
      handler(dom.checked);
    };
    dom.onchange();
  },
  onNumberOfTrailsGoalChange: function (handler) {
    var dom = document.getElementById("number-of-trails-goal");
    dom.onchange = function () {
      handler(dom.value);
    };
    dom.onchange();
  },
  /**
   *
   * @param {(number,number)=>void} handler
   */
  onLevelsChange: function (handler) {
    var minLevelDOM = document.getElementById("min-level");
    var levelSpaceDOM = document.getElementById("level-space");
    var levelRangeDOM = document.getElementById("level-range");
    var oninput = function () {
      var minLevel = float(minLevelDOM.value);
      var maxLevel = minLevel + float(levelSpaceDOM.value);
      levelRangeDOM.innerText = minLevel + " ~ " + maxLevel;
      handler(minLevel, maxLevel);
    };
    minLevelDOM.oninput = oninput;
    levelSpaceDOM.oninput = oninput;
    oninput();
  },
  c2csamples: {
    /**
     *
     * @param {string} name
     * @param {()=>void} onClick
     */
    addC2csample: function (name, onClick) {
      var listDOM = document.getElementById("c2csamples-list");
      var itemDOM = document.createElement("li");
      itemDOM.innerText = name;
      itemDOM.classList.add("list-group-item");
      itemDOM.classList.add("list-group-item-action");
      itemDOM.onclick = function () {
        for (var dom of listDOM.children) {
          dom.classList.remove("active");
        }
        itemDOM.classList.add("active");
        onClick();
      };
      listDOM.appendChild(itemDOM);
    },
  },
};

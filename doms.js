var doms = {
    NumberOfTrailsDOM: document.getElementById("number-of-trails"),
    onAutomaticallyCreateTrailsChange:function(handler){
        var dom = document.getElementById("automatically-create-trails");
        dom.onchange = function(){
            handler(dom.checked)
        }
        dom.onchange()
    },
    onNumberOfTrailsGoalChange:function(handler){
        var dom = document.getElementById("number-of-trails-goal");
        dom.onchange = function(){
            handler(dom.value)
        }
        dom.onchange()
    }
}
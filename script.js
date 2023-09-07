const customNum = document.querySelector(".custom-num")

const numInput = document.querySelector(".num-input")
const arrUp = document.querySelector(".arr-up")
const arrDown = document.querySelector(".arr-down")


arrUp.addEventListener("click", () => {
    numInput.stepUp()
    checkMaxMin()
})

arrDown.addEventListener("click", () => {
    numInput.stepDown()
    checkMaxMin()
})

numInput.addEventListener("input", checkMaxMin)

function checkMaxMin() {
    const numInputValue = numInput.value

    const numInputMax = numInput.max
    
    const numInputMin = numInput.min

    if(numInputValue === numInputMax){
        customNum.style.paddingTop ="0.8em";
        customNum.style.height = "5em";
        // Remove styles from the min Limit
        customNum.style.paddingBottom = "0";
        arrUp.style.display = "none"
    } else if((numInputValue === numInputMin)){
        customNum.style.paddingBottom ="0.8em";
        customNum.style.height = "5em";
        // Remove styles from the max Limit
        customNum.style.paddingTop = "0";
        arrDown.style.display = "none" 
    } else {
        customNum.style.padding = "0"
        customNum.style.height = "7em"
        arrDown.style.display = "block"
        arrUp.style.display = "block" 
    }


}
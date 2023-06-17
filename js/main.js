let $ = function (id) {
    return document.getElementById(id);
  };
  const RATE = 1.3589;
  
  function checkNumer(num){
    console.log(num)
    console.log(parseFloat(num))
    if(parseFloat(num)){
        return parseFloat(num)            
    }else{
        alert("Enter number!!!")
        setDefault();
        return 0
    }
    
  }
  function setDefault(){
    box1.value = ""
    box2.value = ""
  }

  function convertAction(event){
    event.preventDefault()
    let box1 = $("box1")
    let box2 = $("box2")
    let dropDown_1 = $("dropDown_1")
    let dropDown_2 = $("dropDown_2")
    let converter = $("converter")
    if(box1.value !== "" && box2.value !== ""){
        alert("Both input box has value")
        setDefault()
    }else if(box1.value === "" && box2.value === ""){
        alert("Both input box is empty")
    }else{            
        if(box1.value !== ""){
            if(dropDown_1.value == 'USD' && dropDown_2.value == "CAD"){
                box2.value = (checkNumer(box1.value) * RATE).toFixed(3);
            }else if(dropDown_1.value == 'CAD' && dropDown_2.value == "USD"){
                box2.value = (checkNumer(box1.value) / RATE).toFixed(3);
            }else{
                box2.value = box1.value
            }
        }
        if(box2.value !== ""){
            if(dropDown_2.value == 'USD' && dropDown_1.value == "CAD"){
                box1.value = (checkNumer(box2.value) * RATE).toFixed(3);
            }else if(dropDown_2.value == 'CAD' && dropDown_1.value == "USD"){
                box1.value = (checkNumer(box2.value) / RATE).toFixed(3);
            }else{
                box1.value = box2.value
            }
        }
    }
  }
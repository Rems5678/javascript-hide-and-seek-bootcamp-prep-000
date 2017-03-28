function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById("nested").querySelector("div div div div")
}

function increaseRankBy (n) {
    var newList= document.querySelectorAll("ul.ranked-list li")
  for (var i=0; i <newList.length; i++) {
  newList[i].innerHTML = (parseInt(newList[i].innerHTML)  + n)
  }
  return newList
}

function deepestChild() {
  var grandNode = document.getElementById("grand-node")
  var next = grandNode.querySelectorAll("div")
  for (var i = 0; i< next.length +1; i++) {
debugger
    if (next[i] == undefined) {
      return next[i-1]
    }
  }
}




  /*let grandNode = document.getElementById("grand-node")
  let condition = true
  let div = "div"
  let next = grandNode.querySelector(div)
  let counter = 0
  let next1 = grandNode.getElementsByTagName("div")
  for ( var i =0; i < next1.length; i ++) {
    if (next1[i] == "boo!") {
      return  next1[i]
    }

    if (next.innerHTML == "boo!") {
      return next

    }
    else {
      div = div + " div"
      console.log(div)
    }
    console.log(next)
      counter = counter + 1
    if (counter >5) {
      break
    }
  }
}*/

function classifer(x) {
  if (x > 0 && x % 2 === 0) {
    console.log("postive and even");
  }
  else if (x < 0 && x % 2 === 1) {
    console.log("negative and odd");
  }
  else if (x > 0 && x % 2 === 1) {
    console.log("postive and odd");
  }
  else if (x < 0 && x % 2 === 0) {
    console.log("negative and even");
  }else
  console.log("None and none")

}
classifer(0)

function letterGrade(X) {
    if(X >= 90) {
        return("A = workers"); 
    } else if(X <= 89) { 
        return("B = managers");
    } else if(X <=79) {
        return("C = ceo");
    } else if(X <=69) {
        return("D = philosopher");
    } else{
        return("f = inventor");
    }
}

console.log(letterGrade(08))
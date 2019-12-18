function maskify(cc){
  let maskedCC = []
  if(cc.length <= 4){
    return cc
  } else {
    lastFour = cc.slice(cc.length-4)
    toMask = cc.slice(0, cc.length-4)
    ccArray = toMask.split("")
    ccArray.forEach(e => {
      maskedCC.push("#")
    })
    maskedCC.push(lastFour)
    otherCC = maskedCC.join("")
    return otherCC
  }
  
  }


maskify("1234567891234567")
const rot13 = str => {
    let encoded = str.split("")
    let decoded = encoded.map((x) => {
      switch(x){
        case "A":
          return String.fromCodePoint(78) //N
        break
         case "B":
          return String.fromCodePoint(79) //O
        break
         case "C":
          return String.fromCodePoint(80) //P
        break
        case "D":
          return String.fromCodePoint(81) //Q
        break
        case "E":
          return String.fromCodePoint(82) //R
        break
        case "F":
          return String.fromCodePoint(83) //S
        break
        case "G":
          return String.fromCodePoint(84)// T
        break
        case "H":
          return String.fromCodePoint(85) // U
        break
        case "I":
          return String.fromCodePoint(86)//V
        break
        case "J":
          return String.fromCodePoint(87)// W
        break
        case "K":
          return String.fromCodePoint(88) // X
        break
        case "L":
          return String.fromCodePoint(89) // Y
        break
        case "M":
          return String.fromCodePoint(90) // Z
        break
        case "N":
          return String.fromCodePoint(65) // A
        break
        case "O":
          return String.fromCodePoint(66) //B
        break
        case "P":
          return String.fromCodePoint(67) // C
        break
        case "Q":
          return String.fromCodePoint(68) // D 
        break
        case "R":
          return String.fromCodePoint(69) // E
        break
        case "S":
          return String.fromCodePoint(70) // F
        break
        case "T":
          return String.fromCodePoint(71) // G
        break
        case "U":
          return String.fromCodePoint(72) // H
        break
        case "V":
          return String.fromCodePoint(73) //I
        break
        case "W":
          return String.fromCodePoint(74) // J
        break
        case "X":
          return String.fromCodePoint(75) //K
        break
        case "Y":
          return String.fromCodePoint(76) // L
        break
        case "Z":
          return String.fromCodePoint(77) // M
        break
  
       default:
        return x
      }
    })
    return decoded.join("")
  }
  
  rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
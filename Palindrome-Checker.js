const palindrome = (str) => {
    // Remove non-alphanumeric characters
    // Turn every letter to lowercase 
    //Check for palindromes
   str = str.replace(/[^0-9a-z]/gi,'')
    str = str.toLowerCase()
    console.log(str[(str.length/2)-1])
     if(str[str.length / 2] !== str[(str.length/2)-1] ) return false
     if(str[0] === str[str.length-1]) return true
     else return false
  }
  
  palindrome("almostomla");
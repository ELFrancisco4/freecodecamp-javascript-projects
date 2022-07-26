const telephoneCheck = (str) => {
    let usaRegex = /^1?\s?(\([0-9]{3}\)[- ]?|[0-9]{3}[- ]?)[0-9]{3}[- ]?[0-9]{4}$/
      return usaRegex.test(str)
  }
  
  console.log(telephoneCheck("1 555-555-5555"))
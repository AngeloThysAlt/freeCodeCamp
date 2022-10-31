function telephoneCheck(str) {
    const validStatesPhoneNumber = /^1?\s?(\d{3}|\(\d{3}\))[\s|-]?\d{3}[\s|-]?\d{4}$/;
    return validStatesPhoneNumber.test(str);
}
  
telephoneCheck("555-555-5555");
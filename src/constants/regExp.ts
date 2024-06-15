export const Regex = {
    Number: new RegExp(/^\d+$/),
    MobileNumber: new RegExp(/^(?!-)[0-9]{5,15}$/),
    IndiaMobileNumber: new RegExp(/^(?!-)[0-9]{10}$/),
    Email: new RegExp(
      "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"
    ),
    Name: new RegExp(/^[a-zA-Z]{1,50}$/),
    Alphabets: new RegExp(/^[A-Za-z]+$/),
    PinCode: new RegExp(/^\d{6}$/),
    Alphanumeric: new RegExp(/^[a-zA-Z0-9]+$/),
    NoSpace: new RegExp(/^(?=.*\S).+$/),
    AlphabetsAndSpace: new RegExp(/^[A-Za-z][A-Za-z ]*$/),
    IFSCCode: new RegExp(/^[a-zA-Z0-9]{11}$/),
    PanCard: new RegExp(/^[A-Z]{5}\d{4}[A-Z]{1}$/),
    AlphabateAndSpaceNotInFist: new RegExp(/^[A-Za-z][A-Za-z ]*(?: [A-Za-z])?$/),
    Amount: new RegExp(/^[+-]?([0-9]*[.])?[0-9]+$/),
    NumberwithDecimal: new RegExp(/^([0-9]*|\d*\.\d{1}?\d*)$/),
    AlphanumericAndSpaceNotInFirst: new RegExp(/^(?! )[a-zA-Z0-9 ]*[a-zA-Z0-9]$/),
    Education: new RegExp(/^[A-Za-z ,.]+$/),
    Namewithspcialcharacterspace: new RegExp(
      /^[A-Za-z\s!@#$%^&*()_+-=[\]{}|;:'",.<>/?]+$/
    ),
    AlphabetsAndSpecialCharacter: new RegExp(
      /^[A-Za-z!@#$%^&*()-_=+[\]{};:'",.<>/?\\|]+$/
    ),
    alphanumericWithSpace: new RegExp(/^[a-zA-Z0-9\s]+$/),
    onlyNumberTypeable: new RegExp(/^[0-9]$/),
    doubleSpace: /  +/g,
    addressRegex: new RegExp(/^[a-zA-Z0-9\s/,-]*$/),
    onlyInteger: /\D/g,
    validLink: new RegExp(
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    ),
  };
  
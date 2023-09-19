function calculateTax(price) {
    if (price > 1000 && price <= 5000) {
      return price * 0.12;  // Tax PA: 12% of the price
    } else if (price > 5000) {
      return price * 0.18;  // Tax PB: 18% of the price
    } else {
      return 200;  // Tax PC: Flat tax of 200
    }
  }
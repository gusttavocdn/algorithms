function findNeedle(array) {
  return `found the needle at position ${array.findIndex((word) => word == 'needle')}`
}
const deleteFromArray = (array: any[], value: string, prop: string) => {
  const cloneArray = [ ...array ]
  
  cloneArray.forEach((element, i) => {
    if (typeof prop !== 'undefined') {
      if (element[prop] === value) {
        cloneArray.splice(i, 1)
      }
    } else {
      if (element === value) {
        cloneArray.splice(i, 1)
      }
    }
  })

  return cloneArray
}

export {
  deleteFromArray
}
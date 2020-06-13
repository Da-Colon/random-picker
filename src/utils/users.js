export const nameFormat = (firstName, lastName) => {
  return `${firstName.substr(0, 1).toUpperCase()}. ${lastName[0].toUpperCase() +  
    lastName.slice(1)}`
}
export const searchClassList = (value, list) => {
  const cohort = list.filter(item => item.id === Number(value))
  return cohort[0]
}
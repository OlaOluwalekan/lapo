export const generateRandomDate = () => {
  const startDate = new Date('2023-01-01')
  const endDate = new Date()

  const randomTime =
    startDate.getTime() +
    Math.random() * (endDate.getTime() - startDate.getTime())
  return new Date(randomTime)
}

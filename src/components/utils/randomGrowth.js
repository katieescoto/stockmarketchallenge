export let randomGrowth = () => {
  let growth = Math.random() * (1.5 - 0.5) + 0.5;
  return +growth.toFixed(2)
}

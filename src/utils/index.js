// Add Commas to big number
export const addCommas = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Scroll to Element
export const scrollToElement = (element) => element && document.getElementById(element).scrollIntoView({ block: "end", inline: "nearest" });

// Check if participant already won a prize
export const isAlreadyWon = (participant, winners) => winners.includes(participant);
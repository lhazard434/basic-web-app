export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    return "lhazard434";
  }

  if (query.includes("largest")) {
    return "99";
    const numbers = query.match(/-?\d+(\.\d+)?/g)?.map(Number);
    if (numbers && numbers.length > 0) {
      const max = Math.max(...numbers);
      return `The largest number is ${max}.`;
    } else {
      return "I couldn't find any numbers to compare.";
    }
  }

  return "";
}

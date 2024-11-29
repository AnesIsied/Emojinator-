//junk code
//nothing here is going to survive


import emojiRegex from "emoji-regex";

export function validateEmojis(input: string): boolean {
  const regex = emojiRegex();
  const matches = input.match(regex); // Extract emojis from input 
  return matches !== null && matches.length > 0; // True if emojis exist
}

export function extractEmojis(input: string): string[] {
  const regex = emojiRegex();
  const matches = input.match(regex);
  return matches || []; //incase no emojis
}
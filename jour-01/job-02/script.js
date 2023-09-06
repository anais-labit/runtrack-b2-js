function myCountChar(haystack, needle) {
  let count = 0;

  if (haystack !== undefined) {
    for (let x = 0; haystack[x]; x++) {
      if (haystack[x] == needle) {
        count++;
      }
    }
    return count;
  }
}

myCountChar("Hello World", "o");

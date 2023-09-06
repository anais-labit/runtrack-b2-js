function myIsInString(haystack, needle) {
  let i = 0;
  let j = 0;

  while (haystack[i] !== undefined && needle[j] !== undefined) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1;
      j = 0;
    }
  }

  if (needle[j] === undefined) {
    return true;
  } else {
    return false;
  }
}

myIsInString("Hello World", "llo");

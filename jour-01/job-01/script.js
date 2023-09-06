function myUpperCase(string) {
  const letters = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
  };

  let result = "";

  for (const char of string) {
    if (letters[char]) {
      // result = result + letters[char];
      result += letters[char];
    } else {
      result += char;
    }
  }
  return result;
}

myUpperCase("Hello World");


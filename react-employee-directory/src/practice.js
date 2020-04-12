console.log(
  "hello my name is ben nice to meet you!"
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ")
);

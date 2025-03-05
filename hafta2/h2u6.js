const yargs = require("yargs");

yargs.command({
  command: "ekle",
  describe: "Yeni bir not ekler.",
  handler: function () {
    console.log("Yeni bir not eklendi.");
  },
});

console.log(yargs.argv);

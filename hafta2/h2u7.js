const yargs = require("yargs");

yargs.command({
  command: "ekle",
  describe: "Yeni bir not ekler.",
  handler: function () {
    console.log("Yeni bir not eklendi.");
  },
});

yargs.command({
  command: "sil",
  describe: "Bir not siler.",
  handler: function () {
    console.log("Bir not silindi.");
  },
});

yargs.command({
  command: "listele",
  describe: "Notları listeler.",
  handler: function () {
    console.log("Notlar listelendi.");
  },
});

console.log(yargs.argv);

const yargs = require("yargs");

yargs.command({
  command: "ekle",
  describe: "Yeni bir not ekler.",
  builder: {
    title: {
      describe: "Not başlığı",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Not içeriği",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(argv.title);
    console.log(argv.body);
  },
});

yargs.command({
  command: "sil",
  describe: "Bir not siler.",
  builder: {
    title: {
      describe: "Not başlığı",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Not içeriği",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(argv.title);
    console.log(argv.body);
  },
});

yargs.command({
  command: "listele",
  describe: "Notları listeler.",
  builder: {
    title: {
      describe: "Not başlığı",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Not içeriği",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log(argv.title);
    console.log(argv.body);
  },
});

console.log(yargs.argv);

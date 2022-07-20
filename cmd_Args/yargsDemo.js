
const yargs = require("yargs");
const file = require("./notes")

yargs.command({
    command: "add",
    describe: "File created....",
    builder: {
        title: {
            type: "string",
            demandOption: true
        },
        desc: {
            type: "string"
        }
    },
    handler: function (argv) {
        //console.log("new file crate request.....")
        var title = argv.title
        var desc = argv.desc
        //console.log(title+" "+desc);
        var data = {
            "title": title,
            "desc": desc
        }
        file.createfile(data);
    }
})

yargs.command({
    command: "view",
    describe: "view file...",
    handler: function () {
        file.readFile();
    }
})


yargs.command({
    command: "remove",
    describe: "Remove title from file",
    builder: {
        title: {
            type: "string"
        }
    },
    handler: function (argv) {
        file.removedata(argv.title);
    }
})
yargs.argv;
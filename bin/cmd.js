#!/usr/bin/env node

var fs = require("fs");
var perfectionist = require("../dist").default;
var read = require("read-file-stdin");
var write = require("write-file-stdout");
const path = require('path')
const { cosmiconfig, cosmiconfigSync } = require('cosmiconfig');

const explorer = cosmiconfig('style-perfectionist');

var opts = require("minimist")(process.argv.slice(2), {
    alias: {
        f: "format",
        h: "help",
        s: "sourcemap",
        t: "syntax",
        v: "version",
        c: "config"
    }
});

if (opts.version) {
    return console.log(require("../package.json").version);
}

var file = opts._[0];
var out = opts._[1];

if (file === "help" || opts.help) {
    return fs
        .createReadStream(__dirname + "/usage.txt")
        .pipe(process.stdout)
        .on("close", function() {
            process.exit(1);
        });
}

explorer.search(path.resolve(process.cwd(), opts.c || '') )
  .then((result) => {
    if(result && result.config && result.filepath){
        const {config, filepath} = result;
        opts = {
            ...opts,
            ...config,
        }
        delete opts.config;
        delete opts.c;    
    }
    read(file, function(err, buf) {
        if (err) {
            throw err;
        }
        if (file) {
            opts.from = file;
        }
        if (out) {
            opts.to = out;
        }
        write(out, String(perfectionist.process(String(buf), opts)));
    });

  })




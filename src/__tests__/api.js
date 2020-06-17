import postcss from "postcss";
import ava from "ava";
import perfectionist from "../";
import { name } from "../../package.json";

function usage(t, instance) {
    const input = "h1 { color: #fff }";
    return instance.process(input).then(({ css }) => {
        t.deepEqual(css, "h1 {\n    color: #fff;\n}\n", "should be consumed");
    });
}

ava("can be used as a postcss plugin", usage, postcss().use(perfectionist()));
ava("can be used as a postcss plugin (2)", usage, postcss([perfectionist()]));
ava("can be used as a postcss plugin (3)", usage, postcss([perfectionist]));

ava("should use the postcss plugin api", (t) => {
    t.truthy(
        perfectionist().postcssVersion,
        "should be able to access version"
    );
    t.deepEqual(
        perfectionist().postcssPlugin,
        name,
        "should be able to access name"
    );
});

ava(
    "should not remove the 0.0 while removing the trailing and leading zeroes",
    (t) => {
        const css = `
h1 { color: red; margin: 000.0; z-index: 1.0; padding: 000.1
}
`;
        const output = perfectionist.process(css);
        t.snapshot(output.toString());
    }
);

ava("should not split comments using comman, issue #3", (t) => {
    const css = `
  /* below selector has a ton of weight, better to override it with  class selectors that unset box-shadow and rules here. Testable  on the repo tag editor */
`;
    const options = {
        indentSize: 2,
        maxAtRuleLength: 250,
    };
    const output = perfectionist.process(css, options);
    t.snapshot(output.toString());
});

ava(
    "should not split comments using comman, issue #3 with default options",
    (t) => {
        const css = `
  /* some , comments, separate , with comma */
`;
        const output = perfectionist.process(css);
        t.snapshot(output.toString());
    }
);

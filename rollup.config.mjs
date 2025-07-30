import { defineConfig } from "rollup";

import minPlugin from "@rollup/plugin-terser";
import dtsPlugin from "rollup-plugin-dts";
import ts2Plugin from "rollup-plugin-typescript2";

export default defineConfig([
	{
		input: "src/index.ts",
		plugins: [
			ts2Plugin({ useTsconfigDeclarationDir: true }),
			minPlugin({ compress: { unsafe: true } }),
		],
		output: { file: "out/index.mjs", format: "esm" },
	},
	{
		input: "src/index.ts",
		plugins: [
			ts2Plugin({ useTsconfigDeclarationDir: true }),
			minPlugin({ compress: { unsafe: true } }),
		],
		output: { file: "out/index.cjs", format: "cjs" },
	},
	{
		input: "out/types/index.d.ts",
		plugins: [dtsPlugin()],
		output: { file: "out/index.d.ts", format: "es" },
	},
]);

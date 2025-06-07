import eslint from "@eslint/js";
import tslint from "typescript-eslint";

import stylistic from "@stylistic/eslint-plugin";

import prettier from "eslint-config-prettier";

export default tslint.config(
	{ files: ["src/**/*.ts"] },
	{ ignores: ["dist/**", "*.config.mjs"] },

	eslint.configs.recommended,
	tslint.configs.eslintRecommended,

	tslint.configs.recommendedTypeChecked,
	tslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},

	stylistic.configs.recommended,

	prettier,
);

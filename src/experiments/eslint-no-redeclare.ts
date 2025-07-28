interface Process {
	signal: number;
};

interface Process { // @typescript-eslint/no-redeclare with `ignoreDeclarationMerge: false` will catch the error at source
	action(): void;
};

// @ts-expect-error: Not merging all the properties of merging interfaces
const process: Process = {
	action: () => {},
};

process.action();

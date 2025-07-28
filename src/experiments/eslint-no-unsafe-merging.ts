interface Process {
	signal: number;
};

interface Process {
	action(): void;
};
// @ts-expect-error: Not merging all the properties of merging interfaces
const process: Process = {
	action: () => {},
};

process.action();

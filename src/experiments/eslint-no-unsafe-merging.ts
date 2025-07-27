interface Process {
	signal: number;
};

interface Process {
	action(): void;
};

const process: Process = {
	action: () => {},
};

process.action();

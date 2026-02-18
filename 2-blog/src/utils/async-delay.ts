import { logColor } from "./log-color";

export async function asyncDelay(ms: number = 0, verbose: boolean = false) {
    if (ms <= 0) return;

    if (verbose) {
        logColor(`Delaying for ${ms} (${ms / 1000}) seconds...`);
    }

    await new Promise((resolve) => setTimeout(resolve, ms));
}
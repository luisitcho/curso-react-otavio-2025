let instance: TimerWorkManager | null = null;

export class TimerWorkManager {
    private worker: Worker;

    private constructor() {
        this.worker = new Worker(new URL('./timerWorker.js', import.meta.url));
    }

    static getInstance() {
        if (!instance) {
            instance = new TimerWorkManager();
        }

        return instance;
    }

    postMessage(message: unknown) {
        this.worker.postMessage(message);
    }

    onmessage(callback: (event: MessageEvent) => void) {
        this.worker.onmessage = callback;
    }

    terminate() {
        this.worker.terminate();
        instance = null;
    }
}

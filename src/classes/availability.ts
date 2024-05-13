export class Availability {
    private date: string;
    private time: string;

    constructor(date: string, time: string) {
        this.date = date;
        this.time = time;
    }

    public getDate(): string {
        return this.date;
    }

    public setDate(newDate: string): void {
        this.date = newDate;
    }

    public getTime(): string {
        return this.time;
    }

    public setTime(newTime: string): void {
        this.time = newTime;
    }
}
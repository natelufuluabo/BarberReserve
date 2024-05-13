export class Availability {
    private date: string;
    private time: string;
    private id: string;

    constructor(date: string, time: string) {
        this.date = date;
        this.time = time;
        this.id = '';
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

    public getId(): string {
        return this.id;
    }

    public setId(newId: string): void {
        this.id  = newId;
    }
}
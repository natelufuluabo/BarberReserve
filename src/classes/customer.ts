export class Customer {
    private id: string;
    private name: string;
    private phoneNumber: string;

    constructor(name: string, phoneNumber: string) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.id = '';
    }

    public getName(): string {
        return this.name;
    }

    public setName(newName: string): void {
        this.name = newName;
    }

    public getPhoneNumber(): string {
        return this.phoneNumber;
    }

    public setPhoneNumber(newPhoneNumber: string): void {
        this.phoneNumber = newPhoneNumber;
    }

    public getId(): string {
        return this.id;
    }

    public setId(newId: string): void {
        this.id = newId;
    }
}
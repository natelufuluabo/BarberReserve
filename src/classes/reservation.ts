import { Customer } from "./customer";
import { Availability } from "./availability";

export class Reservation {
    private customer: Customer;
    private dateTime: Availability;
    private id: string;

    constructor(customer: Customer, dateTime: Availability, id: string) {
        this.customer = customer;
        this.dateTime = dateTime;
        this.id = id;
    }

    public getId(): string {
        return this.id;
    }

    public getReservationDetails(): 
    { customerName: string, customerPhoneNumber: string, date: string, time: string } {
        return {
            customerName: this.customer.getName(),
            customerPhoneNumber: this.customer.getPhoneNumber(),
            date: this.dateTime.getDate(),
            time: this.dateTime.getTime()
        }
    }
}
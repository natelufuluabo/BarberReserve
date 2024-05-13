import { Customer } from "./customer";
import { Reservation } from "./reservation";
import { Availability } from "./availability";

export class ReservationManager {
    public static createNewReservation(customer: Customer, dateTime: Availability, id: string)
    : Reservation {
        return new Reservation(customer, dateTime, id);
    }
}
import Appointment from '../infra/typeorm/entities/Appoitment';

export default interface IAppointmentRepository {
  findByDate(date: Date): Promise<Appointment | undefined>;
}

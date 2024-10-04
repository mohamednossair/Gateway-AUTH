import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: '2ccf99dd-ae5a-4db9-b653-6d8490701508',
  login: '4.2Tfh',
};

export const sampleWithPartialData: IUser = {
  id: 'f8845cf7-d2f0-4f93-a9e0-5b48c336ae14',
  login: 'Zekd',
};

export const sampleWithFullData: IUser = {
  id: '4b20fd2a-94f8-4ad7-97c7-bd172e874daa',
  login: 'c',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

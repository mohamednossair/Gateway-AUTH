import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '30a13fb3-d9fc-450e-a0e1-b97e9a473ca3',
};

export const sampleWithPartialData: IAuthority = {
  name: 'd3fedd0b-c15b-42de-82e1-e16a2ce4be81',
};

export const sampleWithFullData: IAuthority = {
  name: '44085813-9386-467c-831d-b0265453a0c6',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);

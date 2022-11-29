import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lgt: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lgt: parseFloat(faker.address.longitude()),
    };
  }
}

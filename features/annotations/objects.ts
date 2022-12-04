const profile = {
  name: 'Elias',
  age: 22,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(newAge: number): void {
    this.age = newAge;
  }
};

const { age, name }: { age: number, name: string } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile;
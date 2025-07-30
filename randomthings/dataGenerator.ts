import { faker } from '@faker-js/faker';

export function generateRandomUser() {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        dob: faker.date.birthdate({ min: 24, max: 54, mode: 'age' }).toISOString().split('T')[0],
        email: faker.internet.email(),
        password: faker.internet.password(),
        address: {
            street: faker.location.streetAddress(),
            city: faker.location.city(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        },
        phone: faker.phone.number(),
    };
}
import { faker } from '@faker-js/faker';
import { generateProtocolForPacient } from 'protocols-generator';
import { v4 as uuidv4 } from 'uuid';
import { PacientInput } from 'validator';

jest.mock("uuid", ()=>{
  return {
    v4: () => { return 'Protocols gerado pelo uuid'}
  }
})

describe("calculator tests", () => {
  it("should work", async () => {

    const test = generateProtocolForPacient(String(faker.commerce),String( faker.commerce), true)
    console.log(test)
    expect(test.protocol).toBe('Protocols gerado pelo uuid');
  });
});
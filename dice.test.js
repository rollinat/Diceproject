const dice = require('./diceroll');

//smoke test
describe ("smoke test", () => {
 it("can blow smoke",() => {
  expect(true).toBe(true);
 });
});


describe("A dice roller", () => {
	it("should be able to generate a random number between 1 and 6", () => {
		expect(dice.roll()).toBeGreaterThanOrEqual(1);
		expect(dice.roll()).toBeLessThanOrEqual(6);
		expect(dice.roll()).toBeGreaterThanOrEqual(1);
		expect(dice.roll()).toBeLessThanOrEqual(6);
		expect(dice.roll()).toBeGreaterThanOrEqual(1);
		expect(dice.roll()).toBeLessThanOrEqual(6);
		expect(dice.roll()).toBeGreaterThanOrEqual(1);
		expect(dice.roll()).toBeLessThanOrEqual(6);
		expect(dice.roll()).toBeGreaterThanOrEqual(1);
		expect(dice.roll()).toBeLessThanOrEqual(6);
	});
});
import {MiniMaple} from "../src/miniMaple";

test('Work for a single unit', () => {
	let mm = new MiniMaple('4*x^3', 'x')
    expect(mm.calc()).toBe('12*x^2');
});

test('Work for a several units', () => {
	let mm = new MiniMaple('4*x^3-x^2', 'x')
    expect(mm.calc()).toBe('12*x^2 - 2*x');
});

test('Returns empty string, when no units attached to this varable', () => {
	let mm = new MiniMaple('4*x^3', 'y')
    expect(mm.calc()).toBe('');
});

test('Returns empty string from empty string', () => {
	let mm = new MiniMaple('', 'x')
    expect(mm.calc()).toBe('');
});

test('Not loosing negative on first unit', () => {
	let mm = new MiniMaple('-4*x^3-x^2', 'x')
    expect(mm.calc()).toBe('-12*x^2 - 2*x');
});

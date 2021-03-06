const numeros = require('./verificaNumeros');

describe('Requisito 1', () => {
  it('A função recebe [1, 2, 3, 4, 5] e retorna true', () => {
    expect(true).toEqual(numeros([1, 2, 3, 4, 5]));
  });
});

describe('Requisito 2', () => {
  it(`A função recebe [1, 2, 3, 4, 5] e retorna false`, () => {
    expect(true).toEqual(numeros([1, 2, '3', 4, 5]));
  });
});

describe('Requisito 3', () => {
  it(`A função recebe [' '] e retorna false`, () => {
    expect(true).toEqual(numeros([' ']));
  });
});

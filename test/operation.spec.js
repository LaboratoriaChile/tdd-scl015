// Importamos el objeto `operation`, que contiene los métodos `add` y `multiply`
import operation from '../src/operation';

//describe, it, expect
//describe A quien voy a testear
describe('operation', () => {
  // it Que voy a testear
  it('Debería ser un objeto', () =>{
    //expect Mi comparación
    expect(typeof operation).toBe('object');
  });

  describe('operation.add', () => {
    it('Debería ser una funcion', () => {
      expect(typeof operation.add).toBe('function');
    });

    it('Debería devolver la suma de 4 para 2 + 2 numeros', () => {
      expect(operation.add(2, 2)).toBe(4)
    });

    it('Debería devolver Error para cuando falte un parametro', () => {
      expect(operation.add(2)).toBe(' Error ');
    });

    it('Debería retornar Error si es un string', () => {

    });
  });

})

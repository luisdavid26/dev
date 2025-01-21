import { describe, it, expect } from "vitest";
import { suma } from "../src/suma.js";

/**
 * Estructura del test:
 * - describe: Agrupa las pruebas de forma lógica.
 * - it: Define un caso de prueba específico.
 * - expect: Realiza la verificación de resultados.
 */
describe("Función Suma", () => {
    it('Suma debe ser una función', () => {
        expect(typeof suma).toBe('function');
    });
    it("debe sumar correctamente dos números positivos", () => {
        expect(suma(2, 3)).toBe(5); // Prueba que 2 + 3 = 5
    });

    it("debe manejar números negativos", () => {
        expect(suma(-2, -3)).toBe(-5); // Prueba con números negativos
    });

    it("debe devolver 0 si ambos números son 0", () => {
        expect(suma(0, 0)).toBe(0); // Prueba con ceros
    });
});

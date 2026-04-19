//ejercicio pruebas unitarias - karma - jazmine
import { TestBed } from "@angular/core/testing";
import { Suma } from "./suma";

describe('Suma', () => {
    let service: Suma;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(Suma);
    });

    it('deberia sumar dos numeros positivos', () => {
        expect(service.metodoSuma(2, 3)).toBe(5);
    });

    it('deberia sumar un numero positivo y un numero negativo', () => {
        expect(service.metodoSuma(5, -2)).toBe(3);
    });

    it('deberia sumar dos numeros negativos', () => {
        expect(service.metodoSuma(-4, -5)).toBe(-10);
    });
});

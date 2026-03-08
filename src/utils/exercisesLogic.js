// Contiene toda la lógica matemática expuesta en EJERCICIOS_PROPUESTOS.md y sus metadatos visuales

export const exercisesData = {
    N1: {
        id: 'N1',
        title: 'Ejercicio N1',
        description: 'Suma secuencial de números mayores que cero que contengan el que ingresó el usuario.',
        example: 'Si N=3, SUM = 1+2+3 = 6',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 0)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 0) return 'N debe ser un número entero mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let text = 'SUM = ';
            for (let i = 1; i <= n; i++) {
                sum += i;
                text += i + (i === n ? '' : '+');
            }
            return `${text} = ${sum}`;
        },
    },
    N2: {
        id: 'N2',
        title: 'Ejercicio N2',
        description: 'Suma de los 10 primeros múltiplos pares del número ingresado.',
        example: 'Si N=3, Múltiplos pares: 3(x2), 3(x4)... = 273 (aproximación en base al cálculo)',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 0)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 0) return 'N debe ser mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let terms = [];
            for (let i = 1; i <= 10; i++) {
                const mult = n * (i * 2); // 10 primeros múltiplos pares = n * 2, n * 4, ...
                sum += mult;
                terms.push(mult);
            }
            return `Múltiplos pares: ${terms.join(', ')} \nSUMA = ${sum}`;
        },
    },
    N3: {
        id: 'N3',
        title: 'Ejercicio N3',
        description: 'Suma de los 20 primeros múltiplos impares del número ingresado.',
        example: 'Si N=3, Múltiplos impares: 3, 9, 15... = 1200',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 0)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 0) return 'N debe ser mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let terms = [];
            for (let i = 1; i <= 20; i++) {
                // multiplier goes 1, 3, 5: formula is (2*i - 1)
                const mult = n * (2 * i - 1);
                sum += mult;
                if (i <= 5) terms.push(mult);
            }
            return `Múltiplos impares: ${terms.join(', ')}... \nSUMA = ${sum}`;
        },
    },
    N4: {
        id: 'N4',
        title: 'Ejercicio N4',
        description: 'Cantidad de números pares desde 0 hasta el número ingresado.',
        example: 'Si N=12, pares: 0, 2, 4, 6, 8, 10, 12 → PARES = 7',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 10)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 10) return 'N debe ser mayor a 10.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let count = 0;
            let pares = [];
            for (let i = 0; i <= n; i += 2) {
                count++;
                pares.push(i);
            }
            return `Pares: ${pares.join(', ')} \nCANTIDAD = ${count}`;
        },
    },
    N5: {
        id: 'N5',
        title: 'Ejercicio N5',
        description: 'Cantidad de números impares desde 1 hasta el número ingresado.',
        example: 'Si N=12, impares: 1, 3, 5, 7, 9, 11 → IMPARES = 6',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 10)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 10) return 'N debe ser mayor a 10.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let count = 0;
            let impares = [];
            for (let i = 1; i <= n; i += 2) {
                count++;
                impares.push(i);
            }
            return `Impares: ${impares.join(', ')} \nCANTIDAD = ${count}`;
        },
    },
    N6: {
        id: 'N6',
        title: 'Ejercicio N6',
        description: 'Promedio de los números del 1 hasta el ingresado.',
        example: 'N=3, PROMEDIO = (1+2+3) / 3 = 2',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 0)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 0) return 'N debe ser mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let text = '';
            for (let i = 1; i <= n; i++) {
                sum += i;
                text += i + (i === n ? '' : '+');
            }
            const prom = sum / n;
            return `(${text}) / ${n} = ${prom}`;
        },
    },
    N7: {
        id: 'N7',
        title: 'Ejercicio N7',
        description: 'Potencia con 2 números ingresados.',
        example: 'A=3, B=2 → 3^2 = 9',
        inputs: [
            { key: 'a', label: 'Ingrese Base A (> 0)' },
            { key: 'b', label: 'Ingrese Exponente B (> 0)' },
        ],
        validate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            if (isNaN(a) || a <= 0) return 'A debe ser un valor válido y mayor a 0.';
            if (isNaN(b) || b <= 0) return 'B debe ser un valor válido y mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            return `${a} elevado a ${b} = ${Math.pow(a, b)}`;
        },
    },
    N8: {
        id: 'N8',
        title: 'Ejercicio N8',
        description: 'Encontrar el máximo de 3 números.',
        example: 'Si a=3, b=-1, c=4 → máximo = 4',
        inputs: [
            { key: 'a', label: 'Valor de A' },
            { key: 'b', label: 'Valor de B' },
            { key: 'c', label: 'Valor de C' },
        ],
        validate: (values) => {
            if (isNaN(parseFloat(values.a)) || isNaN(parseFloat(values.b)) || isNaN(parseFloat(values.c))) {
                return 'Debe ingresar los 3 valores de forma correcta.';
            }
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            return `MÁXIMO = ${Math.max(a, b, c)}`;
        },
    },
    N9: {
        id: 'N9',
        title: 'Ejercicio N9',
        description: 'Encontrar el mínimo de 3 números.',
        example: 'Si a=3, b=-1, c=4 → mínimo = -1',
        inputs: [
            { key: 'a', label: 'Valor de A' },
            { key: 'b', label: 'Valor de B' },
            { key: 'c', label: 'Valor de C' },
        ],
        validate: (values) => {
            if (isNaN(parseFloat(values.a)) || isNaN(parseFloat(values.b)) || isNaN(parseFloat(values.c))) {
                return 'Debe ingresar los 3 valores de forma correcta.';
            }
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            return `MÍNIMO = ${Math.min(a, b, c)}`;
        },
    },
    N10: {
        id: 'N10',
        title: 'Ejercicio N10',
        description: 'Suma del máximo con el mínimo de 3 números.',
        example: 'A=3, B=-1, C=4 → max=4, min=-1 → sum = 3',
        inputs: [
            { key: 'a', label: 'Valor de A' },
            { key: 'b', label: 'Valor de B' },
            { key: 'c', label: 'Valor de C' },
        ],
        validate: (values) => {
            if (isNaN(parseFloat(values.a)) || isNaN(parseFloat(values.b)) || isNaN(parseFloat(values.c))) {
                return 'Debe ingresar los 3 valores de forma correcta.';
            }
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            const max = Math.max(a, b, c);
            const min = Math.min(a, b, c);
            return `MAX (${max}) + MIN (${min}) = ${max + min}`;
        },
    },
    N11: {
        id: 'N11',
        title: 'Ejercicio N11',
        description: 'Calcular Y = AX - BX + C para X de 1 a 10.',
        example: 'A=3, B=2, C=1 \nX=1: Y = 3(1)-2(1)+1 = 2',
        inputs: [
            { key: 'a', label: 'Coeficiente A (> 0)' },
            { key: 'b', label: 'Coeficiente B (> 0)' },
            { key: 'c', label: 'Coeficiente C (> 0)' },
        ],
        validate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            if (isNaN(a) || a <= 0) return 'A debe ser positivo.';
            if (isNaN(b) || b <= 0) return 'B debe ser positivo.';
            if (isNaN(c) || c <= 0) return 'C debe ser positivo.';
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            let results = [];
            for (let x = 1; x <= 10; x++) {
                const y = a * x - b * x + c;
                results.push(`X=${x} → Y=${y}`);
            }
            return results.join('\n');
        },
    },
    N12: {
        id: 'N12',
        title: 'Ejercicio N12',
        description: 'Calcular Y = A(X-1) - BX + C para X de 1 a 10.',
        example: 'A=3, B=2, C=1 \nX=1: Y = 3(0)-2(1)+1 = -1',
        inputs: [
            { key: 'a', label: 'Coeficiente A (> 0)' },
            { key: 'b', label: 'Coeficiente B (> 0)' },
            { key: 'c', label: 'Coeficiente C (> 0)' },
        ],
        validate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            if (isNaN(a) || a <= 0) return 'A debe ser positivo.';
            if (isNaN(b) || b <= 0) return 'B debe ser positivo.';
            if (isNaN(c) || c <= 0) return 'C debe ser positivo.';
            return null;
        },
        calculate: (values) => {
            const a = parseFloat(values.a);
            const b = parseFloat(values.b);
            const c = parseFloat(values.c);
            let results = [];
            for (let x = 1; x <= 10; x++) {
                const y = a * (x - 1) - b * x + c;
                results.push(`X=${x} → Y=${y}`);
            }
            return results.join('\n');
        },
    },
    N13: {
        id: 'N13',
        title: 'Ejercicio N13',
        description: 'Tabla de multiplicar.',
        example: 'A=3 → 3x1=3, 3x2=6...',
        inputs: [{ key: 'n', label: 'Ingrese N (> 0)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 0) return 'N debe ser mayor a 0.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let results = [];
            for (let x = 1; x <= 10; x++) {
                results.push(`${n} x ${x} = ${n * x}`);
            }
            return results.join('\n');
        },
    },
    N14: {
        id: 'N14',
        title: 'Ejercicio N14',
        description: 'Suma de números pares desde 2 hasta N.',
        example: 'A=10, SUM = 2+4+6+8+10 = 30',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 10)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 10) return 'N debe ser mayor a 10.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let text = 'SUM = ';
            let pares = [];
            for (let i = 2; i <= n; i += 2) {
                sum += i;
                pares.push(i);
            }
            text += pares.join('+');
            return `${text} = ${sum}`;
        },
    },
    N15: {
        id: 'N15',
        title: 'Ejercicio N15',
        description: 'Suma de números impares desde 1 hasta N.',
        example: 'A=12, SUM = 1+3+5+7+9+11 = 36',
        inputs: [{ key: 'n', label: 'Ingrese N (Número > 10)' }],
        validate: (values) => {
            const n = parseInt(values.n, 10);
            if (isNaN(n) || n <= 10) return 'N debe ser mayor a 10.';
            return null;
        },
        calculate: (values) => {
            const n = parseInt(values.n, 10);
            let sum = 0;
            let text = 'SUM = ';
            let impares = [];
            for (let i = 1; i <= n; i += 2) {
                sum += i;
                impares.push(i);
            }
            text += impares.join('+');
            return `${text} = ${sum}`;
        },
    },
};

// Genera un arreglo de claves ['N1', 'N2', ... 'N15'] para iteraciones simples
export const exerciseKeys = Object.keys(exercisesData);

function parseCount(value) {
    let result = Number.parseInt(value);

    if (isNaN(result)) {
        throw new Error("Невалидное значение")
    }

    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        if ((b + c < a) || (a + c < b) || (b + a < c)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let hp = this.getPerimeter() / 2;

        return +Math.sqrt(hp * (hp - this.a) * (hp - this.b) * (hp - this.c)).toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            'getArea' : function() {
                return "Ошибка! Треугольник не существует";
            },
            'getPerimeter' : function() {
                return "Ошибка! Треугольник не существует";
            },
        }
    }
}
import fizzbuzz from "./fizzbuzz"

// describe("fizzbuzz - happy path", () => {
//     const mapAnswers: [number, string][] = [
//         [1, "1"],
//         [2, "2"],
//         [3, "fizz"],
//         [4, "4"],
//         [5, "buzz"],
//         [6, "fizz"],
//         [10, "buzz"],
//         [15, "fizzbuzz"],
//         [30, "fizzbuzz"],
//     ]

//     test.each(mapAnswers)("when input %i should return %s", (value, expected) => {
//         expect(fizzbuzz(value)).toBe(expected)
//     })
// })

// describe("fizzbuzz - edge cases", () => {
//     it("should return fizzbuzz for 0", () => {
//         expect(fizzbuzz(0)).toBe("fizzbuzz")
//     })

//     it("should handle negative numbers correctly", () => {
//         expect(fizzbuzz(-3)).toBe("fizz")
//         expect(fizzbuzz(-5)).toBe("buzz")
//         expect(fizzbuzz(-15)).toBe("fizzbuzz")
//     })

//     it("should handle large numbers correctly", () => {
//         expect(fizzbuzz(105)).toBe("fizzbuzz")
//         expect(fizzbuzz(101)).toBe("101")
//     })
// })

// describe("fizzbuzz - invalid input", () => {
//     it("should throw error when input is not a number", () => {
//         expect(() => fizzbuzz("abc" as any)).toThrow()
//         expect(() => fizzbuzz(null as any)).toThrow()
//         expect(() => fizzbuzz(undefined as any)).toThrow()
//         expect(() => fizzbuzz({} as any)).toThrow()
//     })

//     it("should throw error when input is a float", () => {
//         expect(() => fizzbuzz(3.5)).toThrow()
//     })
// })

// describe("fizzbuzz - property based", () => {
//     it("should return fizz for multiples of 3 only", () => {
//         for (let i = 1; i <= 100; i++) {
//             if (i % 3 === 0 && i % 5 !== 0) {
//                 expect(fizzbuzz(i)).toBe("fizz")
//             }
//         }
//     })

//     it("should return buzz for multiples of 5 only", () => {
//         for (let i = 1; i <= 100; i++) {
//             if (i % 5 === 0 && i % 3 !== 0) {
//                 expect(fizzbuzz(i)).toBe("buzz")
//             }
//         }
//     })

//     it("should return fizzbuzz for multiples of 15", () => {
//         for (let i = 1; i <= 100; i++) {
//             if (i % 15 === 0) {
//                 expect(fizzbuzz(i)).toBe("fizzbuzz")
//             }
//         }
//     })

//     it("should return number as string otherwise", () => {
//         for (let i = 1; i <= 100; i++) {
//             if (i % 3 !== 0 && i % 5 !== 0) {
//                 expect(fizzbuzz(i)).toBe(i.toString())
//             }
//         }
//     })
// })


describe("test Input", () => {
    test("1 is be 1",
        () => {
            let target = fizzbuzz(1)
            expect(target).toBe("1")
        })
    test("2 is be 2",
        () => {
            let target = fizzbuzz(2)
            expect(target).toBe("2")
        })

    test("3 is be fizz",
        () => {
            let target = fizzbuzz(3)
            expect(target).toBe("fizz")
        })

    test("4 is be 4", () => {
        let target = fizzbuzz(4)
        expect(target).toBe("4")
    })
    test("5 is be buzz", () => {
        let target = fizzbuzz(5)
        expect(target).toBe("buzz")
    })
    test("15 is be fizzbuzz", () => {
        let target = fizzbuzz(15)
        expect(target).toBe("fizzbuzz")
    })
    test("-1 is be error", () => {
        expect(() => fizzbuzz(-1)).toThrow()
    })

})
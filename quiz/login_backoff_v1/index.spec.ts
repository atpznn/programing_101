import fizzbuzz from "./index"
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
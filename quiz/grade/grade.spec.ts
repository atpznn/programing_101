import grade from "./grade"
describe("test Input", () => {
    const grades = [
        [100, 'A'],
        [90, 'A'],
        [82, 'A'],
        [80, 'A'],
        [76, 'B+'],
        [75, 'B+'],
        [71, 'B'],
        [70, 'B'],
        [69, 'C+'],
        [65, 'C+'],
        [62, 'C'],
        [60, 'C'],
        [59, 'D+'],
        [55, 'D+'],
        [50, 'D'],
        [49, 'F'],
        [30, 'F'],
        [0, 'F'],
    ]

    test.each(grades)(
        "%i is be %s",
        (score, answer) => {
            let target = grade(score)
            expect(target).toBe(answer)
        })
})
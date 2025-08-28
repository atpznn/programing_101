import fizzbuzz from './fizzbuzz'
const mapAnswers: [number, string][] = [
    [1, '1'],
    [2, '2'],
    [3, 'fizz'],
    [4, '4'],
    [5, 'buzz'],
]

describe("fizzbuzz test", () =>
    test.each(mapAnswers)(`when send %i should be return %s`, (value, answer) => {
        const result = fizzbuzz(value)
        expect(result).toBe(answer)
    })
)
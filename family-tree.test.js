const familyTree = require('./family-tree')

describe('Family Tree', function () {
    test('I am in my family tree', function () {
        const me = familyTree[0]
        expect(me.name).toEqual('Eric')
    })

    test('My sister is in the family tree', function () {
        const sister = familyTree[1]
        expect(sister.name).toEqual('Olivia')
    })

    test('My mum is in the family tree', function () {
        const mum = familyTree[2]
        expect(mum.name).toEqual('Aneta')
    })
})
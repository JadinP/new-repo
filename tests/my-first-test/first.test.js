const shoppingList = ['apples', 'oranges', 'bananas'];

test('the shopping list has oranges', () => {
    expect(shoppingList).toContain('oranges');
});
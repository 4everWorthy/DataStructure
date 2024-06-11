let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee']; // got right
    shoppingList.push('fruit loops'); // add item to end of list

let coffeeIndex = shoppingList.indexOf('coffee'); // name of item + 'index'
    if (coffeeIndex !== -1) { // ensures that an element exists in an array before attempting to perform operations on it
        shoppingList[coffeeIndex] = 'fair trade coffee';
    }           // '.indexof':: index allows you to precisely locate and manipulate specific elements within the array

let chipsIndex = shoppingList.indexOf('chips');
let salsaIndex = shoppingList.indexOf('salsa');
    if (chipsIndex !== -1 && salsaIndex !== -1); { // the use of '&&' ensures that both items exist in the array before attempting to replace them
        shoppingList.splice(chipsIndex, 2, 'rice', 'beans');
                // '(array name).splice' simultaneously removes and adds elements;
                // Reason for Using 'chipsIndex': This is the index at which to start the splice operation :: 'chips' appears before 'salsa'
                // Why 2: Because we want to replace both 'chips' and 'salsa', we need to remove two elements from the array.
    }

let shoppingCart = []; // empty array
 
let lastItem = shoppingList.pop(); // '(array name).pop' remove last item from list
    shoppingCart.push(lastItem); // '(array name).push' add item to cart

let firstItem = shoppingList.shift(); // '(array name).shift' remove first item from list
    shoppingCart.push (firstItem);

    while (shoppingList.length > 0) { // While there are items in the shopping list, remove the first item from the shopping list and add it to the shopping cart
        let item = shoppingList.shift();
        shoppingCart.push(item);
    }

    shoppingCart.sort(); // sort items in alphabetical order
    shoppingCart.reverse(); // sort items in reverse order

        console.log(shoppingCart.join(', ')); // join items in shopping cart into a single string, separated by a comma and a

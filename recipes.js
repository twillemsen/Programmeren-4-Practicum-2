// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: "Chocolate Chip Cookies",
        category: "Dessert",
        procedure: [
            "Preheat oven to 375°F (210°C), or 350°F (195°C) if you want chewy cookies.",
            "Cream butter (or margarine), granulated sugar, and brown sugar in a large mixer bowl.",
            "Add eggs one at a time, beating until fully incorporated.",
            "Add vanilla extract and beat in.",
            "In a small bowl, sift together the dry ingredients (except chocolate & nuts). Add to the wet mixture in two parts and fold until combined. (If you beat this too long, you may get some gluten formation which will change the cookie texture).",
            "Stir in chocolate morsels (chips), and nuts if using. Please be considerate of people with nut allergies by mentioning the nuts if you use them.",
            "Drop by rounded tablespoons onto ungreased baking sheets. There should be enough fat in the cookie dough to prevent sticking, but using parchment paper or non-stick pans may help if you find this not to be the case.",
            "Bake in the preheated oven for 10 to 12 minutes or until golden brown (cooking times may vary). Let stand for about 1 minute and remove from hot baking sheet to cool on a wire rack."
        ]
    }
];
module.exports = recipes;
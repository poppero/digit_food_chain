import react, { createContext, useState } from "react"


export const ProductContext = createContext()
export const CategoriesContext = createContext()
export const IngredientsContext = createContext()
export const CartContext = createContext()




export const ProductProvider = props => {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Steaks"
        },
        {
            id: 2,
            name: "Pizzas"
        },
        {
            id: 3,
            name: "Cakes"
        },
    ])
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Delmonico Steak",
            description: "Grilled beef steak with honey, mustard and soy sauce",
            price: "45",
            image_path: "http://localhost:3000/steakplate.png",
            category_id: 1
        },
        {
            id: 2,
            name: "Portobello Steak",
            description: "Beef steak with onions, red peppers and olive sauce",
            price: "30",
            image_path: "http://localhost:3000/steaktwo.png",
            category_id: 1
        },
        {
            id: 3,
            name: "Beef Wellington",
            description: "Grilled beef steak with red wine and mushrooms",
            price: "25",
            image_path: "http://localhost:3000/steakthree.png",
            category_id: 1
        },
        {
            id: 4,
            name: "Sha cha Beef",
            description: "Beef steak with potatoes, 4 types of cheese and broccoli",
            price: "40",
            image_path: "http://localhost:3000/steakfour.png",
            category_id: 1
        },
        {
            id: 5,
            name: "Pepperoni Pizza",
            description: "Tomato sauce, cheese and pepperoni",
            price: "45",
            image_path: "http://localhost:3000/pizzafourpng.png",
            category_id: 2
        },
        {
            id: 6,
            name: "Ham and Cheese Pizza",
            description: "Tomato sauce, cheese and ham",
            price: "45",
            image_path: "http://localhost:3000/pizzatwo.png",
            category_id: 2
        },
        {
            id: 7,
            name: "Basilico Pizza",
            description: "Tomato sauce, cheese, onion and basil",
            price: "45",
            image_path: "http://localhost:3000/pizzathree.png",
            category_id: 2
        },
        {
            id: 8,
            name: "Vegetarian Pizza",
            description: "Tomato sauce, cheese, peppers, mushrooms, tomato and olives",
            price: "45",
            image_path: "http://localhost:3000/pizzaplate.png",
            category_id: 2
        },
        {
            id: 9,
            name: "Caramel Cheesecake",
            description: "Cream cheese, evaporated milk, vanilla, caramel",
            price: "45",
            image_path: "http://localhost:3000/cakeone.png",
            category_id: 3
        },
        {
            id: 10,
            name: "Chocolate Cake",
            description: "Cocoa powder, double chocolate, coconut oil",
            price: "45",
            image_path: "http://localhost:3000/caketwo.png",
            category_id: 3
        },
        {
            id: 11,
            name: "Muffin",
            description: "White sugar, eggs and blueberries",
            price: "45",
            image_path: "http://localhost:3000/cakethree.png",
            category_id: 3
        },
        {
            id: 12,
            name: "Baklava",
            description: "Pistachio and walnuts",
            price: "45",
            image_path: "http://localhost:3000/cakefour.png",
            category_id: 3
        },


    ])
    const [ingredients, setIngredients] = useState([
        {
            id: 1,
            product_id: 1,
            ingredient: "Steak"
        },
        {
            id: 2,
            product_id: 1,
            ingredient: "Potatoes"
        },
        {
            id: 3,
            product_id: 1,
            ingredient: "Tomatoes"
        },
        {
            id: 4,
            product_id: 1,
            ingredient: "Salad"
        },
        {
            id: 5,
            product_id: 1,
            ingredient: "Bread"
        },
        {
            id: 6,
            product_id: 1,
            ingredient: "BRQ sauce"
        },
        {
            id: 7,
            product_id: 1,
            ingredient: "Ketchup"
        },
        {
            id: 8,
            product_id: 1,
            ingredient: "Oregano"
        },
    ])
    const [cart, setCart] = useState([
        {
            id: 1,
            product_id: 1,
            quantity: 2
        },
        {
            id: 2,
            product_id: 2,
            quantity: 1
        },
        {
            id: 3,
            product_id: 9,
            quantity: 1
        },
        {
            id: 4,
            product_id: 4,
            quantity: 1
        },
    ])
    return (
        <ProductContext.Provider value={[products, setProducts]} >
            <CategoriesContext.Provider value={[categories, setCategories]} >
                <IngredientsContext.Provider value={[ingredients, setIngredients]}>
                    <CartContext.Provider value={[cart, setCart]}>
                        {props.children}
                    </CartContext.Provider>
                </IngredientsContext.Provider>
            </CategoriesContext.Provider>
        </ProductContext.Provider>

    )
}
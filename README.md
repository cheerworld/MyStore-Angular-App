# MyStore

MyStore is Angular application that allows users to view a list of available products to purchase, user can add them to a shopping cart, and ultimately complete the checkout process. There are 4 views in total.

- `\` product list path. User can see a list of all products. User can add products to cart in this view. When user click on the image, it will take user to the product detail page.
- `\product/:productName` product item detail page. User can see the detail of a product and add the quantity to cart.
- `\cart` cart page. On the left side, user can see all products in cart. User can change the quantity of each product. There is a total amount shows how much user will need to pay for all the products in cart. On the right side, there is a form, user need to enter their full name, address and credit card number, hit submit, to be able to make the payment and go to the confirmation page.
- `\confirmation` confirmation page. After user successfully submit their payment information, user will see this page.

## Getting Started

- To get this project, type `git clone https://github.com/cheerworld/MyStore-Angular-App.git` in your termical to clone this project to your computer.
- `cd angular-myStore-project-starter` to cd into your project.
- Type `npm install` to install all the dependencies.
- Type `ng serve` to start the project.
- Go to `localhost:4200` to see the app.

## Project View

This is a view that is similar to this app. There is some minor difference, but the general idea is the same.
![MyStore shopping flow](shoppingflow.gif)

### Enjoy and have fun with MyStore App.

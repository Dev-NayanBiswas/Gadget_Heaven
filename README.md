
<p>
    <a>
    <h1 align="center">Gadget Heaven</h1>
    </a>
</p>

****

#### *Sort Description*
*Its a Simple E commerce website for Gadgets like Laptops, Smartphones & Accessories, Where user can buy their desire products. All these categories are categorized in a list in the left side of this website. By clicking on specific tab user can see only those categories. on dashboard cart and wishlist will be populated but initially that will shown an Empty message. and static section is categorized by product options, each product will display its own chart base on price and* ratings....

#### *Fundamental Concepts*
***

*As a Single Page Application React project, this one was created with React-Router-Dom for routing and TailwindCss for basic styling....*

### *React-Router-Dom Concepts*
1. For basic routing all routes are mapped on routes file, creating with latest v-6 createBrowserRouter.
2. useRouterError() for handling uncertain route paths.
3. children and Outlet concepts to direct child routes.
4. default paths with indexing replace and Navigate component.
5. Instead of using loader again and again, here data are fetched by loader on the parent routes, and distributed its value to children with the help of react-router **OutletContext**
6. useParams() router hook is used to get the specific category and desire ID to get the specific information about products.
7. NavLink router component has few uses here for dynamic styling the active section bar.
8. and Navigate router-component used to direct user to specific pages.
9. for component reusability and to get the specific styling on pages I used  useLocation() hook and it's pathname key here


### *React Concepts*
1.All Components has break down to small pieces to maintain a clean sheet.
2. Reusable Components like navbar,cards,Footer,Banner are packed in a single folder.
3. router pages have their own Folder as well and nested pages have shared folder with their parent component.
4. utils folder is consisting with basic Scripts like globally reused functions and Context. 
5. Most popular and commonly loved useState() hook has its uses here to store data as a personal memory of components.
6. useEffect() has its functionality for naming the titleBar dynamically and based on dependencies it has its own functionalities on components, Here you will found basic 4 uses of useEffect()..
   - Empty dependencies to render onces when component mounts.
   - Props dependencies for specific operations need to be done when prop changes.
   - State dependencies when user changes.
   - Multiple dependencies for critical operations.
   
7. Cause it's a slightly nested project,  So I found comfort in using ContextApi for maintaining data from root  and to operates them from different part of child components. Though I faced a tons of bugs and error an pain to set up my Context, cause vite don't allow to create JSX in js folders and when I import them I got warnings.
8. Data sharing between Context was whole new experience of myself in this projects. in few cases like, maintaining data between wishlist and cart. cartContext and wishlistContext shared few of their memories between themselves. Though  cart and wishlist both could be managed from one context but I found it would be a next level challenge for me. So to avoid complexities I created 2 contexts here...


#### *Features you may Like*

1. *Every parent page and their siblings has there own dynamic Title* heading,
2. *Navbar buttons and category buttons will look different on active mode.*
3. *User can track their cart and wishlist count on cart and wishlist icons notification count as a tooltip rightSide of the navbar.*
4. *cart and Wishlist have their empty status text,*
5. *on an active cart user can sort their cartList on descending order and can track total amount he will be paid.*
6. *pressing on bin will remove that item from cart.*
7. *on every Purchase a beautiful modal will popup with  a button and total amount, close cart will erase all cart items.*
8. *on wishlist user can add products to their carts if that one is not existed on cart and need to be sure the total payable amount of cart isn't exceed $1000*
9. *Successfully adding on cart that item will be remove from wishlist and will add on cart queue.*
10. *on every detail section user can see their liked product status on ❤️ icon, which will change color if the item is already in wishlist and that button won't work again like before..*
11. *Statics section will show you a whole overview of all items, which was so challenging for me to figure out how it works and to covert my data to sync in its realm, User can select items category to show its own products status*
12. *AboutUs and FAQ sections are static nothing fancy on them but user can get answer of mostly asked question, and a simple overview of US*


***
### *Thanks for Reading*
*Thanks to all the brilliant minds who crafted this beautifully intricate realm we call Web Development*







[_Project Requirements_](./src/assets/Project%20_Requirements.pdf)

[_Feel Free to Visit_](https://gadgetheavenassignment08.netlify.app/)



<br>
<br>
<br>
<br>
<br>
<br>
<br>
<p>
    <a>
    <h4><i>Drawbacks and Limitations</i></h4>
    </a>
</p>

*this project is not responsive for all devices*
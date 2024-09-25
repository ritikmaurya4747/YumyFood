# Navbar and css file created 
# For underline below list manage with state 
# cart data shoe hone ke liye position relative ka use kiye hain using css effect Navbar completed
# Now going to create pages (home, placeorder, cart)
# Using Routes we created path for all this up in app.jsx component
# # created header folder and mounted in Home.jsx
# Header image ko public folder me rakhe hain and waha se ise mount kar rahe h header me 
# Page reload karne ke baad header text 3s me aane chahiye animation index.css me hain and header.css me ise use kiye hain
# Now created ExploreMenu folder to get menu_list images in this folder and mounted in Home.jsx folder
# Explore menu image me jo border aa rha h use state ke through manage kar rahe h as a props accept karke from Home.jsx state is defined
# Food item display hone ke liye context create karenge  ise main.jsx me wrap karenge 
# and assets me se data shopcontext.jsx me import karge taki yaha se data ko kahi bhi use kiye ja sake like Hook and creating FoodDisplay.jsx folder 
# FoodDisplay.jsx me sare item liye and ise mount kiya FoodItem.jsx compo me 
# Fooditem me code kar rahe and FoodDisplay me ise return kar rahe hain
# FoodItem   add karenge state ke through and add to cart or remove functionality StoreContext me likhenge 
# Explore images me jo images hain ushpe click karne par item filter hoke aaye in FoodDisplay compo code written (category==="All")
# Now creating Footer
# Creating AppDownload compo 
# Now going to make responsive 
# Handle menu-list to go on that section using Link adding in Navbar.jsx and css file adding scroll behaviour smooth 
# Now making LoginPop compo to handle login or signform  and in the app.jsx creating state to handle it  and app.jsx se as a props setShowLogin ko bheja gaya and navbar me ise accept karke onclick ke through ise true kiya hain then LoginPopup mount hoga 
# setShowLogin ko Navbar me true kar rahe hain and cross icon par click karne par ise false kar rahe han in LoginPopup compo me 
# Now makeing cart functionality to update cart data in to cart icon that product user add that product shaw in the cart icon 
# Adding item into cart code in  Navbar.jsx 
# Now adding functionality in PlaceOrder pages first we need to import useNavigate in cart.jsx and add onclick functionality in button
# now creating adding functionality in placeorder compo 
# connectiing login , signup endpoit with the frontend .
# defined url in storeContext.jsx
# login hone ke baad logout button dikhe so add custom hook un navbar.jsx
# refresh karne par logout na ho logic inside storeContext.jsx
# now getting image or data from databse making state in storeContext.jsx
# now getting from database using api in list to intigrate.
# ab backend api frontend se connect karenge taki cart me data save karte hi db me save ho. adding in the storeContext.jsx api  added token inside the code if {block code }
# page reload karne par added item quntity show kare 
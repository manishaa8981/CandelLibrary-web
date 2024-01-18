import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/homePage/homepage.jsx";
import LoginForm from "./pages/login&register/login.jsx";
import RegisterForm from "./pages/login&register/register.jsx";
import AboutUs from "./pages/aboutUs/aboutUs.jsx";
import Cart from "./pages/cart/cart.jsx";
import Contact from "./pages/contact/contact.jsx";

const queryClient = new QueryClient();

function App() {
  return (
<>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={createBrowserRouter([
      {path: "/", element: <Homepage/>},
      {path: "/LoginForm", element: <LoginForm/>},
      {path: "/RegisterForm", element: <RegisterForm/>},
      {path: "/AboutUs", element: <AboutUs/>},
      {path: "/Cart", element: <Cart/>},
      {path: "/Contact", element: <Contact/>},

    ])} />
  </QueryClientProvider>
</>
  )
}

export default App


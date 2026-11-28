import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
   return(
      <div className="site-layout">
          <Header />
          <main className="site-main">
            {children}
          </main>
           <Footer />
    </div>

   );

};

export default Layout;
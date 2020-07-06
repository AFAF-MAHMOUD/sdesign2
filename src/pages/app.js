

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
<style jsx>
     {`
     .navbar-nav .dropdown-menu {
        background: transparent;
        position: static;
        float: none;
    
      }
    
      .dropdown-item {
        color: white;
        display: block;
        width: 100%;
        padding: .25rem 1.5rem;
        clear: both;
        font-weight: 400;
    
        text-align: inherit;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
        font-size: 15px;
      }
    
      .dropdown-menu.show {
        border: none;
      }
    
     `}
</style>
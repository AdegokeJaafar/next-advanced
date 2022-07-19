/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-head-element */
/* eslint-disable react/no-unknown-property */
import Navigation from "../../components/Navigate"
import Head from "next/head";
import Link from "next/link"
const Layout = ({
    children
}) => {
    return (
    <>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossOrigin="anonymous"></script>
         </head>
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                <a className="link-secondary">Subscribe</a>
                </div>
                <div className="col-4 text-center">
                <a className="Blog-header-logo text-dark">Large</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="link-secondary" href="#" aria-label="Search">
                <svg xmNamelns="http://www.w3.org/2000/svg" width="20" height="20"></svg>
                </a>
                <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                </div>
                </div>
            </header>
        </div>
            <Navigation />
            {children}

           {/* styled component */}
           <style jsx>
                    {`
                        .bd-placeholder-img {
                            font-size: 1.125rem;
                            text-anchor: middle;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            user-select: none;
                        }

                        @media {min-width: 768px} {
                            .bd-placeholder-img-lg {
                                font-size: 3.5rem;
                            }
                        }
                    `}
                </style>
    </>
        
    );
}

export default Layout;
/* eslint-disable react/no-unknown-property */
import Link from "next/link";

const Header = (props) => {
    return (
        <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="link-secondary" href="#">
                        Subscribe
                    </a>
                </div>
                <div className="col-4 text-center">
                <Link href={'/'}>
                    <a className="blog-header-logo text-dark" href="#">
                        NEWSK
                    </a>
                </Link>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="link-secondary" href="#" aria-label="Search">
                        <svg 
                            xmlns="http://www.w3.orrg/2000/svg" 
                            width="20" 
                            height="20" 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            className="mx-3" 
                            role="img" 
                            viewBox="0 0 24 24"
                        >
                            <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="2.5" />
                            <path d="M21 211-5.2-5.2"/>
                        </svg>
                    </a>
                    <Link href={`/signup`}>
                        <a className="btn btn-sm btn-outline-secondary user-login-btn" href="#">
                            Sign up
                        </a>
                    </Link>
                    <Link>
                        <a className="btn btn-sm btn-outline-secondary user-login-btn" href="#">
                            Sign in
                        </a>
                    </Link>
                </div>
                </div>
            </header>

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
                        .user-login-btn{
                            margin: 0 10px;
                        }
                    `}
                </style>
        </div>
    )
}


export default Header;
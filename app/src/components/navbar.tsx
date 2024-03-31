import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
  const { data } = useSession();
  const isUser = !!data?.user;
  const img = data?.user?.metadata?.google_img;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bg-body-tertiary mt-3 rounded-4 shadow-lg">
            <nav className="navbar navbar-expand-lg ps-4 pe-3">
              <Link className="navbar-brand" href="/">
                <Image src="/images/logo.png" alt="logo" width="80" height="80" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto gap-3">
                  <li className="nav-item">
                    <Link className="nav-link active" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/docs">
                      Documentation
                    </Link>
                  </li>
                  {isUser ? (
                    <>
                      <li className="nav-item">
                        <Link className="nav-link" href="/dashboard">
                          Dashboard
                        </Link>
                      </li>
                      {img && (
                        <li className="nav-item">
                          <Image className="rounded-circle" src={img} alt="profile" width={38} height={38} />
                        </li>
                      )}
                      <li className="nav-item">
                        <button className="btn btn btn-outline-light" onClick={() => signOut({ callbackUrl: '/' })}>
                          Logout
                        </button>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <button
                        className="btn btn-primary"
                        onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                      >
                        Login with Google
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent"
  aria-expanded="false"
  aria-label="Toggle navigation"
/>; */
}

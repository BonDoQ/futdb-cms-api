import { signIn, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';

import CardWhatYouGet from '@/components/card-what-you-get';
import CardStats from '@/components/card-stats';

export default function Home() {
  const { data } = useSession();
  const isUser = !!data?.user;
  return (
    <>
      <Head>
        <title>EAFC 24 - Home</title>
      </Head>

      <section className="container mt-6">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto">
            <div className="pt-2">
              <h1 className="m-0 display-0 text-center">
                EAFC 2024
              </h1>
              <h1 className="m-0 display-1 text-center">
                <div className="text-secondary">Your Ultimate Team API</div>
              </h1>
              <p className="text-secondary lead text-center mt-3">
                Unleash the Power of EAFC Data with seamless API integration, and access to all player data, prices,
                more for your bots, applications, or tools.
              </p>
              <div className="d-flex mt-5 gap-3 justify-content-center">
                {isUser ? (
                  <Link href="/dashboard" className="btn btn-lg btn-primary shadow">
                    Go to dashboard
                  </Link>
                ) : (
                  <button className="btn btn-lg btn-primary shadow" onClick={() => signIn('google')}>
                    Login with Google
                  </button>
                )}
                <Link href="/docs" className="btn btn-lg btn-primary-subtle">
                  API documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-7">
        <div className="row">
          <div className="col">
            <h1 className="display-1 mb-4 text-center">
              What you get
            </h1>
          </div>
        </div>
        <div className="row">
          <CardWhatYouGet title='Full Database'
            description='comprehensive dataset of players, prices, nations, leagues, clubs, and card versions, freely accessible to everyone.
            ' ></CardWhatYouGet>

          <CardWhatYouGet title='API First' description='A comprehensive and user-friendly API along with up-to-date documentation. To get started, simply obtain your free API key by logging in with Google.
' ></CardWhatYouGet>

          <CardWhatYouGet title='Regular Updates' description='Our dataset undergoes updates at least daily, if not more frequently, ensuring near real-time synchronization with updates from the EA companion app.
' ></CardWhatYouGet>

          <CardWhatYouGet title='Player Images' description='Our dataset includes imagery for all players, nations, leagues, clubs, and card versions. This feature will soon be available on our API.
' ></CardWhatYouGet>
        </div>
      </section>

      <section className="container mt-7">
        <div className="row">
          <div className="col">
            <h1 className="display-1 mb-4 text-center">
              What you get
            </h1>
          </div>
        </div>
        <div className="row">
          <CardStats metric='21.681' type='Players'></CardStats>
          <CardStats metric='128' type='Cards'></CardStats>
          <CardStats metric='212' type='Nations'></CardStats>
          <CardStats metric='62' type='Leagues'></CardStats>
          <CardStats metric='748' type='Clubs'></CardStats>
        </div>
      </section>
    </>
  );
}

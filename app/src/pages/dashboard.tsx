import { useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data } = useSession();

  const apiToken = data?.user?.metadata?.api_token;
  const apiLimit = data?.user?.metadata?.api_limit;
  const fullname = `${data?.user?.first_name} ${data?.user?.last_name}`;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="bg-secondary-subtle p-5 rounded-4">
            <h3 className="display-5 fw-bold text-body-emphasis">Welcome, {fullname}!</h3>

            <div className="mt-4">
              <p>
                API token <code className="bg-success-subtle text-success px-2 py-1 rounded-2">{apiToken}</code>
              </p>
              <p>
                API calls <code className="bg-warning-subtle text-warning px-2 py-1 rounded-2">{apiLimit} / 100</code>
              </p>
            </div>
            <a href="#" className="btn btn-sm btn-outline-primary mt-3">
              Buy more credits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

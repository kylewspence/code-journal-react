import { Link, Outlet } from 'react-router-dom';
export function Header() {
  return (
    <div>
      <nav className="px-4 text-white bg-gray-900">
        <ul>
          <Link to="/" className="text-white">
            <li className="inline-block py-2 px-4">Code Journal</li>
          </Link>
          <li className="inline-block py-2 px-4">
            <Link to="modify" className="text-white">
              Entries
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

import { Fragment } from 'react';
import Link from 'next/link';
const news = () => {
  return (
    <Fragment>
      <h1>Hello</h1>
      <ul>
        <li>
          <Link href='/news/page'>New Page</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default news;

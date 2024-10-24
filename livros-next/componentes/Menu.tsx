import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/livros">Livros</Link>
        </li>
        <li>
          <Link href="/editoras">Editoras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

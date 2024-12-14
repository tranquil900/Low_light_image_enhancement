import React from 'react';
import Logo from './Logo';
import Description from './Description';

export default function Header() {
  return (
    <header className="text-center mb-12">
      <Logo />
      <Description />
    </header>
  );
}
'use client';

import { Code2 } from 'lucide-react';
import Link from 'next/link';

//Affiche le logo du site
export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Code2 className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl text-primary">TechConf</span>
    </Link>
  );
}

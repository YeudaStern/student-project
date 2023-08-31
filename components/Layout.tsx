// components/Layout.js
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode; 
}
  
export default function Layout({ children }: LayoutProps) {
  return (
    <>
    

      <main>{children}</main>

     
    </>
  )
}
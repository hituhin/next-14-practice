import Link from 'next/link';
import Card from '../app/card/product-card/page';

export default function Home() {
  return (
    <>
      <h1> Wellcome !</h1>
      <Link href='/user'>USER List</Link>
      <br />
      <Card />
    </>
  );
}

import PreviewPage from './preview/page';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Kivva Tech – India’s Next-Gen Software Development & AI Agency',
  description:
    'Kivva Tech offers world-class software development, custom AI & ML solutions, remote development teams and digital marketing. Scale smarter with our India-based team.',
};
export default function Home() {
  return (
    <>
      <PreviewPage />
    </>
  );
}

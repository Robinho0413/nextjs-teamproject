import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface NavBarLinksProps {
    link: string;
    content: string;
  }

export default function NavBarLinks  ({link, content}: NavBarLinksProps) {
    const pathname = usePathname();
    return(
        <Link className={clsx("mb-4 lg:mb-0 lg:pe-2 text-[#BBA]", { 'bg-sky-100 text-blue-600': pathname === link})} href={link}>{content}</Link>
    )
}

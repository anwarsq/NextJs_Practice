
/**
* @param {Object} props
* @param {(String|null)} props.logo
**/

import Link from "next/link"
export default function Navbar(props) {
    let { logo } = props
    return (
        <header className={
            'w-full fixed top-0 h-20 bg-red-200'
        }
        >
            <div className="mx-auto max-w-[1280px]">
                <div>
                    {
                        logo !== null &&
                        <img
                            src={logo}
                            alt="logo-page"
                            
                            
                            className={'w-20 object-contain mt-20'}
                        />
                    }
                    <nav>
                        <ul className={'flex items-center gap-4'}>
                        <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about1">About 1</a>
                                <Link href={'/about2'}>About 2</Link>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
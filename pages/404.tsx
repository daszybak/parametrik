import Link from 'next/Link'

export default function FourOhFour() {
    return <div>
        <h1>Page Not Found</h1>
        <Link href="/">
            <a>Go Home</a>
        </Link>
    </div>
}
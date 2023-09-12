export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-zinc-800 bottom-0">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://yoansinh.com/" target="_blank" className="hover:underline">YoanSinH</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/" className="mr-4 hover:underline md:mr-6 ">Posts</a>
                    </li>
                    <li>
                        <a href="/dreams" className="mr-4 hover:underline md:mr-6">Dreams</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
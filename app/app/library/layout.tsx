export default function LibraryLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="header">
                <h1>Library</h1>
            </div>
            {children}
        </>
    )
}
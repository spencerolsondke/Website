export default function Card({children}) {
    return (
        <div class="relative h-screen">
            <div class="flex-col h-full pt-72 pb-10 inset-x-0 top-0">
                {children}
            </div>
        </div>
    )
}
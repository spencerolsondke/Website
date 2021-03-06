import Sidebar from "./Sidebar";
export default function Layout({children}) {
    return (
        <div class='flex'>
            <Sidebar />
            <div class="flex-col mx-auto my-72 inset-y-0 right-0">
                {children}
            </div>
        </div>
    )
}
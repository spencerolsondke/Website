import Sidebar from "./Sidebar";
export default function Layout({children}) {
    return (
        <div class="flex">
            <Sidebar />
            <div class="w-1/8"/>
            <div class="flex-col mx-auto">
                {children}
            </div>
        </div>
    )
}
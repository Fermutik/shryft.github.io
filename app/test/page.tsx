import { ZakazForm } from "@/components/zakaz-form";

export default function Home() {
    return (
        <div className="flex flex-col w-[600px] items-center justify-center min-h-screen p-4">
            <ZakazForm lang="ua" />
        </div>
    );
}

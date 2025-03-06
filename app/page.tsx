import { NotifyForm } from "@/components/notify-form";

export default function Home() {
  function handleNotify(formData: FormData) {
    const email = formData.get("email");
    console.log("Email submitted:", email);
    alert("Дякуємо! Ми повідомимо вас про запуск.");
  }

  return (
    <NotifyForm />
  );
}

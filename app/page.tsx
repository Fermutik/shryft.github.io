
"use client";

import Image from "next/image";

export default function Home() {
  function handleNotify(formData: FormData) {
    const email = formData.get("email");
    console.log("Email submitted:", email);
    alert("Дякуємо! Ми повідомимо вас про запуск.");
  }

  return (
    <div className="text-center p-8 rounded-lg shadow-xl bg-white dark:bg-gray-800 max-w-md w-full">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Скоро!
      </h1>

      <div className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        <div>Щось неймовірне наближається.</div>
        <div>Слідкуйте за оновленнями!</div>
      </div>

      <form action={handleNotify} id="notify-form" className="mb-4">
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ваш email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
        >
          Повідомити мене
        </button>
      </form>
      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        © 2025 shryft.com . Всі права захищені.
      </p>
    </div >
  );
}

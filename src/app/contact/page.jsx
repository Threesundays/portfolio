export const metadata = {
  title: "Контакты — Anton Krat",
  description: "Как со мной связаться",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 text-neutral-200">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Контакты</h1>

      <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6">
        <p className="mb-6 text-neutral-300">
          Связаться со мной проще всего по email или в Telegram. Отвечаю быстро.
        </p>

        <ul className="grid gap-4 text-neutral-300 md:grid-cols-2">
          <li>
            <div className="text-sm text-neutral-400">Email</div>
            <a className="underline hover:opacity-90" href="mailto:Threesundaysonewerk@gmail.com">
              Threesundaysonewerk@gmail.com
            </a>
          </li>
          <li>
            <div className="text-sm text-neutral-400">Telegram</div>
            <a className="underline hover:opacity-90" href="https://t.me/AntonKrat" target="_blank">
              @AntonKrat
            </a>
          </li>
          <li>
            <div className="text-sm text-neutral-400">LinkedIn</div>
            <a className="underline hover:opacity-90" href="https://www.linkedin.com/in/anton-krat-308626124/" target="_blank">
              linkedin.com/in/anton-krat
            </a>
          </li>
          <li>
            <div className="text-sm text-neutral-400">Город</div>
            <div>Санкт-Петербург</div>
          </li>
        </ul>

        {/* Простая форма без бэкенда (по желанию — можешь удалить) */}
        <form
          className="mt-8 grid gap-4"
          action="Threesundaysonewerk@gmail.com"
          method="post"
          encType="text/plain"
        >
          <input
            className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 outline-none placeholder:text-neutral-500"
            placeholder="Ваше имя"
            name="name"
            required
          />
          <input
            className="w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 outline-none placeholder:text-neutral-500"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <textarea
            className="min-h-[120px] w-full rounded-xl border border-white/10 bg-neutral-950/60 px-4 py-3 outline-none placeholder:text-neutral-500"
            placeholder="Сообщение"
            name="message"
          />
          <button
            type="submit"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur hover:bg-white/20"
          >
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}

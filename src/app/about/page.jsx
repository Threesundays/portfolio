export const metadata = {
  title: "Обо мне — Anton Krat",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-semibold tracking-tight">Обо мне</h1>

      <div className="flex flex-col md:flex-row md:items-start md:gap-10">
        {/* Фото слева */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-neutral-900/40 w-[320px] h-[460px]">
            <img
              src="/images/me.jpg"
              alt="Anton Krat"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Текст справа */}
        <div className="space-y-4 leading-relaxed text-neutral-300">
          <p>
            Привет! Меня зовут <strong>Антон Крат</strong>, я работаю в сфере CGI
            уже более <strong>10 лет</strong>. Основное направление моей
            деятельности — архитектурная визуализация и анимация. За это время я
            прошёл путь от классических рендеров до полного погружения в
            современные интерактивные технологии.
          </p>

          <p>
            Последние <strong>два года</strong> я работаю в роли технического
            художника. В этой позиции я занимался организацией и оптимизацией
            пайплайна для команды художников, внедрением нейросетевых инструментов
            для ускорения рабочих процессов и разработкой интерактивных сцен на
            <strong> Unreal Engine</strong> с фокусом на VR-проекты для{" "}
            <strong>Meta Quest</strong>.
          </p>

          <p>
            Моя философия проста: <em>невозможного не существует</em>. Под любую
            задачу я подбираю оптимальные инструменты и нахожу решение — будь то
            визуализация, интерактив или автоматизация процессов.
          </p>

          <p>
            Я владею такими инструментами, как 3ds Max, Corona Render, Forest
            Pack, RailClone, Photoshop и Unreal Engine 5. Мне близки проекты, где
            требуется соединить художественное видение с технической точностью, и
            именно на этом стыке я чувствую себя максимально эффективно.
          </p>
        </div>
      </div>
    </div>
  );
}

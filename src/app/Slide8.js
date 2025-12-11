import React from 'react'

export default function Slide8() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Кейс: Росатом — АЭС "Аккую" (Турция)
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						8
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-8 mb-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Параметры проекта</h3>
						<ul className="space-y-3 text-lg">
							<li>💰 <span className="font-semibold">$20 млрд</span> — бюджет</li>
							<li>⚡ <span className="font-semibold">4800 МВт</span> — мощность (4 энергоблока)</li>
							<li>📅 <span className="font-semibold">2023-2028</span> — сроки строительства</li>
							<li>🌍 <span className="font-semibold">Международный</span> проект (Россия + Турция)</li>
						</ul>
					</div>
					
					<div className="bg-[#fff3cd] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#000]">Геополитические факторы</h3>
						<ul className="space-y-3 text-base">
							<li>🌐 Международные санкции</li>
							<li>🏛️ Политическая стабильность региона</li>
							<li>💱 Валютные риски (руб./долл./лира)</li>
							<li>⚖️ Различия в правовых системах</li>
							<li>🤝 Дипломатические отношения РФ-Турция</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#f3f5f7] p-6 rounded-xl">
					<h3 className="text-xl font-semibold mb-4 text-center text-[#377dff]">Особенности инициации международного проекта</h3>
					<div className="grid grid-cols-2 gap-6">
						<ul className="space-y-2 text-base">
							<li>✓ Межправительственное соглашение (2010 г.)</li>
							<li>✓ Модель BOO (Build-Own-Operate) — Росатом строит, владеет и эксплуатирует</li>
							<li>✓ Гарантия покупки электроэнергии от Турции на 15 лет</li>
							<li>✓ Комплексная оценка политических рисков</li>
						</ul>
						<ul className="space-y-2 text-base">
							<li>✓ Адаптация проекта под турецкие стандарты безопасности</li>
							<li>✓ Анализ сейсмической активности региона</li>
							<li>✓ Локализация производства (турецкие подрядчики)</li>
							<li>✓ Культурные особенности управления</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						В международных проектах 40% времени инициации уходит на согласование юридических и политических вопросов
					</p>
				</div>
			</div>
		</div>
	)
}

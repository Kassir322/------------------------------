import React from 'react'

export default function Slide9() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Сравнение стандартов УП
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						9
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6 mb-6">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white px-4 py-2 rounded-lg text-center font-semibold mb-4">
							PMBOK (PMI)
						</div>
						<p className="text-sm mb-3"><span className="font-semibold">Происхождение:</span> США</p>
						<p className="text-sm mb-3"><span className="font-semibold">Подход:</span> Процессный</p>
						<p className="text-sm mb-4"><span className="font-semibold">Фокус:</span> Управление знаниями</p>
						<div className="bg-white p-3 rounded-lg text-xs space-y-1">
							<p>✓ 5 групп процессов</p>
							<p>✓ 10 областей знаний</p>
							<p>✓ Гибкость методологии</p>
							<p>✓ Применим везде</p>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white px-4 py-2 rounded-lg text-center font-semibold mb-4">
							PRINCE2
						</div>
						<p className="text-sm mb-3"><span className="font-semibold">Происхождение:</span> Великобритания</p>
						<p className="text-sm mb-3"><span className="font-semibold">Подход:</span> Продуктовый</p>
						<p className="text-sm mb-4"><span className="font-semibold">Фокус:</span> Управление продуктом</p>
						<div className="bg-white p-3 rounded-lg text-xs space-y-1">
							<p>✓ 7 принципов</p>
							<p>✓ 7 процессов</p>
							<p>✓ Жесткая структура</p>
							<p>✓ Для госпроектов</p>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white px-4 py-2 rounded-lg text-center font-semibold mb-4">
							ISO 21500
						</div>
						<p className="text-sm mb-3"><span className="font-semibold">Происхождение:</span> Международный</p>
						<p className="text-sm mb-3"><span className="font-semibold">Подход:</span> Универсальный</p>
						<p className="text-sm mb-4"><span className="font-semibold">Фокус:</span> Гармонизация</p>
						<div className="bg-white p-3 rounded-lg text-xs space-y-1">
							<p>✓ Основа для стандартизации</p>
							<p>✓ Совместимость со всеми</p>
							<p>✓ Общие принципы</p>
							<p>✓ Не предписывает "как"</p>
						</div>
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<h3 className="text-lg font-semibold mb-3 text-[#377dff]">Что общего?</h3>
						<ul className="space-y-2 text-sm">
							<li>• Устав проекта как ключевой документ инициации</li>
							<li>• Идентификация стейкхолдеров</li>
							<li>• Оценка жизнеспособности проекта</li>
							<li>• Определение границ и целей</li>
						</ul>
					</div>
					
					<div className="bg-[#e8f4fd] p-6 rounded-xl">
						<h3 className="text-lg font-semibold mb-3 text-[#377dff]">Российская практика</h3>
						<ul className="space-y-2 text-sm">
							<li>• Газпром: PMBOK + внутренние стандарты</li>
							<li>• РЖД: Гибрид PMBOK + госстандарты</li>
							<li>• Росатом: ISO 21500 + отраслевые нормы</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

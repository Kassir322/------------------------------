import React from 'react'

export default function Slide7() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Оценка жизнеспособности проекта
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						7
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6 mb-8">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							💰
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Финансовая</h3>
						<ul className="space-y-2 text-sm">
							<li>• NPV (чистая приведенная стоимость)</li>
							<li>• IRR (внутренняя норма доходности)</li>
							<li>• Срок окупаемости</li>
							<li>• Анализ чувствительности</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							⚙️
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Техническая</h3>
						<ul className="space-y-2 text-sm">
							<li>• Доступность технологий</li>
							<li>• Квалификация команды</li>
							<li>• Техническая инфраструктура</li>
							<li>• Совместимость систем</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							🏢
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Организационная</h3>
						<ul className="space-y-2 text-sm">
							<li>• Соответствие стратегии</li>
							<li>• Наличие ресурсов</li>
							<li>• Организационная культура</li>
							<li>• Поддержка руководства</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#e8f4fd] p-6 rounded-xl">
					<h3 className="text-xl font-semibold mb-4 text-center text-[#377dff]">Пример: РЖД ВСМ Москва-Казань</h3>
					<div className="grid grid-cols-3 gap-6 text-center">
						<div>
							<p className="text-sm font-semibold mb-2">Финансовая оценка</p>
							<p className="text-xs">NPV положительный при горизонте 30 лет<br/>IRR = 8.2%<br/>Окупаемость: 25 лет</p>
						</div>
						<div>
							<p className="text-sm font-semibold mb-2">Техническая оценка</p>
							<p className="text-xs">Технологии апробированы в Китае и Японии<br/>Требуется локализация<br/>Геология изучена</p>
						</div>
						<div>
							<p className="text-sm font-semibold mb-2">Организационная оценка</p>
							<p className="text-xs">Поддержка Правительства<br/>Создание спецкомпании<br/>Госфинансирование</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

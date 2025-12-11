import React from 'react'

export default function Slide6() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Оценка жизнеспособности проекта
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						6
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6 mb-8">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							💰
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Финансовая</h3>
						<p className="text-sm mb-3 text-black">Есть ли деньги на проект? Окупится ли он?</p>
						<ul className="space-y-2 text-sm text-black">
							<li>• Стартовый бюджет</li>
							<li>• Источники финансирования</li>
							<li>• Срок окупаемости</li>
							<li>• Возможная прибыль</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							⚙️
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Техническая</h3>
						<p className="text-sm mb-3 text-black">Можем ли мы это реализовать технически?</p>
						<ul className="space-y-2 text-sm text-black">
							<li>• Доступность технологий</li>
							<li>• Квалификация команды</li>
							<li>• Инфраструктура (серверы)</li>
							<li>• Масштабируемость</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<div className="bg-[#377dff] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
							🏢
						</div>
						<h3 className="text-xl font-semibold mb-3 text-center text-[#377dff]">Организационная</h3>
						<p className="text-sm mb-3 text-black">Готова ли компания к проекту?</p>
						<ul className="space-y-2 text-sm text-black">
							<li>• Наличие ресурсов</li>
							<li>• Поддержка руководства</li>
							<li>• Организационная культура</li>
							<li>• Соответствие стратегии</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#e8f4fd] p-6 rounded-xl">
					<h3 className="text-xl font-semibold mb-4 text-center text-[#377dff]">Пример: ВКонтакте (2006)</h3>
					<div className="grid grid-cols-3 gap-6 text-center">
						<div>
							<p className="text-sm font-semibold mb-2 text-black">Финансовая</p>
							<p className="text-xs text-black">$40 тыс стартовый капитал<br/>Монетизация отложена<br/>Рост за счет инвесторов</p>
						</div>
						<div>
							<p className="text-sm font-semibold mb-2 text-black">Техническая</p>
							<p className="text-xs text-black">PHP + MySQL<br/>Команда из 3 разработчиков<br/>Простая архитектура</p>
						</div>
						<div>
							<p className="text-sm font-semibold mb-2 text-black">Организационная</p>
							<p className="text-xs text-black">Молодая команда<br/>Гибкость стартапа<br/>Минимальная бюрократия</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

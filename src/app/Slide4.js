import React from 'react'

export default function Slide4() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Кейс: Газпром Нефть — Цифровая трансформация
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						4
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="bg-[#fff3cd] p-6 rounded-xl">
							<h3 className="text-xl font-semibold mb-3 text-[#000]">🎯 Проблема</h3>
							<p className="text-lg">Необходимость повышения эффективности добычи нефти через внедрение цифровых технологий на месторождениях</p>
						</div>
						
						<div className="bg-[#e8f4fd] p-6 rounded-xl">
							<h3 className="text-xl font-semibold mb-3 text-[#377dff]">💰 Результат</h3>
							<p className="text-2xl font-bold text-[#377dff] mb-2">180 млн руб/год</p>
							<p className="text-lg">Экономия от оптимизации процессов добычи</p>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">📋 Что сделали на этапе инициации:</h3>
						<ul className="space-y-3 text-lg">
							<li>✓ Анализ текущих бизнес-процессов добычи</li>
							<li>✓ Определение ключевых метрик эффективности</li>
							<li>✓ Оценка технологической готовности</li>
							<li>✓ Картирование заинтересованных сторон (производственники, IT, руководство)</li>
							<li>✓ Расчет ROI и сроков окупаемости</li>
							<li>✓ Пилотное тестирование на одном месторождении</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						Ключевой фактор успеха: глубокий анализ бизнес-процессов до начала внедрения
					</p>
				</div>
			</div>
		</div>
	)
}

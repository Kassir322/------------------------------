import React from 'react'

export default function Slide3() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Кейс: Яндекс.Дзен (2017)
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						3
					</span>
				</h1>
				
				<div className="grid grid-cols-2 gap-8">
					<div className="space-y-6">
						<div className="bg-[#fff3cd] p-6 rounded-xl">
							<h3 className="text-xl font-semibold mb-3 text-[#000]">🎯 Проблема</h3>
							<p className="text-lg">Пользователи тратят много времени на поиск интересного контента. Нужна персонализированная лента рекомендаций.</p>
						</div>
						
						<div className="bg-[#e8f4fd] p-6 rounded-xl">
							<h3 className="text-xl font-semibold mb-3 text-[#377dff]">💰 Результат через 3 года</h3>
							<p className="text-2xl font-bold text-[#377dff] mb-2">30 млн активных пользователей</p>
							<p className="text-lg">Монетизация через рекламу и подписки авторов</p>
						</div>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">📋 Этап инициации (2016-2017):</h3>
						<ul className="space-y-3 text-base">
							<li>✓ <span className="font-semibold">Бизнес-кейс:</span> обоснование выгод проекта (рост времени на сайте, новые пользователи)</li>
							<li>✓ <span className="font-semibold">Анализ аудитории:</span> изучение потребностей и интересов пользователей</li>
							<li>✓ <span className="font-semibold">MVP</span> (минимальная версия продукта): запуск через 6 месяцев для тестирования</li>
							<li>✓ <span className="font-semibold">Технологическая проработка:</span> алгоритмы рекомендаций на основе машинного обучения</li>
							<li>✓ <span className="font-semibold">Монетизация:</span> модель заработка — реклама для издателей</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						Быстрый запуск MVP позволил проверить гипотезу за полгода
					</p>
				</div>
			</div>
		</div>
	)
}

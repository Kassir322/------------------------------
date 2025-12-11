import React from 'react'

export default function Slide5() {
	return (
		<div className="h-screen w-screen flex flex-col items-center justify-center bg-[#fefefe] p-12">
			<div className="max-w-5xl w-full">
				<h1 className="text-4xl font-bold mb-10 text-center text-[#000]">
					Кейс: ВКонтакте (2006)
					<span className="bg-[#377dff] ml-5 px-2 text-4xl rounded-md text-white">
						5
					</span>
				</h1>
				
				<div className="grid grid-cols-3 gap-6 mb-6">
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">🚀</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">3 месяца</p>
						<p className="text-lg text-black">От идеи до запуска</p>
					</div>
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">👥</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">100 млн</p>
						<p className="text-lg text-black">Пользователей за 10 лет</p>
					</div>
					<div className="bg-[#e8f4fd] p-6 rounded-xl text-center">
						<p className="text-4xl mb-2">💰</p>
						<p className="text-3xl font-bold text-[#377dff] mb-2">$40 000</p>
						<p className="text-lg text-black">Стартовый бюджет</p>
					</div>
				</div>
				
				<div className="grid grid-cols-2 gap-8">
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Инициация (осень 2006)</h3>
						<ul className="space-y-2 text-base text-black">
							<li>✓ <span className="font-semibold">Проблема:</span> Нет удобной соцсети для студентов в России</li>
							<li>✓ <span className="font-semibold">Целевая аудитория:</span> Студенты вузов Санкт-Петербурга</li>
							<li>✓ <span className="font-semibold">Минимальный бюджет:</span> $40 тыс на серверы и разработку</li>
							<li>✓ <span className="font-semibold">MVP:</span> Базовые функции — профиль, друзья, сообщения</li>
							<li>✓ <span className="font-semibold">Срок:</span> 3 месяца разработки</li>
						</ul>
					</div>
					
					<div className="bg-[#f3f5f7] p-6 rounded-xl">
						<h3 className="text-xl font-semibold mb-4 text-[#377dff]">Концепция проекта</h3>
						<ul className="space-y-2 text-base text-black">
							<li>• <span className="font-semibold">Уникальность:</span> Русскоязычный интерфейс + локальный контент</li>
							<li>• <span className="font-semibold">Стратегия роста:</span> Вирусное распространение через студентов</li>
							<li>• <span className="font-semibold">Монетизация:</span> Отложена до набора аудитории</li>
							<li>• <span className="font-semibold">Риски:</span> Конкуренция с Одноклассниками, низкий интернет-проникновение</li>
						</ul>
					</div>
				</div>
				
				<div className="bg-[#377dff] text-white p-4 rounded-xl text-center mt-6">
					<p className="text-lg font-semibold">
						Стартапы начинают с минимальной версии продукта (MVP) для быстрой проверки идеи
					</p>
				</div>
			</div>
		</div>
	)
}
